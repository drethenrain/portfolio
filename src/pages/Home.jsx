import { Typewriter } from 'react-simple-typewriter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div>
      <Navbar />
      <main className="home">
        <div>
          <div id="avatar-div">
            <img
              id="avatar"
              src="https://avatars.githubusercontent.com/u/76497268?v=4"
              alt="avatar"
            />
          </div>
          <h2 className="title text-center">Hi 👋, I'm Lucas</h2>
          <p className="subtitle">
            A person who likes to contribute.
            <img
              alt="RUSB"
              src="https://github.com/drethenrain/drethenrain/raw/main/resources/rusb.png"
              width="22px"
            />
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
