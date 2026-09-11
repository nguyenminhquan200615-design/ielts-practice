# IELTS Atlas – Giao diện tiếng Việt

Mở `index.html` bằng Chrome hoặc Edge để sử dụng. Nếu trang đang mở từ trước, tải lại trang để nhận bản dịch mới.

Giao diện tiếng Việt bao gồm thanh điều hướng, kho đề, tiêu đề phụ của đề, lịch sử luyện tập, thống kê, cài đặt, sao lưu, hướng dẫn ban đầu và các thao tác luyện đọc, học từ vựng.

Bài đọc, câu hỏi và đáp án tiếng Anh được giữ nguyên để luyện IELTS. Nội dung tài liệu gốc, lời giải và nghĩa từ vựng trong bộ dữ liệu vẫn dùng ngôn ngữ của nguồn; bản dịch giao diện không dịch các nội dung học liệu này. Ghi chú và câu trả lời do người học nhập không bị thay đổi.

## Phát triển

- Bộ dịch giao diện: `js/i18n/vi.js`.
- Nội dung tĩnh: `index.html` và `assets/generated/reading-exams/reading-practice-unified.html`.
- Các trang tải động dùng cùng bộ dịch. Mã đề, đường dẫn kho đề, khoá lưu trữ và dữ liệu sao lưu giữ nguyên để tương thích với dữ liệu cũ.
- Thêm `translate="no"` cho nội dung người dùng hoặc học liệu mới cần giữ nguyên. Không đưa bản dịch vào giá trị `data-*`, mã đáp án hoặc khoá dữ liệu.
- Khi sửa mã nguồn, chạy `node scripts/build-bundles.mjs`, rồi `node scripts/build-bundles.mjs --check`.

## Kiểm tra

Trong thư mục `developer`, cài các phụ thuộc bằng `npm install`, sau đó chạy `npm test`.

Kiểm tra giao diện tiếng Việt từ thư mục gốc bằng `node developer/tests/e2e/vietnamese_ui.node.js`. Kiểm tra này dùng Playwright với Edge; đặt `BROWSER_CHANNEL=chrome` nếu dùng Chrome. Có thể đặt `PLAYWRIGHT_MODULE` để chỉ đến bản Playwright có sẵn trong môi trường.

Kiểm tra giao diện bao gồm điều hướng, các cửa sổ cài đặt và sao lưu, nội dung cập nhật động, bảo toàn dữ liệu nhập và kéo thả đáp án bài đọc.

Giấy phép mã nguồn giữ nguyên theo [LICENSE](LICENSE). Thông tin dự án và nguồn học liệu có trong [README gốc](README.md).
