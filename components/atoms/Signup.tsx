'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../api/firebase';
import  '../styles/style.css';

const Signup: React.FC = () => {
  const [username, setUserName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      router.push('/'); // Redirect to home 
    } catch (error) {
      console.error(error);
      alert('Error signing up');
    }
  };

  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h1>Signup</h1>
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
      <button type="submit" className='button'>Signup</button>
    </form>
    {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default Signup;