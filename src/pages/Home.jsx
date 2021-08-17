import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div>
      <Navbar />
      <main className="home">
        <div>
          <img
            id="avatar"
            src="https://avatars.githubusercontent.com/u/76497268?v=4"
            alt="avatar"
          />
          <h2 className="title center">Hi 👋, I'm Lucas</h2>
          <p className="subtitle">
            A person who likes to contribute.
            <img
              alt="RUSB"
              src="https://github.com/drethenrain/drethenrain/raw/main/resources/rusb.png"
              width="20px"
            />
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
