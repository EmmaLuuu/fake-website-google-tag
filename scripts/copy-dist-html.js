import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 複製 dist/index.html 到根目錄的 index.html（用於 GitHub Pages）
const distHtmlPath = path.join(__dirname, '../dist/index.html');
const rootHtmlPath = path.join(__dirname, '../index.html');

if (fs.existsSync(distHtmlPath)) {
  fs.copyFileSync(distHtmlPath, rootHtmlPath);
  console.log('✓ 已複製 dist/index.html 到根目錄');
} else {
  console.error('錯誤：找不到 dist/index.html');
  process.exit(1);
}

