import Navbar from "core/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import RoutesApp from "./routes";

function App() {
  return (
    <section className='main-container'>
      <BrowserRouter>
        <Navbar />
        <main>
          <RoutesApp></RoutesApp>
        </main>
      </BrowserRouter>
    </section>
  );
}

export default App;
