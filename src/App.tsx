import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle size="lg" />
      <MainPage />
    </>
  );
}

export default App;
