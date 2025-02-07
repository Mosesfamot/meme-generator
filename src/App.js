import React from 'react';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import './styles.css';

export default function App() {
  return (
    <section>
      <Navbar />
      <Meme />
    </section>
  )
}