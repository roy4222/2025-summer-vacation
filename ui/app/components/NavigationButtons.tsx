'use client';

/**
 * 導航按鈕組件
 * 
 * 提供互動式的導航按鈕，包含：
 * - hover 效果
 * - 樣式切換
 * - 點擊導航功能
 * 
 * @returns {JSX.Element} 導航按鈕組件
 */
export default function NavigationButtons() {
  console.log('渲染導航按鈕組件');
  
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    }}>
      <a
        href="/about"
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.2s ease',
          border: 'none',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#0070f3';
        }}
      >
        關於我們
      </a>
      
      <a
        href="/contact"
        style={{
          backgroundColor: 'transparent',
          color: '#0070f3',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          border: '2px solid #0070f3',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#0070f3';
          e.currentTarget.style.color = 'white';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#0070f3';
        }}
      >
        聯絡我們
      </a>
    </div>
  );
} 