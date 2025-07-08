import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styles.header}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span style={styles.titleText}>Jang Hyeonseo’s Portfolio</span>
      </Link>

      <nav style={styles.nav}>
        <Link to="/about" style={styles.navLink}>ABOUT</Link>
        <Link to="/experiences" style={styles.navLink}>EXPERIENCES</Link>
        <Link to="/projects" style={styles.navLink}>PROJECTS</Link>
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
  titleText: {
    fontSize: '1.1rem',
    fontWeight: 600
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.95rem',
    fontWeight: 500
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    transition: 'color 0.2s',
  }
}

export default Header