function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.inner}>
          <span>T | 010-2126-1135</span>
          <span>E | jshs@ewha.ac.kr</span>
          <a href="https://github.com/hseo1o2" target="_blank" rel="noreferrer">GITHUB</a>
        </div>
      </footer>
    )
  }
  
  const styles = {
    footer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#fff',
      borderTop: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    inner: {
      display: 'flex',
      gap: '2rem',
      fontSize: '0.85rem'
    }
  }
  
  export default Footer
  