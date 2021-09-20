import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import luan1 from '../../assets/luangameplays.mp3';
import luan2 from '../../assets/luangameplays2.mp3';

import './style.scss';

export function Home() {
  const [clicksLuan1, setClicksLuan1] = useState(0);
  const [clicksLuan2, setClicksLuan2] = useState(0);

  useEffect(() => {
    if (clicksLuan1 === 30) {
      document.getElementById('luan1').play();
    }

    if (clicksLuan2 === 30) {
      document.getElementById('luan2').play();
    }
  });

  return (
    <>
      <Navbar />
      <main className="home">
        <div>
          <div id="avatar-div">
            <span
              onClick={() => {
                setClicksLuan2(clicksLuan2 + 1);
              }}
            >
              <img
                id="avatar"
                src="https://avatars.githubusercontent.com/u/76497268?v=4"
                alt="avatar"
              />
            </span>
          </div>
          <h2 className="title text-center">Hi 👋, I'm Lucas</h2>
          <p className="subtitle">
            A person who likes to contribute.
            <span
              onClick={() => {
                setClicksLuan1(clicksLuan1 + 1);
              }}
            >
              <img
                alt="RUSB"
                src="https://github.com/drethenrain/drethenrain/raw/main/resources/rusb.png"
                width="22px"
              />
            </span>
          </p>
          <p className="description text-center">
            A{' '}
            <span>
              <Typewriter
                words={['Back-end developer']}
                cursor
                typeSpeed={120}
              />
            </span>
          </p>
          <audio id="luan1">
            <source src={luan1} type="audio/mp3" />
          </audio>
          <audio id="luan2">
            <source src={luan2} type="audio/mp3" />
          </audio>
        </div>
      </main>
      <Footer />
    </>
  );
}
