'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../api/firebase';
import '../styles/style.css';
import Link from 'next/link';

const Login: React.FC = () => {
  const [username, setUserName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      router.push('/'); // Redirect to home or quiz page
    } catch (error) {
      console.error(error);
      alert('Error logging in');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input className='input' type="text"
       placeholder='User Name'
       value={username}
       onChange={(e) => setUserName(e.target.value)}
       required
      />
      <input className='input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className='button' type="submit">Login</button>
      <p>Do not have an account <a className='text-blue-800' href="signup">Sign up</a></p>
    </form>
  );
};

export default Login;