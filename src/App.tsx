import "./App.css";
import { AboutWidnow } from "./components/AboutWindow/AboutWindow";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="container-fluid">
        <section id="hero-about">
          <div className="row mt-5 mb-5">
            <div className="col-6 d-flex flex-column justify-content-center ps-5">
              <h1 className="text-start">Dimitris Erotokritou</h1>
              <h2 className="text-start">Software Developer</h2>
            </div>
            <div className="col-6">
              <AboutWidnow />
            </div>
          </div>
        </section>
        <div className="row mt-5">
          <div className="col w-100">
            <h1 id="stack" className="text-center">
              Stack
            </h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col w-100">
            <h1 id="projects" className="text-center">
              Projects
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
