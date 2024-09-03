'use client';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../api/firebase';
import '../styles/style.css';
import Link from 'next/link';
import Alert from '../molecules/alerts';

const Login: React.FC = () => {
  const [username, setUserName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFailedAlert, setShowFailedAlert] = useState<boolean>(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowSuccessAlert(true)
      router.push('/'); // Redirect to home or quiz page
    } catch (error) {
      setShowFailedAlert(true)
    }
  };

  return (
    <div className='flex flex-col relative'>
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
      {
        showFailedAlert &&
        <Alert onCancel={()=>setShowFailedAlert(false)} onOk={()=> setShowFailedAlert(false)} message='Failed to signin' />
      }
      {
        showSuccessAlert &&
        <Alert onCancel={()=>setShowSuccessAlert(false)} onOk={()=> setShowSuccessAlert(false)} message='Signin successful' />
      }
    </div>
    
  );
};

export default Login;