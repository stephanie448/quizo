import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav style={{ padding: 2, borderBottom: '1px solid #ccc' }}>
    <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '20px' }}><Link href="/">Home</Link></li>
      <li style={{ marginRight: '20px' }}><Link href="/login">Log in</Link></li>
      <li style={{ marginRight: '20px' }}><Link href="/signup">Sign up</Link></li>
      <li style={{background: '#F999'}}><Link href='/quiz'>Others</Link></li>
    </ul>
  </nav>
);

export default Navbar;