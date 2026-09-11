/* Vietnamese presentation layer. Original dataset values and storage keys stay stable. */
(function (global) {
    'use strict';
    if (global.IELTSVietnamese) return;
    const dictionary = Object.fromEntries(`
正在唤醒 IELTS Atlas...|Đang khởi động IELTS Atlas...
初始化资源...|Đang tải tài nguyên...
系统就绪|Hệ thống đã sẵn sàng
启动异常，已启用降级模式|Khởi động gặp lỗi, đã bật chế độ dự phòng
项目仅授权ZYZ Reading Walks|Dự án chỉ uỷ quyền cho ZYZ Reading Walks
提供分发，小红书号：276752989|phân phối. Tài khoản Xiaohongshu: 276752989
小红书主页|Trang Xiaohongshu
小红书|Xiaohongshu
总览|Tổng quan
题库浏览|Kho đề
题库列表|Danh sách đề
阅读背题选题|Chọn đề đọc để ôn
练习记录|Lịch sử luyện tập
更多|Tiện ích
设置|Cài đặt
学习总览|Tổng quan học tập
列表偏好|Tuỳ chọn danh sách
退出阅读背题模式|Thoát chế độ ôn đề đọc
退出背题|Thoát ôn đề
列表位置记录|Nhớ vị trí danh sách
全部|Tất cả
阅读|Đọc
听力|Nghe
搜索题目...|Tìm đề thi...
搜索题目|Tìm đề thi
清除搜索|Xoá tìm kiếm
频率筛选|Lọc theo tần suất
高频|Thường gặp
中频|Tần suất vừa
低频|Ít gặp
超高频|Rất thường gặp
次高频|Khá thường gặp
非高频|Ít gặp
题库排序|Sắp xếp kho đề
默认排序|Thứ tự mặc định
频率高→低|Tần suất giảm dần
难度高→低|Độ khó giảm dần
正在加载题目列表...|Đang tải danh sách đề...
折叠练习统计卡片|Thu gọn thống kê luyện tập
展开练习统计卡片|Mở rộng thống kê luyện tập
已练习题目|Đề đã luyện
累计巩固练习|Tổng số bài luyện tập
平均正确率|Tỷ lệ đúng trung bình
近期待练表现|Kết quả luyện tập gần đây
学习时长(分钟)|Thời gian học (phút)
聚焦沉浸时长|Thời gian tập trung
连续学习天数|Chuỗi ngày học
坚持天数|Số ngày duy trì
打开练习趋势筛选范围|Mở bộ lọc xu hướng luyện tập
关闭练习趋势筛选范围|Đóng bộ lọc xu hướng luyện tập
练习趋势筛选范围|Phạm vi xu hướng luyện tập
练习趋势|Xu hướng luyện tập
记录|Lượt luyện
均值|Trung bình
最近十次|10 lượt gần nhất
最近七天|7 ngày gần nhất
最近一月|30 ngày gần nhất
最近20次|20 lượt gần nhất
暂无趋势数据|Chưa có dữ liệu xu hướng
筛选范围|Phạm vi lọc
练习热力图|Biểu đồ hoạt động
切换热力图月份|Đổi tháng trên biểu đồ
查看上个月|Xem tháng trước
上个月|Tháng trước
本月|Tháng này
查看下个月|Xem tháng sau
下个月|Tháng sau
配置自定义组件|Tuỳ chỉnh bảng thống kê
练习活动热力图|Biểu đồ hoạt động luyện tập
本月暂无练习记录|Chưa có lượt luyện tập trong tháng này
做题量颜色图例|Chú giải màu số bài đã làm
少|Ít
多|Nhiều
中高频练习进度|Tiến độ đề thường gặp và tần suất vừa
中高频正确率|Tỷ lệ đúng theo tần suất
高频正确率|Tỷ lệ đúng của đề thường gặp
中频正确率|Tỷ lệ đúng của đề tần suất vừa
暂无阅读错题数据|Chưa có dữ liệu câu đọc trả lời sai
最近10次阅读错题题型分布|Phân bố dạng câu sai trong 10 bài đọc gần nhất
自定义组件|Tuỳ chỉnh bảng thống kê
关闭自定义练习组件选择|Đóng tuỳ chọn bảng thống kê
自定义练习组件|Bảng thống kê tuỳ chỉnh
中高频余量|Đề thường gặp còn lại
阅读错题雷达|Biểu đồ dạng câu đọc sai
练习历史|Lịch sử luyện tập
导出Markdown|Xuất Markdown
批量删除|Xoá nhiều mục
清除记录|Xoá lịch sử
暂无练习记录|Chưa có lịch sử luyện tập
暂无任何练习记录|Chưa có lượt luyện tập nào
开始练习后，记录将自动保存在这里|Lịch sử sẽ tự động được lưu tại đây sau khi bạn luyện tập
系统设置|Cài đặt hệ thống
系统管理|Quản lý hệ thống
系统工具和设置选项|Công cụ hệ thống và các tuỳ chọn
清理数据|Dọn dữ liệu
主题切换|Đổi giao diện
练习设置|Cài đặt luyện tập
题库管理|Quản lý kho đề
显示引导|Xem hướng dẫn
数据管理|Quản lý dữ liệu
本地磁盘备份（推荐）、应用内快照、导入与导出。清理浏览器站点数据不会删除已写入磁盘的备份文件。|Sao lưu vào máy (khuyên dùng), bản lưu trong ứng dụng, nhập và xuất dữ liệu. Xoá dữ liệu trang web trong trình duyệt không xoá các tệp sao lưu đã lưu vào máy.
本地磁盘备份|Sao lưu vào máy
创建应用内备份|Tạo bản sao lưu trong ứng dụng
应用内备份列表|Danh sách bản sao lưu trong ứng dụng
导出到下载|Tải bản xuất dữ liệu
导入数据|Nhập dữ liệu
系统信息|Thông tin hệ thống
题库状态: 已加载完整索引|Trạng thái kho đề: Đã tải toàn bộ chỉ mục
题目总数:|Tổng số đề:
HTML题目:|Đề HTML:
PDF题目:|Đề PDF:
最后更新:|Cập nhật lần cuối:
问题反馈|Gửi phản hồi
Salloway呈现|Phát triển bởi Salloway
更多工具|Tiện ích học tập
探索额外的学习辅助功能，助你高效备考。|Khám phá các công cụ hỗ trợ để ôn thi hiệu quả hơn.
全屏时钟|Đồng hồ toàn màn hình
沉浸式模拟指针时钟，实时同步系统时间，陪伴你的专注时刻。|Đồng hồ kim đồng bộ với giờ hệ thống, giúp bạn tập trung khi học.
进入|Mở
单词背诵|Ôn từ vựng
SM-2记忆算法，随时继续你的词汇任务。|Ôn từ vựng với thuật toán lặp lại ngắt quãng SM-2, tiếp tục học bất cứ lúc nào.
阅读背题|Ôn đề đọc
复用统一阅读页，查看答案、解析与定位高亮，并可切换测试。|Xem đáp án, lời giải và vị trí dẫn chứng trên trang đọc; có thể chuyển sang làm bài kiểm tra.
成就|Thành tích
查看你解锁的徽章和荣誉。|Xem các huy hiệu và thành tích bạn đã đạt được.
查看|Xem
切换全屏模式|Bật/tắt toàn màn hình
退出全屏模式|Thoát toàn màn hình
关闭时钟|Đóng đồng hồ
模拟指针时钟|Đồng hồ kim
翻页时钟|Đồng hồ lật
数字时钟|Đồng hồ số
低对比度数字时钟|Đồng hồ số tương phản thấp
切换到模拟指针时钟|Chuyển sang đồng hồ kim
切换到翻页时钟|Chuyển sang đồng hồ lật
切换到数字时钟|Chuyển sang đồng hồ số
切换到低对比度数字时钟|Chuyển sang đồng hồ số tương phản thấp
关闭|Đóng
向左滚动主题列表|Cuộn danh sách giao diện sang trái
向右滚动主题列表|Cuộn danh sách giao diện sang phải
晨雾群山|Núi trong sương sớm
深海孤航|Hải trình biển sâu
落日雾花|Hoa trong hoàng hôn
墨染字花|Hoa mực
动态|Ảnh động
静态|Ảnh tĩnh
应用|Áp dụng
我的成就|Thành tích của tôi
开源项目使用须知|Lưu ý sử dụng dự án mã nguồn mở
感谢使用！本项目是免费软件，采用|Cảm ơn bạn đã sử dụng! Đây là phần mềm miễn phí, được phát hành theo
发布。|.
我们明确反对任何形式的倒卖、改名后二次分发、牟利、使用该项目商业引流等行为。|Nhóm phát triển phản đối việc bán lại, đổi tên để phân phối lại, trục lợi hoặc dùng dự án để thu hút khách hàng thương mại.
本项目的初衷是自由使用、学习与改进，而不是作为倒卖工具获取不正当收益。|Dự án được tạo ra để mọi người tự do sử dụng, học hỏi và cải tiến; không nhằm phục vụ việc bán lại để thu lợi bất chính.
腾讯文档：|Tài liệu Tencent:
任何分发、修改或再发布行为，都必须遵守 GPL-3.0|Mọi hoạt động phân phối, sửa đổi hoặc tái phát hành phải tuân thủ GPL-3.0
协议，包括|, bao gồm việc 
公开源码、保留开源许可，并尊重用户的自由|công khai mã nguồn, giữ nguyên giấy phép mã nguồn mở và tôn trọng quyền tự do của người dùng
我已了解|Tôi đã hiểu
浏览题库|Duyệt kho đề
随机练习|Luyện đề ngẫu nhiên
套题模式|Luyện trọn bộ đề
无尽模式|Luyện liên tục
开始练习|Bắt đầu luyện tập
继续练习|Tiếp tục luyện tập
背题模式|Chế độ ôn đề
选择背题|Chọn đề để ôn
查看PDF版本|Xem phiên bản PDF
查看PDF|Xem PDF
为此题目生成HTML版本|Tạo phiên bản HTML cho đề này
生成HTML|Tạo HTML
最近正确率|Tỷ lệ đúng gần nhất
未找到匹配的题目|Không tìm thấy đề phù hợp
请调整筛选条件或搜索词后再试|Hãy thay đổi bộ lọc hoặc từ khoá rồi thử lại
加载题库|Tải kho đề
题库操作|Thao tác kho đề
题库配置列表|Danh sách cấu hình kho đề
暂无题库配置记录|Chưa có cấu hình kho đề
未命名题库|Kho đề chưa đặt tên
默认|Mặc định
当前|Hiện tại
切换|Chuyển đổi
删除|Xoá
未知时间|Thời gian không xác định
无标题|Chưa có tiêu đề
用时|Thời gian làm bài
删除此记录|Xoá lượt luyện này
选择练习记录|Chọn lượt luyện tập
难度|Độ khó
标准|Tiêu chuẩn
在下方切换或删除已导入的题库配置。|Chuyển đổi hoặc xoá cấu hình kho đề đã nhập ở bên dưới.
加载新题库或强制刷新当前题库索引。|Tải kho đề mới hoặc tải lại chỉ mục kho đề hiện tại.
强制刷新题库|Tải lại kho đề
计时模式|Chế độ tính giờ
正计时|Đếm tăng
倒计时|Đếm ngược
倒计时分钟|Số phút đếm ngược
最长用时限制|Giới hạn thời gian làm bài
最长用时分钟|Thời gian tối đa (phút)
到时处理|Khi hết giờ
仅提醒|Chỉ nhắc nhở
自动提交|Tự động nộp bài
锁定答案|Khoá câu trả lời
练习头部编码|Mã hiển thị trên bài luyện
控制练习页顶部栏显示的 6 位编码。|Thiết lập mã 6 chữ số hiển thị ở đầu trang luyện tập.
自动|Tự động
根据当前练习会话自动生成。|Tự động tạo theo phiên luyện tập hiện tại.
自定义|Tuỳ chỉnh
始终显示你指定的编码。|Luôn hiển thị mã bạn chọn.
练习页顶部栏 6 位编码|Mã 6 chữ số ở đầu trang luyện tập
随机|Ngẫu nhiên
保存|Lưu
阅读计时|Thời gian bài đọc
保存阅读设置|Lưu cài đặt bài đọc
听力计时|Thời gian bài nghe
保存听力设置|Lưu cài đặt bài nghe
下一步|Tiếp theo
上一步|Quay lại
跳过|Bỏ qua
继续|Tiếp tục
取消|Huỷ
确认|Xác nhận
确定|Đồng ý
返回|Quay lại
重试|Thử lại
完成|Hoàn tất
欢迎使用 IELTS Atlas|Chào mừng bạn đến với IELTS Atlas
这是一个专为雅思备考设计的练习系统，提供阅读练习、练习回顾、词汇背诵和数据备份等功能。让我们快速了解一下各项功能吧！|Hệ thống hỗ trợ luyện đọc IELTS, xem lại bài làm, ôn từ vựng và sao lưu dữ liệu. Hãy cùng tìm hiểu các chức năng chính!
开始探索|Khám phá ngay
导航栏|Thanh điều hướng
顶部导航栏包含 5 个主要功能区：总览、题库浏览、练习记录、更多工具和设置。点击即可切换不同功能。|Thanh điều hướng có 5 mục: Tổng quan, Kho đề, Lịch sử luyện tập, Tiện ích và Cài đặt. Nhấn vào từng mục để chuyển trang.
这里显示您的学习数据统计，包括分类卡片、练习进度和成绩趋势。帮助您全面了解学习情况。|Xem thống kê học tập theo nhóm đề, tiến độ luyện tập và xu hướng kết quả để theo dõi việc học của bạn.
浏览所有可用题目，支持搜索、筛选和排序功能。点击题目即可开始练习或查看解析。|Duyệt, tìm kiếm, lọc và sắp xếp các đề. Chọn một đề để luyện tập hoặc xem lời giải.
查看您的练习历史、成绩统计和学习时长，追踪学习进度和成长轨迹。|Xem lịch sử luyện tập, thống kê kết quả và thời gian học để theo dõi sự tiến bộ.
回顾模式|Chế độ xem lại
接下来我们将用一条示例练习记录，演示如何打开详情并进入回顾回放。|Tiếp theo, một bài làm mẫu sẽ giúp bạn tìm hiểu cách mở chi tiết và xem lại bài.
示例记录已添加|Đã thêm bài làm mẫu
我们已为您添加了一条可回放的示例练习记录，请点击“我知道了”继续。|Đã thêm một bài làm mẫu có thể xem lại. Nhấn “Tôi đã hiểu” để tiếp tục.
我知道了|Tôi đã hiểu
点击记录标题进入详情|Nhấn tiêu đề bài làm để xem chi tiết
点击下方这条示例记录的标题，可以打开练习记录详情页。|Nhấn tiêu đề bài làm mẫu bên dưới để mở trang chi tiết.
练习记录详情|Chi tiết bài luyện tập
这里是练习记录详情弹窗，您可以看到本次练习的成绩与元数据。|Cửa sổ này hiển thị kết quả và thông tin chi tiết của bài luyện tập.
进入回顾模式|Mở chế độ xem lại
点击标题上的回顾触发器，将打开该记录的回放窗口（需允许浏览器弹窗）。|Nhấn nút xem lại trên tiêu đề để mở bài làm trong cửa sổ mới (cần cho phép cửa sổ bật lên).
回顾模式已打开|Đã mở chế độ xem lại
示例回放窗口应已打开。您可在回放中查看答案对错；关闭练习窗口后点“继续”完成引导。|Cửa sổ bài làm mẫu đã được mở để bạn xem câu đúng và sai. Đóng cửa sổ luyện tập rồi nhấn “Tiếp tục” để hoàn thành hướng dẫn.
访问全屏时钟、单词背诵和成就系统等辅助工具，全方位提升备考效率。|Sử dụng đồng hồ toàn màn hình, ôn từ vựng và theo dõi thành tích để ôn thi hiệu quả hơn.
管理主题切换、数据备份导入导出、题库配置等系统选项。个性化您的学习体验！|Đổi giao diện, sao lưu, nhập và xuất dữ liệu, cấu hình kho đề theo nhu cầu học tập của bạn.
数据迁移与管理|Chuyển và quản lý dữ liệu
这里是数据安全的核心。可通过导出/导入 JSON，或使用本地磁盘备份在版本升级时搬家。|Bạn có thể xuất/nhập JSON hoặc sao lưu vào máy để chuyển dữ liệu khi nâng cấp phiên bản.
数据管理面板|Bảng quản lý dữ liệu
集中管理您的练习资产。升级或更换设备前，请务必先备份或导出。|Quản lý tập trung dữ liệu luyện tập. Hãy sao lưu hoặc xuất dữ liệu trước khi nâng cấp hay đổi thiết bị.
导出数据|Xuất dữ liệu
点击“导出数据”，系统会生成包含练习历史的 JSON 文件。请妥善保存，它是迁移到新版本的通行证。|Nhấn “Xuất dữ liệu” để tạo tệp JSON chứa lịch sử luyện tập. Giữ tệp này để chuyển dữ liệu sang phiên bản mới.
在新版本中点击“导入数据”并选择之前导出的 JSON 文件，即可找回练习历史。|Trong phiên bản mới, nhấn “Nhập dữ liệu” và chọn tệp JSON đã xuất để khôi phục lịch sử luyện tập.
动态背景卡顿时可切换为静态主题，减轻设备负担。|Nếu nền động bị giật, hãy chuyển sang giao diện tĩnh để giảm tải cho thiết bị.
恭喜完成！|Đã hoàn thành hướng dẫn!
您已了解系统的核心功能。现在开始您的雅思备考之旅吧！祝您取得理想的成绩。|Bạn đã nắm được các chức năng chính. Hãy bắt đầu luyện IELTS. Chúc bạn đạt kết quả mong muốn!
词库总量|Tổng số từ
今日复习|Ôn tập hôm nay
新词计划|Kế hoạch từ mới
每日新词目标|Mục tiêu từ mới mỗi ngày
背单词|Học từ vựng
返回更多工具|Quay lại tiện ích
Leitner + 艾宾浩斯调度|Lịch ôn Leitner + Ebbinghaus
新词|Từ mới
复习|Ôn tập
正确率|Tỷ lệ đúng
开始复习|Bắt đầu ôn tập
切换词表|Đổi danh sách từ
查看词表|Xem danh sách từ
导入词表|Nhập danh sách từ
导出进度|Xuất tiến độ
学习设置|Cài đặt học tập
返回菜单|Quay lại menu
词汇详情|Chi tiết từ vựng
释义|Nghĩa của từ
例句|Câu ví dụ
暂无例句|Chưa có câu ví dụ
来源与标签|Nguồn và nhãn
内置 IELTS 核心词表|Danh sách từ vựng IELTS cốt lõi có sẵn
笔记|Ghi chú
记录你的记忆技巧…|Ghi lại mẹo ghi nhớ của bạn…
保存笔记|Lưu ghi chú
词表|Danh sách từ
当前词表|Danh sách từ hiện tại
关闭词表|Đóng danh sách từ
搜索单词、释义、笔记|Tìm từ, nghĩa hoặc ghi chú
只看已学|Chỉ xem từ đã học
导出可分享词表|Xuất danh sách từ để chia sẻ
自定义每日任务与复习策略|Tuỳ chỉnh mục tiêu mỗi ngày và cách ôn tập
关闭设置|Đóng cài đặt
设置为 0 时，仅安排复习任务。|Đặt bằng 0 để chỉ ôn lại từ đã học.
每日复习上限|Số từ ôn tối đa mỗi ngày
建议 20-150，系统会按批次自动拆分。|Nên chọn 20–150 từ. Hệ thống sẽ tự chia thành từng lượt.
掌握判定（连续正确次数）|Số lần đúng liên tiếp để xác nhận đã thuộc
进入时提醒待复习任务|Nhắc ôn tập khi mở trang
保存设置|Lưu cài đặt
学习设置已更新|Đã cập nhật cài đặt học tập
请输入有效的数字范围。|Vui lòng nhập số trong phạm vi hợp lệ.
请输入有效的数字范围|Vui lòng nhập số trong phạm vi hợp lệ
保存失败，请稍后再试。|Không thể lưu, vui lòng thử lại sau.
保存失败|Không thể lưu
导入失败|Nhập dữ liệu thất bại
导出失败|Xuất dữ liệu thất bại
词汇进度已导出|Đã xuất tiến độ từ vựng
暂无词条|Chưa có từ vựng
无可用信息|Chưa có thông tin
待复习|Cần ôn tập
已掌握|Đã thuộc
学习中|Đang học
未学习|Chưa học
已学|Đã học
当前显示|Đang hiển thị
没有匹配的词条|Không tìm thấy từ phù hợp
单词|Từ vựng
状态|Trạng thái
掌握|Đã thuộc
待学习|Chưa học
复习上限|Giới hạn ôn tập
统一阅读页|Trang luyện đọc
IELTS 阅读练习|Luyện đọc IELTS
显示题卡|Hiện bảng câu hỏi
隐藏题卡|Ẩn bảng câu hỏi
阅读显示控制|Tuỳ chọn hiển thị bài đọc
显示/隐藏答案定位|Hiện/ẩn vị trí dẫn chứng
显示/隐藏笔记高亮|Hiện/ẩn phần tô sáng ghi chú
显示/隐藏普通高亮|Hiện/ẩn phần tô sáng
关闭笔记|Đóng ghi chú
NB: 该题型允许同一选项重复使用。|Lưu ý: Có thể sử dụng một lựa chọn nhiều lần cho dạng câu hỏi này.
原文|Bài đọc
段落讲解|Giải thích đoạn văn
题型讲解|Giải thích dạng câu hỏi
题目讲解|Giải thích câu hỏi
讲解|Giải thích
答案|Đáp án
无答案|Chưa có đáp án
定位|Dẫn chứng
未作答|Chưa trả lời
答题结果|Kết quả bài làm
得分|Điểm số
题号|Câu
你的答案|Câu trả lời của bạn
正确答案|Đáp án đúng
结果|Kết quả
重置测试|Làm lại bài kiểm tra
上一题|Câu trước
下一题|Câu tiếp theo
加载失败|Tải thất bại
拖到这里|Kéo vào đây
点击启停|Nhấn để chạy/tạm dừng
字号调整|Cỡ chữ
小|Nhỏ
中|Vừa
大|Lớn
背景颜色|Màu nền
浅色|Sáng
深色|Tối
笔记与标注|Ghi chú và đánh dấu
A 答案定位 · N 笔记高亮 · H 普通高亮 · Q 题卡|A Dẫn chứng · N Ghi chú · H Tô sáng · Q Bảng câu hỏi
调整原文与题目宽度|Điều chỉnh độ rộng bài đọc và câu hỏi
上一篇|Bài trước
下一篇|Bài tiếp theo
段落小标题|Ghép tiêu đề đoạn văn
判断题|Đúng / Sai / Không có thông tin
观点判断|Xác định quan điểm
单/多选题|Trắc nghiệm
摘要填空|Điền tóm tắt
句子填空|Hoàn thành câu
简答题|Trả lời ngắn
图表标注|Điền nhãn hình
流程图|Lưu đồ
表格填空|Điền bảng
信息配对|Ghép thông tin
特征匹配|Ghép đặc điểm
人名观点配对|Ghép người với quan điểm
其他题型|Dạng câu hỏi khác
已解锁|Đã mở khoá
解锁成就|Mở khoá thành tích
初出茅庐|Khởi đầu
渐入佳境|Ngày càng tiến bộ
百炼成钢|Rèn luyện bền bỉ
千锤百炼|Không ngừng rèn luyện
持之以恒|Kiên trì
习惯养成|Xây dựng thói quen
意志如铁|Ý chí sắt đá
长期主义|Bền bỉ dài lâu
开耳第一篇|Bài nghe đầu tiên
顺风耳 (铜)|Tai nghe tinh tường (Đồng)
顺风耳 (银)|Tai nghe tinh tường (Bạc)
顺风耳 (金)|Tai nghe tinh tường (Vàng)
开卷第一篇|Bài đọc đầu tiên
火眼金睛 (铜)|Đọc hiểu sắc bén (Đồng)
火眼金睛 (银)|Đọc hiểu sắc bén (Bạc)
火眼金睛 (金)|Đọc hiểu sắc bén (Vàng)
双线推进|Tiến bộ cả hai kỹ năng
均衡进阶|Phát triển cân bằng
专注一小时|Một giờ tập trung
沉浸五小时|Năm giờ chuyên tâm
深度备考|Ôn thi chuyên sâu
稳中有进|Tiến bộ vững chắc
高分稳定|Phong độ điểm cao
三次满分|Ba lần điểm tuyệt đối
十全十美|Mười lần hoàn hảo
快速稳定|Nhanh và chắc
闪电节奏|Tốc độ chớp nhoáng
迈出第一步|Bước đi đầu tiên
神射手|Chính xác tuyệt đối
唯快不破|Bứt phá tốc độ
完成第一次练习|Hoàn thành bài luyện đầu tiên
5分钟内完成高分练习|Hoàn thành bài luyện với điểm cao trong 5 phút
秒|giây
分钟|phút
小时|giờ
篇|bài
题|câu
个题目|đề
个词|từ
天|ngày
重置|Đặt lại
提交|Nộp bài
退出|Thoát
暂停|Tạm dừng
恢复|Tiếp tục
练习|Luyện tập
测试|Kiểm tra
帮助|Trợ giúp
加载中...|Đang tải...
加载中|Đang tải
未知|Không xác định
成功|Thành công
失败|Thất bại
错误|Lỗi
提示|Thông báo
警告|Cảnh báo
操作|Thao tác
详情|Chi tiết
全选|Chọn tất cả
取消全选|Bỏ chọn tất cả
导入|Nhập
导出|Xuất
备份|Sao lưu
恢复备份|Khôi phục bản sao lưu
刷新|Tải lại
清空|Xoá hết
展开|Mở rộng
收起|Thu gọn
选中|Đã chọn
推荐|Khuyên dùng
题库|Kho đề
练习完成|Đã hoàn thành bài luyện
未完成|Chưa hoàn thành
已完成|Đã hoàn thành
总计|Tổng cộng
总数|Tổng số
数量|Số lượng
名称|Tên
时间|Thời gian
日期|Ngày
类型|Loại
来源|Nguồn
标签|Nhãn
进度|Tiến độ
正确|Đúng
不正确|Sai
未开始|Chưa bắt đầu
已保存|Đã lưu
保存成功|Đã lưu thành công
提交答案|Nộp câu trả lời
确认提交|Xác nhận nộp bài
查看答案|Xem đáp án
查看解析|Xem lời giải
解析|Lời giải
重新开始|Bắt đầu lại
返回首页|Về trang chủ
返回题库|Quay lại kho đề
返回总览|Quay lại tổng quan
开始测试|Bắt đầu kiểm tra
结束练习|Kết thúc luyện tập
剩余时间|Thời gian còn lại
已用时间|Thời gian đã dùng
总题数|Tổng số câu
答对|Trả lời đúng
答错|Trả lời sai
未答|Chưa trả lời
完成率|Tỷ lệ hoàn thành
总用时|Tổng thời gian
平均用时|Thời gian trung bình
最高正确率|Tỷ lệ đúng cao nhất
最低正确率|Tỷ lệ đúng thấp nhất
练习次数|Số lượt luyện tập
学习时长|Thời gian học
连续学习|Chuỗi ngày học
导出内容为空|Không có nội dung để xuất
词汇数据尚未准备就绪|Dữ liệu từ vựng chưa sẵn sàng
词汇存储未准备就绪|Kho lưu từ vựng chưa sẵn sàng
设置面板未加载|Chưa tải được bảng cài đặt
未找到导入模块，请刷新后重试|Không tìm thấy chức năng nhập. Hãy tải lại trang rồi thử lại
未在文件中发现有效词汇|Không tìm thấy từ vựng hợp lệ trong tệp
所有词条均已存在，无需更新|Tất cả từ đã có sẵn, không cần cập nhật
词汇数据尚未加载|Chưa tải dữ liệu từ vựng
导出模块未加载|Chưa tải được chức năng xuất
阅读背题入口未就绪，请稍后重试。|Chế độ ôn đề đọc chưa sẵn sàng. Vui lòng thử lại sau.
未能打开词汇视图，请检查页面结构。|Không thể mở trang từ vựng. Hãy kiểm tra cấu trúc trang.
Options|Tuỳ chọn
Actions|Thao tác
Clear answers|Xoá câu trả lời
Note|Ghi chú
Remove|Xoá
Highlight|Tô sáng
Exit|Thoát
Reset|Đặt lại
Submit|Nộp bài
Submit answers|Nộp câu trả lời
Write your note|Nhập ghi chú của bạn
Note body|Nội dung ghi chú
Connected|Đã kết nối
GitHub Repository|Kho mã nguồn GitHub
IELTS Atlas Logo|Biểu trưng IELTS Atlas
`.trim().split('\n').map(line => {
        const separator = line.indexOf('|');
        return [line.slice(0, separator), line.slice(separator + 1)];
    }));

    Object.assign(dictionary, Object.fromEntries(`
系统初始化完成|Đã khởi tạo hệ thống
系统准备就绪|Hệ thống đã sẵn sàng
当前使用自动生成：按练习会话生成 6 位编码。|Đang dùng mã tự động: tạo mã 6 chữ số theo phiên luyện tập.
默认题库|Kho đề mặc định
绑定本地文件夹后，IELTS Atlas 会写入完整的 v2 数据快照。磁盘文件不会因清理浏览器站点数据而删除；后台写入不会主动请求权限。|Sau khi chọn thư mục trên máy, IELTS Atlas sẽ lưu toàn bộ dữ liệu v2. Xoá dữ liệu trang web không xoá tệp trên máy; việc sao lưu nền không tự yêu cầu thêm quyền.
当前状态|Trạng thái hiện tại
未绑定本地备份文件夹。|Chưa chọn thư mục sao lưu trên máy.
支持 Chrome / Edge 的安全上下文；其他环境继续使用手动导出|Hỗ trợ Chrome / Edge trong ngữ cảnh bảo mật; với môi trường khác, hãy xuất dữ liệu thủ công
备份文件包含练习、设置、词汇、题库配置等可迁移数据|Tệp sao lưu gồm bài luyện tập, cài đặt, từ vựng và cấu hình kho đề
磁盘 JSON 为明文文件，请妥善保管|Tệp JSON trên máy không được mã hoá, hãy bảo quản cẩn thận
绑定备份文件夹|Chọn thư mục sao lưu
立即写入备份|Sao lưu ngay
从文件夹恢复|Khôi phục từ thư mục
解除绑定|Bỏ liên kết thư mục
暂无备份记录|Chưa có bản sao lưu
暂无备份记录。|Chưa có bản sao lưu.
备份列表|Danh sách bản sao lưu
创建手动备份后将显示在此列表中。|Bản sao lưu sẽ xuất hiện tại đây sau khi được tạo thủ công.
新词起步|Bắt đầu học từ mới
音标|Phiên âm
看释义|Xem nghĩa
评估你对这个单词的熟悉程度|Đánh giá mức độ quen thuộc của bạn với từ này
简单|Dễ
一般|Vừa
困难|Khó
日|CN
一|T2
二|T3
三|T4
四|T5
五|T6
六|T7
确定要清除所有练习记录吗？此操作不可恢复。|Bạn có chắc muốn xoá toàn bộ lịch sử luyện tập? Không thể hoàn tác thao tác này.
练习记录已清除|Đã xoá lịch sử luyện tập
记录已删除|Đã xoá lượt luyện tập
请选择要删除的记录|Hãy chọn các lượt luyện tập cần xoá
未找到可删除的记录|Không tìm thấy lượt luyện tập để xoá
未找到记录|Không tìm thấy lượt luyện tập
记录ID无效|Mã lượt luyện tập không hợp lệ
批量管理模式已开启，点击记录进行选择|Đã bật chế độ quản lý hàng loạt. Nhấn vào từng lượt luyện tập để chọn
批量删除失败|Không thể xoá các mục đã chọn
未知错误|Lỗi không xác định
已删除|Đã xoá
条记录|lượt luyện tập
当前题库已激活|Kho đề hiện tại đã được kích hoạt
目标题库没有题目，请先加载该题库数据|Kho đề chưa có đề thi. Hãy tải dữ liệu kho đề trước
正在切换题库配置...|Đang chuyển cấu hình kho đề...
题库配置已切换|Đã chuyển cấu hình kho đề
当前正在使用此题库，请先切换到其他配置|Kho đề này đang được sử dụng. Hãy chuyển sang cấu hình khác trước
题库配置已删除，练习记录已保留|Đã xoá cấu hình kho đề và giữ lại lịch sử luyện tập
默认题库不可删除|Không thể xoá kho đề mặc định
未找到这个题库配置|Không tìm thấy cấu hình kho đề này
题库配置删除失败|Không thể xoá cấu hình kho đề
未找到PDF文件|Không tìm thấy tệp PDF
无法打开PDF窗口，请检查弹窗设置|Không thể mở cửa sổ PDF. Hãy kiểm tra quyền cửa sổ bật lên
正在打开PDF...|Đang mở PDF...
打开PDF失败|Không thể mở PDF
无法显示记录详情：组件未加载|Không thể hiển thị chi tiết: thành phần chưa được tải
记录详情模块加载失败|Không thể tải phần chi tiết bài làm
已退出阅读背题模式。|Đã thoát chế độ ôn đề đọc.
请选择一套阅读题进入背题模式。|Hãy chọn một đề đọc để bắt đầu ôn đề.
阅读背题启动失败，请稍后重试。|Không thể mở chế độ ôn đề đọc. Vui lòng thử lại sau.
未找到可用题目|Không tìm thấy đề khả dụng
无法打开题目，请检查题库路径|Không thể mở đề. Hãy kiểm tra đường dẫn kho đề
分类暂无可用题目|Nhóm này chưa có đề khả dụng
随机选择:|Đề được chọn ngẫu nhiên:
Markdown 导出模块未就绪|Chức năng xuất Markdown chưa sẵn sàng
导出失败，请稍后重试|Không thể xuất dữ liệu. Vui lòng thử lại sau
套题模式启动失败，请稍后重试|Không thể mở chế độ luyện bộ đề. Vui lòng thử lại sau
套题模块加载失败，请稍后重试|Không thể tải chế độ luyện bộ đề. Vui lòng thử lại sau
当前没有可继续的套题会话。|Không có bộ đề đang làm để tiếp tục.
套题继续失败，请稍后重试|Không thể tiếp tục bộ đề. Vui lòng thử lại sau
练习已完成，正在更新记录...|Đã hoàn thành bài luyện, đang cập nhật lịch sử...
练习已完成，但记录保存失败，请重试或检查数据。|Đã hoàn thành bài luyện nhưng không thể lưu lịch sử. Hãy thử lại hoặc kiểm tra dữ liệu.
练习已完成，但记录保存失败：缺少题目标识，无法归档本次练习。|Đã hoàn thành bài luyện nhưng thiếu mã đề nên không thể lưu lịch sử.
听力题库尚未加载|Chưa tải kho đề nghe
无尽模式已退出|Đã thoát chế độ luyện liên tục
无尽模式：练习窗口已关闭，正在退出|Cửa sổ luyện tập đã đóng, đang thoát chế độ luyện liên tục
无尽模式：题库为空|Kho đề trống, không thể luyện liên tục
无尽模式：进入下一题|Chế độ luyện liên tục: chuyển sang bài tiếp theo
无尽模式：无法打开下一题|Chế độ luyện liên tục: không thể mở bài tiếp theo
无尽模式进行中，请在练习页点击退出|Đang luyện liên tục. Nhấn Thoát trên trang luyện tập để kết thúc
无尽模式：题库为空，请先加载题库|Kho đề trống. Hãy tải kho đề trước khi luyện liên tục
无尽模式已启动，正在打开|Đã bắt đầu luyện liên tục, đang mở
无尽模式：无法打开练习窗口|Không thể mở cửa sổ luyện liên tục
打开该练习记录回放|Mở lại bài luyện tập này
多套题练习|Luyện nhiều bộ đề
套题|Bộ đề
选择套题流程|Chọn chế độ luyện bộ đề
本次会话将锁定所选流程，答题中不再切换。|Chế độ đã chọn sẽ được giữ nguyên trong suốt bài luyện này.
贴近官方机考|Mô phỏng bài thi trên máy tính
自动跳转|Tự động chuyển sang bài tiếp theo
提交后停留回看|Dừng lại xem đáp án sau khi nộp
抽题范围|Phạm vi chọn đề
高频 + 次高频|Thường gặp + khá thường gặp
全部频率（默认）|Tất cả tần suất (mặc định)
自选套题（P1/P2/P3）|Tự chọn bộ đề (P1/P2/P3)
发现未完成套题|Tìm thấy bộ đề chưa hoàn thành
放弃并新建|Bỏ và tạo mới
继续上次套题|Tiếp tục bộ đề trước
当前篇章|Bài hiện tại
套题自选|Tự chọn bộ đề
题库为空，无法启动自选流程。|Kho đề trống, không thể bắt đầu tự chọn bộ đề.
当前尚未完成三篇自选，请继续选择后再确认。|Bạn chưa chọn đủ ba bài. Hãy chọn tiếp rồi xác nhận.
自选题目无法启动，请重新选择。|Không thể mở các bài đã chọn. Hãy chọn lại.
自选套题|Bộ đề tự chọn
Pending|Đang chờ chọn
仅高频|Chỉ đề thường gặp
全部频率|Tất cả tần suất
驻足模式|Chế độ xem lại từng bài
模拟模式|Chế độ thi thử
经典模式|Chế độ tiêu chuẩn
当前版本暂不支持套题练习自动打开题目。|Phiên bản hiện tại chưa hỗ trợ tự mở bài trong chế độ luyện bộ đề.
题库为空，无法开启套题练习。|Kho đề trống, không thể bắt đầu luyện bộ đề.
套题练习启动失败，请稍后重试。|Không thể bắt đầu luyện bộ đề. Vui lòng thử lại sau.
首篇窗口未能打开，套题恢复快照已保留，可稍后重试。|Không thể mở bài đầu tiên. Tiến độ bộ đề đã được lưu để bạn thử lại sau.
暂时无法读取当前题库，未完成套题仍会保留。|Tạm thời không thể đọc kho đề. Bộ đề chưa hoàn thành vẫn được giữ lại.
未完成套题与当前题库不一致，恢复数据已清除。|Bộ đề chưa hoàn thành không khớp kho đề hiện tại. Dữ liệu khôi phục đã được xoá.
未能打开未完成套题，请检查弹窗权限后再次点击套题模式。|Không thể mở bộ đề đang làm. Hãy kiểm tra quyền cửa sổ bật lên rồi thử lại.
无法继续套题练习，已回退到普通模式。|Không thể tiếp tục bộ đề. Đã chuyển về chế độ luyện thông thường.
未找到可回放记录|Không tìm thấy bài làm có thể xem lại
当前版本不支持记录回放|Phiên bản hiện tại chưa hỗ trợ xem lại bài làm
无法加载完整记录用于回顾|Không thể tải đầy đủ bài làm để xem lại
无法回放该记录|Không thể xem lại bài làm này
`.trim().split('\n').map(line => { const i = line.indexOf('|'); return [line.slice(0, i), line.slice(i + 1)]; })));

    Object.assign(dictionary, Object.fromEntries(`
茶叶简史|Lược sử trà
毛利鱼钩|Lưỡi câu của người Maori
音乐天赋|Năng khiếu âm nhạc
打呵欠|Ngáp
新西兰作家|Nhà văn New Zealand
仿生学|Phỏng sinh học
明星员工|Nhân viên xuất sắc
培养皿|Đĩa Petri
组织设计|Thiết kế tổ chức
西方名人|Người nổi tiếng phương Tây
牛科动物|Động vật họ bò
人文医学|Nhân văn và y học
大学戏剧项目报告|Báo cáo dự án kịch đại học
人机太空探索|Con người và robot khám phá vũ trụ
鲸鱼文化|Văn hoá cá voi
法律的意义|Ý nghĩa của pháp luật
新西兰草药|Thảo dược New Zealand
梦的解析|Giải mã giấc mơ
脑海中的音乐|Âm nhạc trong tâm trí
心灵音乐|Âm nhạc tâm hồn
塑料的发展史|Lịch sử nhựa
工作压力|Áp lực công việc
尼安德特人的生存技艺|Kỹ năng sinh tồn của người Neanderthal
番茄的演化|Sự tiến hoá của cà chua
橡胶|Cao su
节食与长寿|Ăn ít và sống lâu
恐龙脚印|Dấu chân khủng long
风景与印记|Hình ảnh và địa điểm
洞熊的灭绝|Sự tuyệt chủng của gấu hang
投资未来|Đầu tư cho tương lai
玩偶的变迁史|Lịch sử búp bê
电影科学|Khoa học điện ảnh
罗马金字塔|Kim tự tháp La Mã
慢食运动组织|Phong trào ẩm thực chậm
澳洲制糖产业|Ngành đường Australia
塔斯马尼亚古今艺术博物馆|Bảo tàng nghệ thuật cổ và hiện đại Tasmania
洪水防控|Kiểm soát lũ lụt
教学风格研究|Nghiên cứu phong cách giảng dạy
如何获得幸福|Làm thế nào để hạnh phúc
染料的历史|Lịch sử thuốc nhuộm
八小时睡眠|Giấc ngủ tám tiếng
巴塔哥尼亚的人类迁徙|Sự di cư đến Patagonia
社会史|Lịch sử xã hội
从众心理|Tâm lý đám đông
部落睡眠研究|Nghiên cứu giấc ngủ của bộ lạc
悉尼歌剧院|Nhà hát Opera Sydney
伯吉斯页岩|Hóa thạch Burgess Shale
吉他的历史|Lịch sử đàn guitar
交易的本能|Bản năng giao thương
水母·海洋中的优势物种|Sứa – loài chiếm ưu thế ở đại dương
新西兰考试成绩的性别差异|Chênh lệch kết quả thi theo giới tại New Zealand
卡拉尔古城|Thành cổ Caral
橄榄油的历史|Lịch sử dầu ô liu
水下运动|Chuyển động dưới nước
药品包装设计|Thiết kế bao bì dược phẩm
双语学习|Học song ngữ
博物馆爆款现象|Hiện tượng triển lãm bom tấn
昆虫决策|Cách côn trùng ra quyết định
观赛心境|Tâm lý người hâm mộ
脸盲症|Chứng mù khuôn mặt
食虫植物|Thực vật ăn thịt
面部表情|Biểu cảm khuôn mặt
人类食物的历史|Lịch sử thức ăn của con người
新型泥土净水器|Bộ lọc nước bằng đất
无聊建筑|Kiến trúc nhàm chán
地理制图师|Nhà vẽ bản đồ
植物的味道|Hương thơm thực vật
帆船竞速|Đua thuyền buồm
楔形文字|Chữ hình nêm
深海发光生物研究|Sinh vật phát sáng dưới biển sâu
土地盐碱化|Đất nhiễm mặn
城市食物荒漠|Sa mạc thực phẩm đô thị
嗅觉的力量|Sức mạnh của khứu giác
安慰剂效应|Hiệu ứng giả dược
精益生产|Sản xuất tinh gọn
美国手语|Ngôn ngữ ký hiệu Mỹ
猛犸象的灭绝|Sự tuyệt chủng của voi ma mút
品牌忠诚的代价|Cái giá của lòng trung thành thương hiệu
丝绸产业发展|Sự phát triển của ngành tơ lụa
被低估的嗅觉|Khứu giác bị đánh giá thấp
盐的历史|Lịch sử muối
微观科学|Khoa học vi mô
纸笔|Thi trên giấy
寻找灵感|Tìm cảm hứng
公司|Công ty
音乐疗愈|Âm nhạc trị liệu
柏林公园改造|Cải tạo công viên Berlin
闲聊的意义|Ý nghĩa của trò chuyện phiếm
翻译的艺术|Nghệ thuật dịch thuật
古罗马的日常|Đời sống La Mã cổ đại
茶叶的历史|Lịch sử trà
澳洲伪装生物|Sinh vật ngụy trang Australia
美国西部尘埃|Bụi ở miền Tây nước Mỹ
南极考察|Nghiên cứu Nam Cực
玩耍的重要性|Tầm quan trọng của vui chơi
奇异的视觉世界|Thế giới thị giác kỳ lạ
睡眠的目的|Mục đích của giấc ngủ
拯救濒危语言|Bảo tồn ngôn ngữ có nguy cơ biến mất
交通的革命|Cuộc cách mạng giao thông
条形码的历史|Lịch sử mã vạch
镜子研究|Nghiên cứu về gương
土豆的影响|Ảnh hưởng của khoai tây
音乐的力量|Sức mạnh âm nhạc
气候对经济的影响|Ảnh hưởng của khí hậu đến kinh tế
是否应该吃素|Có nên ăn chay
新西兰猫头鹰|Cú New Zealand
名片的重要性|Tầm quan trọng của danh thiếp
彼得兔作家|Tác giả Thỏ Peter
打哈欠的本质|Bản chất của ngáp
造纸术起源|Nguồn gốc nghề làm giấy
珍珠|Ngọc trai
侦探小说的兴衰|Sự thăng trầm của tiểu thuyết trinh thám
新西兰蜥蜴|Tưatara New Zealand
托马斯·杨|Thomas Young
城市的胜利|Thành công của đô thị
广告的吸引力|Sức hút của quảng cáo
露西化石|Hóa thạch Lucy
电磁学之父|Cha đẻ ngành điện từ học
新西兰木材产业|Ngành gỗ New Zealand
奥克兰社区改造|Cải tạo cộng đồng Auckland
蜘蛛丝|Tơ nhện
亲自然设计|Thiết kế gần gũi thiên nhiên
鸟类迁徙|Chim di cư
企业社会责任|Trách nhiệm xã hội của doanh nghiệp
古埃及造船|Đóng thuyền ở Ai Cập cổ đại
沙漠成因|Sự hình thành sa mạc
龙涎香|Long diên hương
多任务处理|Làm nhiều việc cùng lúc
鸟类智慧行为|Hành vi thông minh của chim
回报数据分析|Phân tích lợi nhuận đầu tư
罗马混凝土|Bê tông La Mã
鸟类的定位能力|Khả năng định hướng của chim
街头足球|Bóng đá đường phố
过山车|Tàu lượn siêu tốc
摩天大楼种植|Nông nghiệp trong nhà cao tầng
垃圾处理|Xử lý rác thải
动物适应城市|Động vật thích nghi với đô thị
澳大利亚艺术家|Nghệ sĩ Australia
意大利疟疾防治|Phòng chống sốt rét ở Ý
澳洲野犬|Chó dingo Australia
澳洲野狗|Chó hoang Australia
切叶蚁|Kiến cắt lá
时尚产业|Ngành thời trang
入侵物种的影响|Tác động của loài xâm lấn
捕获小行星|Thu giữ tiểu hành tinh
猴群回归|Sự trở lại của bầy khỉ
袋狼|Hổ Tasmania
莎士比亚|Shakespeare
艺术的意义|Ý nghĩa của nghệ thuật
社会分类|Phân loại xã hội
语言表达研究|Nghiên cứu biểu đạt ngôn ngữ
富兰克林|Franklin
慢的发现|Khám phá sự chậm rãi
进化心理学|Tâm lý học tiến hoá
奥克兰美术馆|Bảo tàng mỹ thuật Auckland
决策之间|Giữa những quyết định
课堂规模|Quy mô lớp học
大象交流|Giao tiếp của voi
鲜花的力量|Sức mạnh của hoa
花之力|Sức mạnh của hoa
博弈论|Lý thuyết trò chơi
格林童话|Truyện cổ Grimm
辣椒的历史|Lịch sử ớt
昆虫机器人|Robot lấy cảm hứng từ côn trùng
让·皮亚杰|Jean Piaget
游乐场设计科学|Khoa học thiết kế khu vui chơi
跨国公司语言策略|Chiến lược ngôn ngữ của công ty đa quốc gia
教他们如何教学|Dạy cách giảng dạy
火星地球化改造|Cải tạo sao Hỏa
流动沙丘|Cồn cát di động
信息时代营销|Tiếp thị thời đại thông tin
无题目|Chưa có câu hỏi
音乐语言|Ngôn ngữ âm nhạc
太平洋航海|Hàng hải Thái Bình Dương
罗马宫殿|Cung điện La Mã
博物馆品牌重塑|Đổi thương hiệu bảo tàng
耳机使用|Sử dụng tai nghe
白蚁丘|Ụ mối
猴子恐惧实验|Thí nghiệm nỗi sợ ở khỉ
欺骗的艺术|Nghệ thuật đánh lừa
学乐器的好处|Lợi ích của học nhạc cụ
火星探索|Khám phá sao Hỏa
氟化水争议|Tranh luận về fluor hoá nước
果实之书|Cuốn sách về trái cây
海洋探测|Thăm dò đại dương
新西兰女作家|Nữ nhà văn New Zealand
巴西皮拉罕部落语言|Ngôn ngữ người Pirahã ở Brazil
山洞|Hang động
群体行为实验|Thí nghiệm hành vi nhóm
睡眠的科学|Khoa học về giấc ngủ
母语教育|Giáo dục tiếng mẹ đẻ
文学奖项的价值|Giá trị giải thưởng văn học
电子游戏的好处|Lợi ích của trò chơi điện tử
伏尼契手稿|Bản thảo Voynich
澳洲飞行牙医|Nha sĩ bay Australia
新西兰头骨|Hộp sọ New Zealand
澳洲蟾蜍|Cóc mía Australia
英国羊毛产业的历史|Lịch sử ngành len Anh
理想居所|Ngôi nhà lý tưởng
湖泊海啸研究|Nghiên cứu sóng thần trong hồ
大脑与多任务处理|Não bộ và khả năng đa nhiệm
孩子的机器人朋友|Bạn robot của trẻ em
决策疲劳|Mệt mỏi khi ra quyết định
卫星农业|Nông nghiệp dùng vệ tinh
失乐症|Chứng mất khả năng cảm thụ âm nhạc
澳洲风景展|Triển lãm phong cảnh Australia
儿童文学|Văn học thiếu nhi
语音的演变|Sự thay đổi ngữ âm
语言的起源|Nguồn gốc ngôn ngữ
巨兽灭绝|Sự tuyệt chủng của động vật khổng lồ
中世纪的游戏|Trò chơi thời Trung cổ
做出来的|Bản biên soạn
鲸鱼油|Dầu cá voi
涂鸦之困|Vấn đề tranh graffiti
艺术与艺术家|Nghệ thuật và nghệ sĩ
野生长颈鹿|Hươu cao cổ hoang dã
铅笔的历史|Lịch sử bút chì
流程图版|Phiên bản lưu đồ
掌声的历史|Lịch sử vỗ tay
失眠的原因|Nguyên nhân mất ngủ
植物交流|Giao tiếp của thực vật
动物联结|Mối liên kết với động vật
黑足鼬|Chồn chân đen
植物的战争|Cuộc chiến của thực vật
兄弟姐妹的影响|Ảnh hưởng của anh chị em
纳米科技|Công nghệ nano
硬币起源|Nguồn gốc tiền xu
天气预报|Dự báo thời tiết
伦敦鞋子的发展史|Lịch sử giày ở London
翼龙飞行|Chuyến bay của thằn lằn bay
育儿分工|Phân chia việc chăm con
生物钟|Đồng hồ sinh học
理解气候变化|Hiểu về biến đổi khí hậu
索科特拉岛|Đảo Socotra
建造城堡|Xây dựng lâu đài
碳足迹|Dấu chân carbon
`.trim().split('\n').map(line => { const i = line.indexOf('|'); return [line.slice(0, i), line.slice(i + 1)]; })));

    Object.assign(dictionary, {
        'Notes': 'Ghi chú', 'No notes yet.': 'Chưa có ghi chú.',
        'New outline': 'Tạo nhóm ghi chú', 'Pause': 'Tạm dừng', 'Resume': 'Tiếp tục',
        'Finish': 'Kết thúc', 'Finish test': 'Kết thúc bài thi',
        'Close options': 'Đóng tuỳ chọn', 'Open options': 'Mở tuỳ chọn',
        'Previous': 'Trước', 'Next': 'Tiếp theo', 'Review': 'Xem lại',
        'Check answers': 'Kiểm tra đáp án', 'Restart': 'Bắt đầu lại',
        '根据释义，拼写出这个单词': 'Dựa vào nghĩa, hãy viết từ này',
        '再试一次，注意拼写细节': 'Thử lại và chú ý cách viết',
        '在此输入拼写': 'Nhập từ tại đây',
        '准备下一条词汇…': 'Đang chuẩn bị từ tiếp theo…',
        '拼写差一点': 'Gần đúng, hãy kiểm tra chính tả',
        '正确是': 'Đáp án đúng là', '暂无释义': 'Chưa có nghĩa của từ'
    });
    Object.assign(dictionary, Object.fromEntries(`
当前使用自定义编码：|Đang dùng mã tuỳ chỉnh:
请输入 6 位数字编码。|Hãy nhập mã gồm 6 chữ số.
已保存自定义编码：|Đã lưu mã tuỳ chỉnh:
已保存：自动生成。|Đã lưu: tạo tự động.
已随机生成并保存：|Đã tạo ngẫu nhiên và lưu:
题库管理模块未就绪|Chức năng quản lý kho đề chưa sẵn sàng
主题切换模块未就绪|Chức năng đổi giao diện chưa sẵn sàng
题库筛选模块未就绪|Bộ lọc kho đề chưa sẵn sàng
练习筛选模块未就绪|Bộ lọc lịch sử luyện tập chưa sẵn sàng
题目模块未就绪|Chức năng đề thi chưa sẵn sàng
PDF 模块未就绪|Chức năng PDF chưa sẵn sàng
批量删除模块未就绪|Chức năng xoá nhiều mục chưa sẵn sàng
练习数据模块未就绪|Dữ liệu luyện tập chưa sẵn sàng
成就模块未就绪|Chức năng thành tích chưa sẵn sàng
小游戏模块未就绪|Trò chơi từ vựng chưa sẵn sàng
三篇阅读一键串联|Luyện liên tiếp ba bài đọc
开启套题模式|Bắt đầu luyện bộ đề
暂无题库数据|Chưa có dữ liệu kho đề
题库加载中...|Đang tải kho đề...
暂无题目|Chưa có đề
删除题库配置|Xoá cấu hình kho đề
套题模式尚未初始化|Chế độ luyện bộ đề chưa được khởi tạo
套题模式尚未初始化，请完成加载后再试。|Chế độ luyện bộ đề chưa sẵn sàng. Hãy chờ tải xong rồi thử lại.
套题练习|Luyện bộ đề
多套题记录保存失败，请稍后重试。|Không thể lưu lịch sử nhiều bộ đề. Vui lòng thử lại sau.
套题结果不完整，请完成缺失篇章后再提交。|Kết quả bộ đề chưa đầy đủ. Hãy hoàn thành các bài còn thiếu rồi nộp.
套题记录保存失败，恢复快照已保留，请稍后重试。|Không thể lưu lịch sử bộ đề. Tiến độ khôi phục đã được giữ lại để bạn thử sau.
套题练习已完成，记录已保存。|Đã hoàn thành bộ đề và lưu lịch sử.
套题练习正在进行中，请先完成当前套题。|Bạn đang làm một bộ đề. Hãy hoàn thành bộ đề hiện tại trước.
未找到可用的套题题目。|Không tìm thấy bài phù hợp cho bộ đề.
首篇窗口未能打开，套题已安全保存；允许弹窗后可继续。|Không thể mở bài đầu tiên. Bộ đề đã được lưu; hãy cho phép cửa sổ bật lên rồi tiếp tục.
本次正确率|Tỷ lệ đúng lần này
VocabStore 未就绪|Kho từ vựng chưa sẵn sàng
高亮生词已在阅读页本地缓存，主词表稍后同步|Từ mới đã được lưu tạm trên trang đọc và sẽ đồng bộ vào danh sách từ sau
浏览类别时出现错误|Có lỗi khi mở nhóm đề
该题目无法使用统一阅读页背题，请选择有 HTML 数据的阅读题。|Không thể ôn đề này trên trang đọc. Hãy chọn bài đọc có dữ liệu HTML.
统一练习入口启动失败：app.openExam 抛出异常，已阻止打开原始题源 HTML。|Không thể mở trang luyện tập do lỗi hệ thống.
统一练习入口未就绪：app.openExam 不可用，已阻止打开原始题源 HTML。|Trang luyện tập chưa sẵn sàng.
清除失败：全量重置服务未就绪|Không thể xoá vì chức năng đặt lại dữ liệu chưa sẵn sàng
增量|Bổ sung
全量|Toàn bộ
最近10次阅读暂无可分类错题|Không có câu đọc sai có thể phân loại trong 10 lượt gần nhất
跳过回放|Bỏ qua phần xem lại
回放需完整题库|Cần đầy đủ kho đề để xem lại
示例记录未能写入|Không thể tạo bài làm mẫu
跳过回顾|Bỏ qua phần xem lại
示例记录已写入练习历史。当前题库中未找到对应题目，详情可打开，完整回放需先加载阅读题库。|Đã thêm bài làm mẫu. Không tìm thấy đề tương ứng trong kho hiện tại; bạn có thể xem chi tiết nhưng cần tải kho đề đọc để xem lại đầy đủ.
可尝试点击回顾触发器。若提示题目不存在，请先在题库浏览中加载阅读题库后再体验完整回放。|Bạn có thể thử mở phần xem lại. Nếu hệ thống báo không tìm thấy đề, hãy tải kho đề đọc trước.
示例记录已保存。加载阅读题库后，可从练习记录详情再次进入回顾模式。|Đã lưu bài làm mẫu. Sau khi tải kho đề đọc, bạn có thể mở lại từ phần chi tiết lịch sử luyện tập.
自设备份|Bản sao lưu cá nhân
学习备份|Bản sao lưu học tập
自设词表|Danh sách từ cá nhân
外部词表|Danh sách từ bên ngoài
暂无学习任务|Chưa có nhiệm vụ học tập
请导入词表或开启新词学习。|Hãy nhập danh sách từ hoặc bắt đầu học từ mới.
下一批|Lượt tiếp theo
今日任务完成|Đã hoàn thành nhiệm vụ hôm nay
恭喜坚持完成所有单词复习！|Bạn đã hoàn thành toàn bộ phần ôn từ hôm nay!
拼写正确|Viết đúng
拼写错误|Viết sai
表现优秀！|Kết quả xuất sắc!
这个单词将在 20-30 个单词后再次出现进行验证。|Từ này sẽ xuất hiện lại sau 20–30 từ để kiểm tra.
继续轮内学习|Tiếp tục học trong lượt này
这个单词将在 3-8 个单词后再次出现。|Từ này sẽ xuất hiện lại sau 3–8 từ.
验证通过！|Đã vượt qua bước kiểm tra!
单词已正式进入复习队列。|Từ đã được đưa vào lịch ôn tập.
验证未通过|Chưa vượt qua bước kiểm tra
需要重新进入轮内学习。|Cần học lại từ này trong lượt hiện tại.
轮内循环调整：|Điều chỉnh trong lượt học:
认识判断：|Mức độ nhận biết:
EF 调整：|Điều chỉnh EF:
新词学习|Học từ mới
复习完成：|Hoàn thành ôn tập:
你的回答：|Câu trả lời của bạn:
词汇表为空|Danh sách từ trống
词汇表加载失败，已使用内置词库|Không thể tải danh sách từ; đã dùng danh sách có sẵn
小游戏容器缺失|Không thể mở trò chơi từ vựng
词库加载中，请稍候...|Đang tải từ vựng, vui lòng chờ...
词汇挑战初始化失败，请稍后重试|Không thể khởi tạo thử thách từ vựng. Vui lòng thử lại sau
请根据中文释义输入英文单词|Hãy nhập từ tiếng Anh dựa theo nghĩa tiếng Việt
继续输入下一题的英文拼写|Tiếp tục viết từ tiếng Anh tiếp theo
恭喜完成词汇火花挑战！|Bạn đã hoàn thành thử thách từ vựng!
再来一局|Chơi lại
请先输入与释义对应的英文单词。|Hãy nhập từ tiếng Anh tương ứng với nghĩa đã cho.
正确，继续下一题！|Chính xác, tiếp tục câu tiếp theo!
正确拼写：|Cách viết đúng:
再试一次，把拼写牢记于心。|Hãy thử lại và ghi nhớ cách viết.
准备好点燃词汇力了吗？|Bạn đã sẵn sàng thử thách vốn từ chưa?
小游戏即将上线，敬请期待|Trò chơi này sắp ra mắt
一丝不苟的|tỉ mỉ, cẩn thận
有韧性的|kiên cường, có khả năng phục hồi
善于表达的|diễn đạt lưu loát
务实的|thực tế
沉浸|đắm mình
综合|tổng hợp
辨别|phân biệt
缓解|làm dịu
连贯的|mạch lạc
仔细审查|xem xét kỹ
强化|củng cố
深思|suy ngẫm
减轻|giảm nhẹ
推动|thúc đẩy
详尽阐述|trình bày chi tiết
达到顶点|đạt đến đỉnh điểm
支撑|hỗ trợ, củng cố
艺术技巧|nghệ thuật, kỹ xảo
警觉的|cảnh giác
多才多艺的|đa năng
当前环境缺少跨标签页安全锁，已停止本地磁盘备份操作|Môi trường hiện tại thiếu cơ chế khoá an toàn giữa các tab; đã dừng sao lưu vào máy
本地备份服务正在重置|Dịch vụ sao lưu đang được đặt lại
当前浏览器不支持绑定本地文件夹（请使用 Chrome/Edge 并通过 http(s) 或 localhost 打开）|Trình duyệt hiện tại không hỗ trợ chọn thư mục. Hãy dùng Chrome hoặc Edge qua HTTP(S) hay localhost.
未选择文件夹|Chưa chọn thư mục
本地备份服务刚刚开始重置，请重新选择文件夹|Dịch vụ sao lưu vừa được đặt lại. Hãy chọn lại thư mục.
未获得文件夹读写权限|Chưa được cấp quyền đọc và ghi thư mục
外部备份未能在清理前完成|Không thể hoàn tất sao lưu ngoài trước khi dọn dữ liệu
当前没有可提交的清理准备状态|Không có trạng thái chuẩn bị dọn dữ liệu để xác nhận
本地备份服务正在准备清理|Dịch vụ sao lưu đang chuẩn bị dọn dữ liệu
外部备份未能在清理前完成写盘|Không thể ghi bản sao lưu ngoài trước khi dọn dữ liệu
清理过程中数据发生变化，请重试以先完成外部备份|Dữ liệu thay đổi trong lúc dọn. Hãy thử lại để hoàn tất sao lưu trước.
请先绑定备份文件夹|Hãy chọn thư mục sao lưu trước
需要允许文件夹访问权限|Cần cấp quyền truy cập thư mục
未找到有效的 v2 本地备份文件|Không tìm thấy tệp sao lưu v2 hợp lệ
将从本地磁盘备份覆盖恢复当前数据。|Dữ liệu hiện tại sẽ được thay thế bằng bản sao lưu trên máy.
格式：|Định dạng:
数据域：|Phạm vi dữ liệu:
将清空：|Sẽ xoá:
练习记录：现有|Lịch sử luyện tập: hiện có
备份缺失且将保留现状：|Không có trong bản sao lưu và sẽ giữ nguyên:
已修复旧格式数据：|Dữ liệu định dạng cũ đã được sửa:
已隔离不安全数据：|Dữ liệu không an toàn đã được cách ly:
警告：|Cảnh báo:
恢复前会创建一个应用内安全快照。是否继续？|Ứng dụng sẽ tạo bản sao an toàn trước khi khôi phục. Bạn có muốn tiếp tục?
当前环境不支持文件夹绑定，请使用「导出到下载」和「导入数据」。|Môi trường hiện tại không hỗ trợ chọn thư mục. Hãy dùng “Tải bản xuất dữ liệu” và “Nhập dữ liệu”.
已绑定：|Đã liên kết:
文件夹|thư mục
检测到已有备份，请先恢复|Đã tìm thấy bản sao lưu; hãy khôi phục trước
需要重新授权|Cần cấp lại quyền
正在写入|Đang ghi dữ liệu
上次写入|Lần ghi gần nhất
尚未写入|Chưa ghi dữ liệu
有未备份的新数据|Có dữ liệu mới chưa sao lưu
最近错误：|Lỗi gần nhất:
状态加载中…|Đang tải trạng thái…
已绑定并检测到现有备份；为防止覆盖，请先从文件夹恢复|Đã liên kết và tìm thấy bản sao lưu. Hãy khôi phục từ thư mục trước để tránh ghi đè.
文件夹已绑定，但首次写入失败|Đã liên kết thư mục nhưng lần ghi đầu tiên thất bại
已绑定并写入：|Đã liên kết và ghi vào:
已取消选择文件夹|Đã huỷ chọn thư mục
绑定失败|Không thể liên kết thư mục
备份内容无变化|Nội dung sao lưu không thay đổi
已写入|Đã ghi
检测到现有备份，请先从文件夹恢复，避免覆盖|Đã tìm thấy bản sao lưu. Hãy khôi phục từ thư mục trước để tránh ghi đè.
写入失败：|Ghi dữ liệu thất bại:
已从本地磁盘备份恢复|Đã khôi phục từ bản sao lưu trên máy
数据已恢复，但备份安全状态保存失败；请保持页面开启并重试恢复|Dữ liệu đã được khôi phục nhưng không thể lưu trạng thái an toàn. Hãy giữ trang mở và thử khôi phục lại.
已取消恢复|Đã huỷ khôi phục
解除绑定后将停止自动写入；磁盘上的 JSON 文件不会删除。确定？|Sau khi bỏ liên kết, ứng dụng sẽ ngừng tự động ghi; tệp JSON trên máy vẫn được giữ. Bạn có chắc không?
已解除本地备份文件夹绑定|Đã bỏ liên kết thư mục sao lưu
解除绑定失败|Không thể bỏ liên kết thư mục
本地备份 · 需授权|Sao lưu trên máy · Cần cấp quyền
本地备份 · 待更新|Sao lưu trên máy · Cần cập nhật
本地备份 · 已就绪|Sao lưu trên máy · Sẵn sàng
`.trim().split('\n').map(line => { const i = line.indexOf('|'); return [line.slice(0, i), line.slice(i + 1)]; })));
    // Match complete Chinese phrases, never replace characters inside unknown prose.
    const phrases = Object.keys(dictionary).filter(key => /[\u3400-\u9fff]/.test(key))
        .sort((a, b) => b.length - a.length);
    const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp('(?<![\\u3400-\\u9fff])(?:' + phrases.map(escapeRegex).join('|') + ')(?![\\u3400-\\u9fff])', 'gu');
    function translate(value) {
        if (typeof value !== 'string') return value;
        const trimmed = value.trim();
        if (Object.prototype.hasOwnProperty.call(dictionary, trimmed)) {
            return value.replace(trimmed, dictionary[trimmed]);
        }
        return value
            .replace(/已尝试\s*(\d+)\s*次，剩余\s*(\d+)\s*次机会/g, 'Đã thử $1 lần, còn $2 lượt')
            .replace(/跳转到题号\s*(\d+)\s*的原文证据/g, 'Xem dẫn chứng trong bài đọc cho câu $1')
            .replace(/^(\s*)(\d+) minutes remaining(\s*)$/, '$1Còn $2 phút$3')
            .replace(/^(\s*)Part (\d+)(\s*)$/, '$1Phần $2$3')
            .replace(/^(\s*)(\d+) of (\d+)(\s*)$/, '$1$2 / $3$4')
            .replace(/(\d{4})年(\d{1,2})月/g, 'Tháng $2/$1')
            .replace(/(\d{1,2})月(\d{1,2})日/g, '$2/$1')
            .replace(/累计完成\s*(\d+)\s*次练习/g, 'Hoàn thành $1 lượt luyện tập')
            .replace(/连续学习\s*(\d+)\s*天/g, 'Học liên tục $1 ngày')
            .replace(/(?:累计)?完成\s*(\d+)\s*篇听力练习/g, 'Hoàn thành $1 bài luyện nghe')
            .replace(/(?:累计)?完成\s*(\d+)\s*篇阅读练习/g, 'Hoàn thành $1 bài luyện đọc')
            .replace(/阅读与听力各完成\s*(\d+)\s*篇/g, 'Hoàn thành $1 bài đọc và $1 bài nghe')
            .replace(/累计学习\s*(\d+)\s*分钟/g, 'Học tổng cộng $1 phút')
            .replace(/(\d+)\s*次练习后平均正确率\s*(\d+)%\+/g, 'Đạt tỷ lệ đúng trung bình từ $2% sau $1 lượt luyện')
            .replace(/累计\s*(\d+)\s*次练习获得满分/g, 'Đạt điểm tuyệt đối $1 lần')
            .replace(/(\d+)\s*次\s*5\s*分钟内完成高分练习/g, 'Đạt điểm cao $1 lần trong vòng 5 phút')
            .replace(/单次练习获得\s*100%\s*正确率/g, 'Đạt tỷ lệ đúng 100% trong một bài luyện')
            .replace(/你有\s*(\d+)\s*个(?:到期复习|待复习)，建议先复习。/g, 'Bạn có $1 từ đến hạn ôn. Nên ôn lại trước.')
            .replace(/当前抽题范围（(.+?)）缺少\s*(P[123])\s*阅读题目，无法开启套题练习。/g, 'Phạm vi hiện tại ($1) không có bài đọc $2 nên không thể bắt đầu bộ đề.')
            .replace(/当前抽题范围（(.+?)）中的\s*(P[123])\s*已全部练习过，已自动放宽为允许重复抽题。/g, 'Bạn đã luyện hết bài $2 trong phạm vi $1; hệ thống đã cho phép chọn lại đề cũ.')
            .replace(/已恢复未完成套题：(.+)/g, 'Đã khôi phục bộ đề chưa hoàn thành: $1')
            .replace(/已完成(.+?)，正在继续：(.+?)。?$/g, 'Đã hoàn thành $1, đang tiếp tục: $2.')
            .replace(/检测到未完成套题：(.+?)。请选择继续或放弃。/g, 'Tìm thấy bộ đề chưa hoàn thành: $1. Hãy chọn tiếp tục hoặc bỏ.')
            .replace(/多套题练习已完成，已保存\s*(\d+)\s*条套题记录。/g, 'Đã hoàn thành và lưu $1 bộ đề.')
            .replace(/(.+?)已启动，正在打开第一篇。/g, 'Đã bắt đầu $1, đang mở bài đầu tiên.')
            .replace(/你有\s*(\d+)\s*个待复习，建议先复习。/g, 'Bạn có $1 từ cần ôn. Nên ôn lại trước.')
            .replace(/第\s*(\d+)\s*\/\s*(\d+)\s*页/g, 'Trang $1 / $2')
            .replace(/本轮共答对\s*(\d+)\s*\/\s*(\d+)\s*题/g, 'Lượt này đúng $1 / $2 câu')
            .replace(/(.+?)，做题\s*(\d+)\s*套/g, '$1, đã làm $2 bộ đề')
            .replace(/(.+?)共做题\s*(\d+)\s*套，活跃\s*(\d+)\s*天/g, '$1: đã làm $2 bộ đề trong $3 ngày')
            .replace(/最近(\d+)次阅读共\s*(\d+)\s*道错题/g, '$2 câu sai trong $1 bài đọc gần nhất')
            .replace(/本次正确率\s*(.+)/g, 'Tỷ lệ đúng lần này: $1')
            .replace(/已加入阅读高亮生词：(.+)/g, 'Đã thêm từ được tô sáng vào danh sách: $1')
            .replace(/✓\s*完成选择\s*\((\d+)\)/g, '✓ Hoàn tất chọn ($1)')
            .replace(/确定要删除选中的\s*(\d+)\s*条记录吗？此操作不可恢复。/g, 'Bạn có chắc muốn xoá $1 lượt đã chọn? Không thể hoàn tác.')
            .replace(/将删除配置“(.+?)”及其题库路径映射。练习记录不会被删除。/g, 'Cấu hình “$1” và đường dẫn kho đề sẽ bị xoá. Lịch sử luyện tập vẫn được giữ lại.')
            .replace(/(.+?)导入完成，已同步\s*(\d+)\s*条词汇/g, 'Đã nhập $1 và đồng bộ $2 từ')
            .replace(/(.+?)导入完成：新增\s*(\d+)\s*条，更新\s*(\d+)\s*条/g, 'Đã nhập $1: thêm $2 từ, cập nhật $3 từ')
            .replace(/练习数据层暂不可用（(.+?)）。您可跳过回顾演示，继续了解其他功能。/g, 'Dữ liệu luyện tập tạm thời chưa sẵn sàng ($1). Bạn có thể bỏ qua phần xem lại để tiếp tục hướng dẫn.')
            .replace(pattern, match => dictionary[match]);
    }

    const excluded = 'script,style,code,pre,textarea,[contenteditable]:not([contenteditable="false"]),[translate="no"],#left,#question-groups,#results td:nth-child(2),#results td:nth-child(3),.reading-passage,.passage-content,.reading-note-quote,.reading-note-outline-title,[data-note-open],.vocab-card__word,.vocab-card__meaning,.vocab-list-table td:nth-child(1),.vocab-list-table td:nth-child(2),.vocab-side-panel__example,[data-field="meaning"],[data-field="example"],[data-field="note"]';
    const attributes = ['title', 'aria-label', 'placeholder', 'alt', 'data-tooltip'];
    function localize(root) {
        if (!root) return;
        if (root.nodeType === 3) {
            if (!root.parentElement || root.parentElement.closest(excluded)) return;
            const translated = translate(root.nodeValue);
            if (translated !== root.nodeValue) root.nodeValue = translated;
            return;
        }
        if (root.nodeType !== 1 && root.nodeType !== 9) return;
        if (root.nodeType === 1) {
            if (root.parentElement?.closest(excluded)) return;
            // Placeholders are UI even when the input's content must remain untouched.
            for (const name of attributes) {
                if (root.hasAttribute(name)) {
                    const value = root.getAttribute(name);
                    const translated = translate(value);
                    if (translated !== value) root.setAttribute(name, translated);
                }
            }
            if (root.matches(excluded)) return;
        }
        for (const child of root.childNodes) localize(child);
    }
    global.IELTSVietnamese = { translate, localize, dictionary };
    if (!global.document) return;
    global.document.documentElement.lang = 'vi';
    for (const name of ['alert', 'confirm', 'prompt']) {
        if (typeof global[name] !== 'function') continue;
        const original = global[name].bind(global);
        global[name] = (message, ...args) => original(translate(message), ...args);
    }
    localize(global.document.documentElement);
    // Translate only changed subtrees. No polling, HTML replacement or data mutation.
    const observer = new MutationObserver(records => {
        const roots = new Set();
        for (const record of records) {
            if (record.type === 'childList') record.addedNodes.forEach(node => roots.add(node));
            else roots.add(record.target);
        }
        for (const root of roots) {
            if (root.isConnected) localize(root);
        }
    });
    observer.observe(global.document.documentElement, {
        subtree: true, childList: true, characterData: true,
        attributes: true, attributeFilter: attributes
    });
})(typeof window !== 'undefined' ? window : globalThis);
