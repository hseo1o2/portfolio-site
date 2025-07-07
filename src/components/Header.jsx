import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.title}>Jang Hyeonseo’s Portfolio</div>
      <nav style={styles.nav}>
        <Link to="/about">ABOUT</Link>
        <Link to="/experiences">EXPERIENCES</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    zIndex: 1000
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 600
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.95rem',
    fontWeight: 500
  }
}

export default Header
