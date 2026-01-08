import "./App.css";
import { AboutWindow } from "./components/AboutWindow/AboutWindow";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle size="lg" />
      <div className="container-fluid">
        <section id="hero-about">
          <div className="row mt-5 mb-5">
            <div className="col-6 d-flex flex-column justify-content-center ps-5">
              <p className="text-start fs-1 mb-0">Dimitris Erotokritou</p>
              <div className="text-changer">
                <div className="roles-wrapper">
                  <div className="roles">
                    <span>Full-Stack</span>
                    <span>Front-End</span>
                    <span>Back-End</span>
                  </div>
                </div>
                <p className="text-start fs-1">Software Developer</p>
              </div>
            </div>
            <div className="col-6">
              <AboutWindow />
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
