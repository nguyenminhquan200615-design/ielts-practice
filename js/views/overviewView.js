(function (global) {
    'use strict';

    class OverviewView {
        constructor({
            domBuilder = global.DOM?.builder,
            events = global.DOM?.events,
            containerSelector = '#category-overview'
        } = {}) {
            this.dom = domBuilder;
            this.events = events;
            this.containerSelector = containerSelector;
            this.actions = {
                onBrowseCategory: null,
                onRandomPractice: null,
                onStartSuite: null,
                onStartEndless: null
            };
            this.delegatesBound = false;
        }

        setActions(actions = {}) {
            this.actions = {
                ...this.actions,
                ...actions
            };
        }

        ensureDelegates() {
            if (this.delegatesBound || !this.events) {
                return;
            }

            const view = this;
            this.events.delegate('click', `${this.containerSelector} [data-action="browse-category"]`, function (event) {
                event.preventDefault();
                if (typeof view.actions.onBrowseCategory === 'function') {
                    view.actions.onBrowseCategory(
                        this.dataset.category,
                        this.dataset.type,
                        this.dataset.filterMode,
                        this.dataset.path
                    );
                }
            });

            this.events.delegate('click', `${this.containerSelector} [data-action="start-random-practice"]`, function (event) {
                event.preventDefault();
                if (typeof view.actions.onRandomPractice === 'function') {
                    view.actions.onRandomPractice(
                        this.dataset.category,
                        this.dataset.type,
                        this.dataset.filterMode,
                        this.dataset.path
                    );
                }
            });

            this.events.delegate('click', `${this.containerSelector} [data-action="start-suite-mode"]`, function (event) {
                event.preventDefault();
                if (typeof view.actions.onStartSuite === 'function') {
                    view.actions.onStartSuite();
                }
            });

            this.events.delegate('click', `${this.containerSelector} [data-action="start-endless-mode"]`, function (event) {
                event.preventDefault();
                if (typeof view.actions.onStartEndless === 'function') {
                    view.actions.onStartEndless();
                }
            });

            this.delegatesBound = true;
        }

        render(stats, {
            container = document.querySelector(this.containerSelector),
            actions = null
        } = {}) {
            if (!container || !this.dom) {
                return;
            }

            if (actions) {
                this.setActions(actions);
            }

            this.ensureDelegates();

            const fragment = document.createDocumentFragment();
            const readingSection = this.createSection({
                title: 'Luyện đọc',
                entries: stats?.reading || [],
                rightButtons: [this.createEndlessModeButton(), this.createSuiteModeButton()]
            });

            fragment.appendChild(readingSection);

            // [DISABLED] 听力入口已禁用
            // const listeningEntries = (stats?.listening || []).filter((entry) => entry.total > 0);
            // if (listeningEntries.length > 0) {
            //     fragment.appendChild(this.createSection({
            //         title: '听力',
            //         icon: '🎧',
            //         entries: listeningEntries,
            //         style: { gridColumn: '1 / -1', marginTop: '40px' }
            //     }));
            // }

            // [DISABLED] 听力练习 - 频率分类入口已禁用
            // const specialListeningEntries = (stats?.specialListening || []).filter((entry) => entry.total > 0);
            // if (specialListeningEntries.length > 0) {
            //     fragment.appendChild(this.createSection({
            //         title: '听力练习 - 频率分类',
            //         icon: '🎧',
            //         entries: specialListeningEntries,
            //         style: { gridColumn: '1 / -1', marginTop: '40px' },
            //         isSpecial: true
            //     }));
            // }

            this.dom.replaceContent(container, fragment);
        }

        createSection({ title, entries, rightButton, rightButtons, isSpecial = false }) {
            const sectionFragment = document.createDocumentFragment();

            const titleContainer = this.dom.create('div', {
                className: 'overview-category-heading'
            });

            titleContainer.appendChild(this.dom.create('h3', {
                className: 'overview-section-title',
                style: { margin: 0 }
            }, title));


            const buttons = rightButtons || (rightButton ? [rightButton] : []);
            if (buttons.length > 0) {
                const btnGroup = this.dom.create('div', {
                    className: 'overview-category-heading__actions'
                });
                buttons.forEach(btn => btnGroup.appendChild(btn));
                titleContainer.appendChild(btnGroup);
            }

            sectionFragment.appendChild(titleContainer);

            entries.forEach((entry) => {
                sectionFragment.appendChild(this.createCategoryCard({
                    entry,
                    isSpecial
                }));
            });

            return sectionFragment;
        }

        createCategoryCard({ entry, isSpecial = false }) {
            const actions = this.createCardActions(entry, isSpecial);

            const titleText = isSpecial
                ? entry.category
                : `${entry.category} ${entry.type === 'reading' ? 'Đọc' : 'Nghe'}`;

            const content = [
                this.dom.create('div', { className: 'category-header' }, [
                    this.dom.create('div', { className: 'category-icon' }, this.createSvgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><path d="M8 7h8M8 11h7"></path>')),
                    this.dom.create('div', {}, [
                        this.dom.create('div', { className: 'category-title' }, titleText),
                        this.dom.create('div', { className: 'category-meta' }, `${entry.total} bài luyện`)
                    ])
                ]),
                actions
            ];

            return this.dom.create('div', { className: 'category-card' }, content);
        }

        createCardActions(entry, isSpecial = false) {
            const browseDataset = isSpecial ? {
                action: 'browse-category',
                category: entry.category,
                type: entry.type,
                filterMode: entry.filterMode,
                path: entry.path
            } : {
                action: 'browse-category',
                category: entry.category,
                type: entry.type
            };

            const browseButton = this.dom.create('button', {
                className: 'btn',
                type: 'button',
                dataset: browseDataset
            }, [
                this.createSvgIcon('<path d="M4 6h16M4 12h16M4 18h10"></path>'),
                this.dom.create('span', {}, 'Xem danh sách')
            ]);

            const randomDataset = isSpecial ? {
                action: 'start-random-practice',
                category: entry.category,
                type: entry.type,
                filterMode: entry.filterMode,
                path: entry.path
            } : {
                action: 'start-random-practice',
                category: entry.category,
                type: entry.type
            };

            const randomButton = this.dom.create('button', {
                className: 'btn btn-secondary',
                type: 'button',
                dataset: randomDataset
            }, [
                this.createSvgIcon('<path d="M16 3h5v5"></path><path d="M4 20 21 3"></path><path d="M21 16v5h-5"></path><path d="m15 15 6 6"></path><path d="m4 4 5 5"></path>'),
                this.dom.create('span', {}, 'Luyện ngẫu nhiên')
            ]);

            return this.dom.create('div', {
                className: 'category-actions'
            }, [browseButton, randomButton]);
        }

        createSvgIcon(svgContent) {
            const span = document.createElement('span');
            span.className = 'ui-emoji-icon';
            span.setAttribute('aria-hidden', 'true');
            span.style.display = 'inline-flex';
            span.innerHTML = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${svgContent}</svg>`;
            return span;
        }

        createSuiteModeButton() {
            return this.dom.create('button', {
                className: 'shui-glass-btn',
                type: 'button',
                dataset: {
                    action: 'start-suite-mode',
                    overviewAction: 'suite'
                },
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                }
            }, [
                this.createSvgIcon('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M14 3v6h6"></path><path d="M8 13h8M8 17h6"></path>'),
                this.dom.create('span', {}, 'Luyện trọn bộ đề')
            ]);
        }

        createEndlessModeButton() {
            return this.dom.create('button', {
                className: 'shui-glass-btn',
                type: 'button',
                id: 'endless-mode-btn',
                dataset: {
                    action: 'start-endless-mode',
                    overviewAction: 'endless'
                },
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                }
            }, [
                this.createSvgIcon('<path d="M20 6v5h-5"></path><path d="M4 18v-5h5"></path><path d="M6.2 11a6 6 0 0 1 10.6-2.4L20 11"></path><path d="M17.8 13a6 6 0 0 1-10.6 2.4L4 13"></path>'),
                this.dom.create('span', {}, 'Luyện liên tục')
            ]);
        }
    }

    global.AppViews = global.AppViews || {};
    global.AppViews.OverviewView = OverviewView;
})(window);
