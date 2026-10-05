# SWAPDROBE

Nền tảng đổi đồ giữa sinh viên. Slogan: **"Cũ người, mới ta."**

Dự án gồm giao diện tĩnh (`frontend`) và API Node.js/Express (`backend`).

## Cấu trúc thư mục

```
swapdrobe/
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   ├── js/app.js
│   └── images/            # 0.jpg ... 15.jpg
├── backend/
│   ├── server.js          # Express API
│   └── data/items.json    # dữ liệu mẫu 16 món đồ
├── netlify/functions/
│   └── api.js             # bọc Express thành Netlify Function
├── package.json
├── netlify.toml
├── .env.example
├── .gitignore
└── README.md
```

## Chạy trên máy

Yêu cầu: Node.js 18 trở lên.

```bash
npm install
npm run dev        # hoặc: npm start
```

Mở http://localhost:3000. Express phục vụ cả giao diện và API.

## API

| Method | Đường dẫn | Mô tả |
|--------|-----------|-------|
| GET | `/api/health` | Kiểm tra server |
| GET | `/api/items` | Danh sách món đồ. Lọc: `?category=Sách vở&q=quạt` |
| GET | `/api/items/:id` | Chi tiết một món đồ |
| GET | `/api/offers` | Danh sách offer đã gửi |
| POST | `/api/offers` | Gửi offer: `{ "targetItemId": 3, "offeredItemIds": [5], "message": "..." }` |

Offer đang lưu trong bộ nhớ nên sẽ mất khi server khởi động lại. Muốn lưu thật cần thêm database.

## Deploy lên Netlify

1. Đẩy project lên GitHub, vào Netlify chọn **Add new site → Import from Git**.
2. Netlify đọc `netlify.toml`: publish thư mục `frontend`, chạy API bằng function trong `netlify/functions`.
3. Sau khi deploy, kiểm tra `https://<tên-site>.netlify.app/api/health`.

Lưu ý: Netlify không chạy server Express liên tục. File `netlify/functions/api.js` bọc Express thành serverless function, nên dữ liệu lưu trong bộ nhớ không được giữ giữa các lần gọi.

## Nhóm thực hiện

Nhóm 8, môn TINH314, Đại học Ngoại thương.
