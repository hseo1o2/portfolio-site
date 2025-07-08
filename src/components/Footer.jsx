function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span>T | 010-2126-1135</span>
        <a href="mailto:0102jhshs@ewha.ac.kr">E | 0102jhshs@ewha.ac.kr</a>
        <a href="https://github.com/hseo1o2" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="https://wave-linseed-329.notion.site/Hyeonseo-s-Portfolio-17c780c0050b800ab678c8714160f33f?source=copy_link" target="_blank" rel="noreferrer">NOTION PORTFOLIO</a>
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
