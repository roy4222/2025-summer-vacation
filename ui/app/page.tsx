import NavigationButtons from './components/NavigationButtons';

/**
 * 首頁組件
 * 
 * 提供基本的網站首頁功能，包含：
 * - 歡迎標題
 * - 簡介文字
 * - 基本導航連結
 * 
 * @returns {JSX.Element} 首頁頁面組件
 */
export default function Home() {
  console.log('渲染首頁組件');
  
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* 主要內容區域 */}
      <main style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* 主標題 */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#333',
          lineHeight: '1.2'
        }}>
          歡迎來到我的網站
        </h1>
        
        {/* 副標題 */}
        <p style={{
          fontSize: '1.25rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          這是一個使用 Next.js 建立的基本首頁，
          展示簡潔的設計和良好的使用者體驗。
        </p>
        
        {/* 導航按鈕區域 */}
        <NavigationButtons />
        
        {/* 功能特點列表 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.5rem',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              快速載入
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.5',
              margin: '0'
            }}>
              使用 Next.js 優化的效能，
              提供快速的頁面載入體驗。
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.5rem',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              響應式設計
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.5',
              margin: '0'
            }}>
              適配各種螢幕尺寸，
              在手機和桌面都有良好體驗。
            </p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.5rem',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              現代技術
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.5',
              margin: '0'
            }}>
              採用最新的 React 和 Next.js 技術，
              確保程式碼品質和維護性。
            </p>
          </div>
        </div>
      </main>
      
      {/* 頁尾 */}
      <footer style={{
        marginTop: 'auto',
        padding: '2rem 0',
        borderTop: '1px solid #e9ecef',
        width: '100%',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#666',
          fontSize: '0.875rem',
          margin: '0'
        }}>
          © 2024 我的網站. 版權所有.
        </p>
      </footer>
    </div>
  );
}
