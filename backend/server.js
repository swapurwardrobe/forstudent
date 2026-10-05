// SWAPDROBE - Express API cơ bản
// Chạy local:  npm run dev   (http://localhost:3000)
const path = require('path');
const express = require('express');
const cors = require('cors');
const items = require('./data/items.json');

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

// Kiểm tra server còn sống
router.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'SWAPDROBE', time: new Date().toISOString() });
});

// Danh sách món đồ. Lọc: /api/items?category=Sách vở&q=quạt
router.get('/items', (req, res) => {
  const { category, q } = req.query;
  let result = items;
  if (category) result = result.filter((i) => i.category === category);
  if (q) {
    const key = String(q).toLowerCase();
    result = result.filter((i) => (i.name + ' ' + i.location).toLowerCase().includes(key));
  }
  res.json({ count: result.length, items: result });
});

// Chi tiết một món đồ
router.get('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Không tìm thấy món đồ' });
  res.json(item);
});

// Offer lưu tạm trong bộ nhớ (mất khi server khởi động lại).
// Khi cần lưu thật, thay bằng database (Supabase, MongoDB...).
const offers = [];

router.get('/offers', (req, res) => res.json({ count: offers.length, offers }));

router.post('/offers', (req, res) => {
  const { targetItemId, offeredItemIds, message } = req.body || {};
  const target = items.find((i) => i.id === Number(targetItemId));
  if (!target) return res.status(400).json({ error: 'targetItemId không hợp lệ' });
  if (!Array.isArray(offeredItemIds) || offeredItemIds.length === 0) {
    return res.status(400).json({ error: 'Cần chọn ít nhất một món để đổi' });
  }
  const offer = {
    id: offers.length + 1,
    targetItemId: target.id,
    offeredItemIds,
    message: String(message || '').slice(0, 300),
    status: 'sent', // sent -> seen -> accepted -> meetup -> completed
    createdAt: new Date().toISOString(),
  };
  offers.push(offer);
  res.status(201).json(offer);
});

// API chạy ở /api (local) và /.netlify/functions/api (khi deploy Netlify)
app.use('/api', router);
app.use('/.netlify/functions/api', router);

// Chạy local: Express phục vụ luôn thư mục frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Chỉ mở cổng khi chạy trực tiếp (Netlify sẽ import app, không gọi listen)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`SWAPDROBE chạy tại http://localhost:${PORT}`));
}

module.exports = app;
