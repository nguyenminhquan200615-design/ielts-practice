import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ headless: true, channel: process.env.BROWSER_CHANNEL || 'msedge' });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
try {
    await page.goto(new URL('../../../index.html', import.meta.url).href);
    await page.locator('[data-index-action="accept-license"]').click();
    await page.waitForTimeout(500);
    // The tour is tested separately; do not let it cover navigation controls.
    const skip = page.locator('[data-action="skip"]:visible');
    if (await skip.count()) await skip.first().click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'vi');
    for (const view of ['overview', 'browse', 'practice', 'more', 'settings']) {
        await page.locator(`.main-nav [data-view="${view}"]`).click();
        await page.waitForTimeout(350);
        const text = await page.locator(`#${view}-view`).innerText();
        assert.doesNotMatch(text, /[\u3400-\u9fff]/, `${view} is localized`);
        if (view === 'browse') {
            const search = page.getByPlaceholder('Tìm đề thi...');
            await search.fill('luoc su tra');
            await search.press('Enter');
            await page.waitForTimeout(350);
            assert.match(await page.locator('#browse-view').innerText(), /A Brief History of Tea/);
            assert.doesNotMatch(await page.locator('#browse-view').innerText(), /Maori Fish Hooks/);
            await search.fill('');
            await search.press('Enter');
        }
    }
    for (const id of ['practice-settings-entry-btn', 'library-manager-btn', 'external-backup-entry-btn', 'backup-list-btn']) {
        const entry = page.locator('#' + id);
        if (!await entry.count()) continue;
        await entry.click();
        await page.waitForTimeout(150);
        assert.doesNotMatch(await page.locator('body').innerText(), /[\u3400-\u9fff]/, `${id} is localized`);
        await page.locator('.theme-modal.show .theme-modal-close').last().click();
    }
    await page.locator('.main-nav [data-view="more"]').click();
    await page.getByText('Ôn từ vựng', { exact: true }).click();
    await page.waitForTimeout(500);
    assert.doesNotMatch(await page.locator('body').innerText(), /[\u3400-\u9fff]/, 'Vocabulary controls are localized');
    // Text and attributes added after boot translate without replacing nodes or values.
    await page.evaluate(() => {
        const host = document.createElement('div');
        host.id = 'vi-regression';
        host.innerHTML = '<button title="保存笔记">保存</button><input value="答案"><textarea>Note 答案</textarea><div translate="no">Note 答案</div>';
        host.querySelector('button').addEventListener('click', () => { host.dataset.clicked = 'yes'; });
        document.body.appendChild(host);
    });
    await page.locator('#vi-regression button').click();
    assert.equal(await page.locator('#vi-regression').getAttribute('data-clicked'), 'yes');
    assert.equal(await page.locator('#vi-regression button').innerText(), 'Lưu');
    assert.equal(await page.locator('#vi-regression button').getAttribute('title'), 'Lưu ghi chú');
    assert.equal(await page.locator('#vi-regression input').inputValue(), '答案');
    assert.equal(await page.locator('#vi-regression textarea').inputValue(), 'Note 答案');
    assert.equal(await page.locator('#vi-regression [translate="no"]').innerText(), 'Note 答案');
    await page.goto(new URL('../../../assets/generated/reading-exams/reading-practice-unified.html?examId=p1-high-01', import.meta.url).href);
    await page.locator('#question-groups .drag-item').first().waitFor();
    const heading = page.locator('#question-groups [data-heading="viii"]');
    const answerBox = page.locator('#left [data-question="q1"]');
    await heading.dragTo(answerBox);
    assert.match(await answerBox.innerText(), /chance discovery/i, 'Dragging an English answer still works');
    assert.match(await page.locator('#left').innerText(), /tea/i, 'English passage remains available');
    if (process.env.VI_SCREENSHOT) await page.screenshot({ path: process.env.VI_SCREENSHOT, fullPage: true });
    assert.deepEqual(errors, [], 'No browser JavaScript errors');
    console.log('Vietnamese navigation smoke check passed.');
} finally {
    await browser.close();
}
