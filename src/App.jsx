import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-secondary flex flex-col items-center w-[100vw] h-fit">
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
