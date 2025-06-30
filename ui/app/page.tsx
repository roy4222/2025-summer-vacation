"use client";

import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ComponentsSection from "./components/ComponentsSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

/**
 * 現代化 Chakra UI 展示首頁
 *
 * 組件化結構：
 * - Navigation: 響應式導航欄
 * - HeroSection: 主視覺區域
 * - FeaturesSection: 功能特色展示
 * - ComponentsSection: 組件生態展示
 * - StatsSection: 統計數據
 * - Footer: 頁腳區域
 *
 * 設計原則：
 * - 單一職責：每個組件負責單一功能
 * - 可重用性：組件設計具有高度可重用性
 * - 可配置性：通過 props 實現靈活配置
 * - 響應式：適應不同螢幕尺寸
 * - 無障礙：遵循 ARIA 標準
 *
 * @returns {JSX.Element} 組件化的首頁
 */
export default function Home() {
  console.log("渲染組件化 Chakra UI 展示首頁");

  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* 頂部導航欄 */}
      <Navigation
        brandName="Chakra UI"
        navLinks={[
          { href: "#home", label: "首頁" },
          { href: "#features", label: "功能" },
          { href: "#components", label: "組件" },
          { href: "#about", label: "關於" },
          { href: "#contact", label: "聯絡" },
        ]}
      />

      {/* 主視覺區域 */}
      <HeroSection
        title="用 Chakra UI 建構"
        highlightText="美麗的應用程式"
        description="簡單、模組化且可存取的組件庫，讓您快速建構 React 應用程式。支援深淺模式、完全可定制，並遵循 WAI-ARIA 無障礙標準。"
        badgeText="🎨 現代化 React UI 組件庫"
        primaryButtonText="開始使用"
        secondaryButtonText="查看 GitHub"
      />

      {/* 功能特色區域 */}
      <FeaturesSection
        sectionTitle="Chakra UI？"
        mainCardTitle="簡單、模組化且"
        mainCardHighlight="完全可存取"
        mainCardDescription="Chakra UI 提供一套精心設計的 React 組件，讓開發者能夠快速建構美觀、響應式且無障礙的使用者介面。每個組件都遵循設計系統原則。"
      />

      {/* 組件展示區域 */}
      <ComponentsSection
        sectionTitle="強大的組件生態"
        sectionDescription="50+ 個精心設計的組件，涵蓋所有常見使用場景，讓您能夠快速建構專業級應用程式"
      />

      {/* 統計數據區域 */}
      <StatsSection
        stats={[
          { value: "50+", label: "組件數量", color: "blue.500" },
          { value: "100K+", label: "每週下載", color: "green.500" },
          { value: "30K+", label: "GitHub Stars", color: "purple.500" },
          { value: "5K+", label: "開發者", color: "orange.500" },
        ]}
      />

      {/* 頁腳區域 */}
      <Footer
        brandName="Chakra UI"
        brandDescription="簡單、模組化且可存取的 React 組件庫，讓建構美麗的應用程式變得輕鬆。"
        contactEmail="hello@chakra-ui.com"
        copyrightText="© 2024 Chakra UI 展示. 使用 ❤️ 和 Chakra UI 製作"
      />
    </Box>
  );
}
