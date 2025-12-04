---
title: "Đừng đợi sự cố mới quan tâm đến logging"
excerpt: "Một góc nhìn thực tế về logging: Vì sao bạn cần tối ưu log trước khi sự cố xảy ra – và cách bắt đầu đúng ngay từ hôm nay."
coverImage: "/assets/blog/dont-wait-for-an-incident-to-care-about-logging/cover.jpeg"
date: "2024-06-10T05:35:07.322Z"
author:
  name: Karify98
  picture: "/images/profile.jpg"
ogImage:
  url: "assets/blog/dont-wait-for-an-incident-to-care-about-logging/cover.jpeg"
hashtags:
  - logging
  - devops
  - basics
  - observability
  - bestpractices
---

Logging thường bị xem nhẹ cho đến khi một sự cố nghiêm trọng xảy ra. Khi hệ thống gặp lỗi, việc thiếu log chi tiết và có cấu trúc có thể khiến quá trình điều tra trở nên khó khăn và tốn thời gian. Bài viết này giúp bạn hiểu vì sao cần đầu tư vào logging ngay từ đầu và cách cải thiện hệ thống log một cách thực tế.

## Tất cả đều ổn cho đến khi có sự cố

Hệ thống chạy mượt, dashboard xanh, không cảnh báo. Nhưng khi lỗi xuất hiện, bạn mở log và phát hiện: thông tin thiếu, format lộn xộn, không thể truy vết. Đây là kết quả của việc “log cho có” — và hệ quả thường rất đắt.

## Log là gì và vì sao quan trọng?

### Log là gì

Log là các ghi chép phản ánh trạng thái và hoạt động của hệ thống: hành động người dùng, request/response, lỗi, tiến trình nền, sự kiện bảo mật, và các thay đổi quan trọng trong ứng dụng. Đây là “dữ liệu quan sát” cốt lõi để hiểu hệ thống đang làm gì và đã làm gì.

### Tại sao log quan trọng?

1.	**Chuẩn đoán và xử lý sự cố nhanh** <br/>
Khi xảy ra lỗi, log là nguồn dữ liệu duy nhất cho phép trả lời một cách có hệ thống: What happened? Why? When? Where? How?
2.	**Giảm thời gian downtime** <br/>
Log đầy đủ và có cấu trúc giúp team xác định root cause nhanh hơn, rút ngắn thời gian khắc phục và hạn chế tác động tới người dùng.
3.	**Theo dõi hành vi người dùng và hoạt động hệ thống**
Log cung cấp dữ liệu để phát hiện bất thường, phân tích xu hướng sử dụng, đánh giá hiệu năng và cải thiện trải nghiệm.
4.	**Phục vụ audit & compliance** <br/>
Log tạo dấu vết minh bạch về hành động và sự kiện, hỗ trợ truy xuất và đáp ứng yêu cầu tuân thủ trong các quy trình bảo mật.
5.	**Nâng cao năng lực quan sát (Observability)** <br/>
Log là một trong ba trụ cột của observability. Log tốt giúp phân tích chính xác, xây dựng dashboard, alert hiệu quả và tăng khả năng xác định nguyên nhân gốc.
6.	**Giảm rủi ro vận hành trong hệ thống phức tạp** <br/>
Với kiến trúc phân tán, event-driven, microservices hoặc serverless, log trở thành công cụ duy nhất giúp hiểu luồng xử lý, dữ liệu và tương tác giữa các thành phần.

Log chính là cách hệ thống giao tiếp với người vận hành.

## Dấu hiệu của một hệ thống logging kém

Dấu hiệu của hệ thống logging kém bao gồm:

- Log nhiều nhưng vô nghĩa: ghi tràn lan nhưng không hỗ trợ phân tích sự cố.
- Khó tìm log quan trọng: thiếu tổ chức, không có chiến lược lọc, truy vấn hoặc phân tách theo mức độ.
- Format không thống nhất: mỗi module/log writer ghi theo một kiểu, gây khó khăn khi phân tích.
- Thiếu context thiết yếu: không có user ID, request ID, session ID, trace ID hoặc thông tin môi trường, khiến log không thể nối kết được với luồng xử lý thật.
- Rò rỉ dữ liệu nhạy cảm: ghi trực tiếp password, token, thẻ tín dụng hoặc nội dung payload quan trọng.
- Không có hệ thống tập trung: log rải rác ở nhiều nơi, không có dashboard, không có khả năng search, filter, alert hoặc correlation.

## Nguyên tắc logging hiệu quả

### 1. Ghi đúng – đủ – có chủ đích
- Không log tràn lan; chỉ log các sự kiện quan trọng cho vận hành, debugging và audit.
- Tập trung vào: business event, error, external call, state transition.
- Tránh log lặp lại hoặc log noise gây khó phân tích.

### 2. Sử dụng đúng log level
Mỗi log level phục vụ một mục đích rõ ràng:
- **debug**: thông tin chi tiết phục vụ debugging, không bật ở production.
- **info**: trạng thái hệ thống, lifecycle event, business event.
- **warn**: hành vi bất thường nhưng chưa gây lỗi.
- **error**: lỗi cần xử lý hoặc gây ảnh hưởng tới flow.

> Sai level = nhiễu dữ liệu + khó phân tích + alert sai lệch.

### 3. Structured Logging (ưu tiên JSON)
- Ghi log theo cấu trúc (JSON) để dễ search, filter, index.
- Phù hợp với các hệ thống phân tán (Lambda, k8s, microservices).
- Tối ưu khi sử dụng CloudWatch Logs Insights, ElasticSearch, Athena.

### 4. Bổ sung context quan trọng
Mỗi log nên đi kèm thông tin giúp truy vết:
- `request_id` / `trace_id`
- `user_id` (nếu có)
- `service` / `module`
- `action` / `operation`
- input quan trọng (đã được mask nếu nhạy cảm)
- trạng thái xử lý + thời gian thực thi

> Không có context = log vô dụng khi phân tích root cause.

### 5. Thống nhất chuẩn logging trên toàn hệ thống
- Cùng format, naming convention, structure.
- Cùng log level guideline.
- Cùng cách truyền context xuyên suốt (như trace_id).
- Hạn chế mỗi service tự log theo một kiểu khác nhau.

### 6. Sử dụng thư viện logging chuyên nghiệp
Tránh tự viết logger theo kiểu `console.log`. Hãy dùng các thư viện có hiệu năng cao, hỗ trợ structured logging và log level chuẩn:

- **Node.js**
  - **Winston** – linh hoạt, plugin nhiều, phù hợp ứng dụng enterprise.
  - **Pino** – hiệu năng rất cao, output JSON chuẩn, nhẹ, phù hợp microservices.
  - **Bunyan** – structured logging lâu đời, JSON-first.

- **Golang**
  - **Zerolog** – cực nhanh, zero-allocation, JSON-first, tiêu chuẩn cho high-performance services.
  - **Zap** (Uber) – structured logging hiệu năng cao.

> Best practice: chọn một thư viện duy nhất cho toàn hệ thống để thống nhất format. Những gì mình nghĩ tới thì họ đã làm lâu rôi, chỉ cần tìm hiểu và áp dụng đúng cách.

### 7. Mask dữ liệu nhạy cảm
- Không ghi password, token, key, credit card, PII thô.
- Mask hoặc hash dữ liệu trước khi log.
- Thiết lập class “sensitive fields” để auto-filter.

### 8. Log rotation & retention
- Thiết lập cơ chế rotation để tránh đầy storage.
- Retention hợp lý để phục vụ audit nhưng không gây tốn chi phí.
- Retention khác nhau cho: debug log, app log, security log.

### 9. Tích hợp hệ thống log tập trung
- CloudWatch, ELK stack, Datadog, Loki, Splunk,...
- Hỗ trợ query, alert, dashboard, correlation giữa service.
- Tránh tình trạng log nằm rải rác không thể phân tích.
## Công cụ và chiến lược nên áp dụng

### 1. Centralized Logging
- Thu thập log từ tất cả service về một nơi để dễ tìm kiếm và phân tích.  
- Lưu trữ dài hạn bằng S3/Glacier và đặt **retention** phù hợp theo từng loại log (application, audit, security).  
- Thiết lập **rotation** để giới hạn kích thước log và tối ưu chi phí.  

> Ví dụ thực tế: Ứng dụng ghi log JSON → CloudWatch → Export sang S3 theo ngày →  có thể sử dụng Athena truy vấn khi cần.

### 2. Chọn công cụ phù hợp theo nhu cầu
- Không phải hệ thống nào cũng cần ELK; chi phí và độ phức tạp cao.  
- Nếu sử dụng AWS, CloudWatch Logs + Logs Insights là lựa chọn đủ mạnh cho đa số trường hợp.  
- Trường hợp cần phân tích truy vấn lớn, join nhiều trường: Athena đọc log trên S3 là giải pháp tối ưu chi phí, tùy nghiệp vụ.

## Kết luận

Logging không chỉ là tiện ích bổ sung; nó là nền tảng của vận hành hiện đại.  
Khả năng phân tích sự cố, giám sát hệ thống hay tối ưu hiệu năng đều phụ thuộc vào chất lượng log.  
Hệ thống có log nghèo nàn sẽ dẫn đến phân tích sai lệch và phản ứng chậm. Ngược lại, log đầy đủ và có cấu trúc mở ra khả năng quan sát chính xác và xử lý sự cố chủ động.

Đây là thời điểm phù hợp để rà soát lại cách hệ thống của bạn đang ghi log: mức độ đầy đủ, tính nhất quán, khả năng tìm kiếm và mức độ hữu ích khi xảy ra sự cố.  
Một hệ thống log được thiết kế đúng sẽ giúp đội ngũ vận hành kiểm soát tốt hơn và giảm đáng kể rủi ro trong dài hạn.

