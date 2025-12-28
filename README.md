# 購物網站

一個簡單而現代的購物網站，使用 React 和 Vite 構建。

## 功能特色

- 🛍️ **商品列表** - 瀏覽所有可用商品
- 📦 **商品詳情** - 查看商品詳細資訊
- 🛒 **購物車** - 添加、移除和調整商品數量
- 💳 **訂單摘要** - 查看購物車總計
- 📱 **響應式設計** - 適配各種設備尺寸

## 技術棧

- React 18
- React Router DOM
- Vite
- CSS3

## 安裝與運行

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

開發伺服器將在 `http://localhost:5173` 啟動

### 3. 建置生產版本

```bash
npm run build
```

### 4. 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
├── src/
│   ├── components/          # React 組件
│   │   ├── ProductList.jsx  # 商品列表
│   │   ├── ProductCard.jsx  # 商品卡片
│   │   ├── ProductDetail.jsx # 商品詳情
│   │   └── ShoppingCart.jsx # 購物車
│   ├── data/
│   │   └── products.js      # 商品數據
│   ├── App.jsx              # 主應用程式
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局樣式
├── index.html
├── package.json
└── vite.config.js
```

## 使用說明

1. **瀏覽商品** - 在首頁查看所有可用商品
2. **查看詳情** - 點擊商品卡片查看詳細資訊
3. **加入購物車** - 在商品列表或詳情頁面點擊「加入購物車」
4. **管理購物車** - 在購物車頁面調整數量或移除商品
5. **查看總計** - 購物車頁面顯示訂單摘要

## 自訂商品

編輯 `src/data/products.js` 文件來添加或修改商品：

```javascript
{
  id: 1,
  name: '商品名稱',
  description: '商品描述',
  price: 價格,
  image: '圖片 URL'
}
```

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

MIT License

