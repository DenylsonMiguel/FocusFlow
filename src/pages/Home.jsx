import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-content">
      <div className="menu">
        <h2>FocusFlow</h2>
        <a href="#welcome">Welcome</a>
        <a href="#info">Info</a>
      </div>

      <div className="welcome">
        <h1>Welcome to FocusFlow</h1>
        <p>A modern way to organize your tasks easily and 100% free</p>
      </div>

      <div className="info">
        <h2>How FocusFlow Works?</h2>
        <p>
          FocusFlow helps you organize your tasks efficiently using modern
          techniques and a clean interface.
        </p>
      </div>

      <div className="login-content">
        <h2>Get Started</h2>
        <p>Sign in or create an account to begin using FocusFlow.</p>
        <a href="/login" className="login">
          Sign In
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
