'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';

// 產品類型定義
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// 產品項目元件的 Props 類型
interface ProductItemProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

// 模擬產品資料
const allProducts: Product[] = [
  { id: 1, name: '高階機械鍵盤', price: 4500, category: '電腦周邊' },
  { id: 2, name: '人體工學滑鼠', price: 2200, category: '電腦周邊' },
  { id: 3, name: '4K 27吋螢幕', price: 12000, category: '顯示器' },
  { id: 4, name: '降噪藍牙耳機', price: 7800, category: '音響設備' },
  { id: 5, name: '網路攝影機', price: 1800, category: '電腦周邊' },
  { id: 6, name: '多功能擴充座', price: 3200, category: '電腦周邊' },
  { id: 7, name: '無線充電板', price: 1200, category: '充電設備' },
  { id: 8, name: 'USB-C 快充線', price: 680, category: '充電設備' },
  { id: 9, name: '藍牙音響', price: 5500, category: '音響設備' },
  { id: 10, name: '電競椅', price: 8900, category: '家具' },
];

/**
 * 產品項目元件 - 使用 memo 優化效能
 * @param {Product} product - 產品物件
 * @param {Function} onAddToCart - 加入購物車回調函式
 */
const ProductItem = memo<ProductItemProps>(({ product, onAddToCart }) => {
  console.log(`🔄 [子元件] ${product.name} 正在渲染...`);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {product.category}
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            NT$ {product.price.toLocaleString()}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => onAddToCart(product.id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        加入購物車
      </button>
    </div>
  );
});

ProductItem.displayName = 'ProductItem';

/**
 * 主要的產品列表元件
 * 展示 useMemo 和 useCallback 的協同效應
 */
function FilterableProductList() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'none' | 'asc' | 'desc'>('none');
  const [cart, setCart] = useState<number[]>([]);

  console.log(`🔄 [父元件] FilterableProductList 正在渲染... (購物車數量: ${cart.length})`);

  // ==================== useMemo 的應用 ====================
  /**
   * 記憶化經過篩選和排序的產品列表
   * 只有當 searchTerm 或 sortBy 改變時才重新計算
   */
  const filteredAndSortedProducts = useMemo(() => {
    console.log('%c🔥 正在進行昂貴的篩選和排序計算...', 'color: red; font-weight: bold; font-size: 14px;');
    
    // 1. 篩選：根據搜尋詞篩選產品
    let products = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. 排序：根據價格排序
    if (sortBy === 'asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      products.sort((a, b) => b.price - a.price);
    }
    
    return products;
  }, [searchTerm, sortBy]); // 依賴項：只有這兩個值改變時才重新計算

  // ==================== useCallback 的應用 ====================
  /**
   * 記憶化「加入購物車」的函式
   * 確保傳遞給子元件的函式參考保持穩定
   */
  const handleAddToCart = useCallback((productId: number) => {
    console.log(`🛒 加入購物車: 產品 ID ${productId}`);
    setCart(prevCart => [...prevCart, productId]);
  }, []); // 依賴項為空，此函式永遠穩定

  /**
   * 記憶化清空購物車的函式
   */
  const handleClearCart = useCallback(() => {
    console.log('🗑️ 清空購物車');
    setCart([]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            智慧型產品列表
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            展示 useMemo 和 useCallback 的強大組合
          </p>
        </div>

        {/* 控制面板 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* 搜尋框 */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                搜尋產品
              </label>
              <input
                id="search"
                type="text"
                placeholder="輸入產品名稱或類別..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* 排序選項 */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                排序方式
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'none' | 'asc' | 'desc')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="none">預設排序</option>
                <option value="asc">價格由低到高</option>
                <option value="desc">價格由高到低</option>
              </select>
            </div>

            {/* 購物車資訊 */}
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                購物車數量
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {cart.length}
              </div>
              {cart.length > 0 && (
                <button
                  onClick={handleClearCart}
                  className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  清空購物車
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 產品統計 */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            顯示 {filteredAndSortedProducts.length} 個產品 (共 {allProducts.length} 個)
          </p>
        </div>

        {/* 產品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* 無結果提示 */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
              🔍
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              找不到符合條件的產品
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              請嘗試調整搜尋條件或清除篩選器
            </p>
          </div>
        )}

        {/* 效能說明 */}
        <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            🚀 效能優化說明
          </h3>
          <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>• 打開瀏覽器開發者工具的 Console 查看渲染日誌</p>
            <p>• 嘗試搜尋或排序：會看到「昂貴的篩選和排序計算」訊息</p>
            <p>• 點擊「加入購物車」：不會觸發篩選排序計算，子元件也不會重新渲染</p>
            <p>• 這展示了 useMemo 和 useCallback 如何協同工作來優化效能</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterableProductList;
