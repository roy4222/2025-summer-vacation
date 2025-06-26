# Chakra UI v3 + Next.js 專案

這是一個使用 **Chakra UI v3** 和 **Next.js 15** 建立的現代化 React 應用程式，展示了豐富的 UI 組件和最佳實踐。

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 建構專案
```bash
npm run build
```

### 啟動生產伺服器
```bash
npm start
```

## 📦 Chakra UI v3 配置步驟

> **重要提醒**: 根據 [Chakra UI 官方文檔](https://chakra-ui.com/docs/get-started/frameworks/next-app)，以下是正確的配置流程。

### 步驟 1: 安裝依賴項
```bash
# 核心依賴項
npm install @chakra-ui/react @emotion/react
```

### 步驟 2: 添加 Chakra UI 代碼片段
```bash
npx @chakra-ui/cli snippet add
```
這會安裝預製的組件片段到 `components/ui/` 目錄，包含：
- `provider.tsx` - 主要 Provider 組件
- `color-mode.tsx` - 色彩模式切換組件
- `toaster.tsx` - 通知組件
- `tooltip.tsx` - 提示框組件

### 步驟 3: 更新 TypeScript 配置
修改 `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext", 
    "moduleResolution": "Bundler",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 步驟 4: 設置 Provider
在 `app/layout.tsx` 中配置 Chakra UI Provider:
```tsx
import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

**重要**: `suppressHydrationWarning` 屬性是必需的，用於防止 `next-themes` 庫的警告。

### 步驟 5: 優化 Bundle 配置
在 `next.config.ts` 中添加:
```typescript
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};
```

這有助於解決類似以下的警告：
```
[webpack.cache.PackFileCacheStrategy] Serializing big strings (xxxkiB)
```

### 步驟 6: 修復 Hydration 錯誤
如果看到類似以下的錯誤：
```
Hydration failed because the initial server rendered HTML did not match the client
```

移除 `--turbo` 標誌以避免 hydration 錯誤:
```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

> **注意**: 根據 [Next.js 團隊的說明](https://github.com/chakra-ui/chakra-ui/discussions/6908)，這是 Emotion CSS 在 `--turbo` 模式下的已知問題。

## 🎨 特色功能

### ✨ 色彩模式切換
- 支援亮色/暗色模式自動切換
- 使用 Chakra UI 內建的 `next-themes` 整合
- 色彩模式按鈕組件：`<ColorModeButton />`
- 透過 snippet 自動生成的 Provider 包含完整的主題管理

### 🎯 語義化色彩系統
使用 Chakra UI v3 的語義化色彩：
```tsx
// 前景色
<Text color="fg">主要文字</Text>
<Text color="fg.muted">次要文字</Text>

// 背景色
<Box bg="bg.canvas">畫布背景</Box>
<Box bg="bg.surface">表面背景</Box>
<Box bg="bg.subtle">微妙背景</Box>

// 邊框色
<Box borderColor="border.subtle">微妙邊框</Box>
```

### 📱 響應式設計
所有組件都支援響應式斷點：
```tsx
<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
  {/* 內容 */}
</SimpleGrid>

<Button size={{ base: 'sm', md: 'md' }}>
  響應式按鈕
</Button>
```

## 🧩 組件展示

此專案展示了以下 Chakra UI 組件：

### 基礎組件
- ✅ **Button** - 實心、輪廓、幽靈三種樣式
- ✅ **Badge** - 多種顏色的徽章標籤
- ✅ **Heading** - 層次化標題
- ✅ **Text** - 文字組件
- ✅ **Box** - 基礎容器
- ✅ **Stack** - 垂直/水平堆疊
- ✅ **Flex** - 靈活布局
- ✅ **SimpleGrid** - 簡單網格

### 表單組件
- ✅ **Input** - 輸入框
- ✅ **Checkbox** - 核取方塊 (使用 `.Root`, `.Control`, `.Label` 語法)
- ✅ **Switch** - 開關切換 (使用 `.Root`, `.Control`, `.Thumb` 語法)

### 反饋組件
- ✅ **Alert** - 警告提示 (使用 `.Root`, `.Indicator`, `.Title` 語法)
- ✅ **Progress** - 進度條 (使用 `.Root`, `.Track`, `.Range` 語法)
- ✅ **Spinner** - 載入指示器

### 導航組件
- ✅ **Container** - 內容容器
- ✅ **Icon** - 圖標組件 (搭配 `react-icons/lu`)

## 🔧 Chakra UI v3 重要變更

### 組件命名空間
Chakra UI v3 使用命名空間語法：
```tsx
// v2 語法
<Checkbox>選項</Checkbox>

// v3 語法
<Checkbox.Root>
  <Checkbox.Control>
    <Checkbox.Indicator />
  </Checkbox.Control>
  <Checkbox.Label>選項</Checkbox.Label>
</Checkbox.Root>
```

### 色彩調色板
`colorScheme` 改為 `colorPalette`：
```tsx
// v2
<Button colorScheme="blue">按鈕</Button>

// v3
<Button colorPalette="blue">按鈕</Button>
```

### 移除的功能
- ❌ `useColorModeValue` → 使用語義化色彩 token (`fg`, `bg.surface`) 自動切換
- ❌ `@chakra-ui/icons` → 使用 `react-icons` 或 `lucide-react`
- ❌ 外部 `framer-motion` → 內建動畫系統

## 📁 專案結構

```
ui/
├── app/
│   ├── components/
│   │   └── NavigationButtons.tsx    # 導航按鈕組件
│   ├── test-chakra/
│   │   └── page.tsx                 # Chakra UI 測試頁面
│   ├── layout.tsx                   # 根布局 (含 Provider)
│   └── page.tsx                     # 主頁 (Chakra UI 展示)
├── components/
│   └── ui/                          # Chakra UI 片段 (透過 CLI 生成)
│       ├── provider.tsx             # 主要 Provider (含 ChakraProvider + ThemeProvider)
│       ├── color-mode.tsx           # 色彩模式組件
│       ├── toaster.tsx              # 通知組件
│       └── tooltip.tsx              # 提示框組件
├── public/                          # 靜態資源
├── next.config.ts                   # Next.js 配置
├── tsconfig.json                    # TypeScript 配置
└── package.json                     # 專案依賴
```

## 🎯 頁面介紹

### 主頁 (`/`)
展示 Chakra UI 的完整功能：
- 🎨 漸層英雄區域
- ⚡ 特色功能介紹
- 🧩 組件展示區域
- 📊 統計數據
- 🌙 色彩模式切換

### 測試頁面 (`/test-chakra`)
簡單的組件測試頁面，用於驗證配置。

## 🛠️ 開發說明

### 避免 Hydration 錯誤
- 使用語義化色彩 (`fg`, `bg.surface`) 而非動態色彩
- 添加 `suppressHydrationWarning` 到 `<html>` 標籤 (必需，用於 next-themes)
- 移除 `--turbo` 標誌 (已知的 Emotion CSS 相容性問題)

### 使用 Next.js Link
```tsx
// 正確的 v3 語法
<Button asChild>
  <NextLink href="/about">關於我們</NextLink>
</Button>
```

### 圖標使用
```tsx
import { LuCode, LuPalette } from 'react-icons/lu';

<Icon><LuCode /></Icon>
```

## 📚 參考資源

- [Chakra UI v3 官方文檔](https://chakra-ui.com/docs/get-started/frameworks/next-app)
- [Chakra UI v3 Next.js 整合指南](https://chakra-ui.com/docs/get-started/frameworks/next-app)
- [GitHub 討論：使用 Next.js 13](https://github.com/chakra-ui/chakra-ui/discussions/6908)
- [Next.js 文檔](https://nextjs.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🐛 常見問題

### Q: 為什麼組件無法正常顯示？
A: 確保使用正確的 v3 命名空間語法，如 `<Alert.Root>` 而非 `<Alert>`。

### Q: 色彩模式切換不起作用？
A: 檢查是否正確配置了 `Provider` 和 `ColorModeButton`。

### Q: Hydration 錯誤如何解決？
A: 使用語義化色彩而非條件色彩，添加 `suppressHydrationWarning`，並移除 `--turbo` 標誌。

### Q: 為什麼需要移除 --turbo 標誌？
A: 根據官方說明，這是 Emotion CSS 在 Next.js turbo 模式下的已知相容性問題。

## 📝 授權

此專案僅作為學習和展示用途。

---

**使用 ❤️ 和 Chakra UI v3 製作**
