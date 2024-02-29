import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Numeros } from "./components/Numeros";
import { Apresentacao } from "./components/Apresentacao";
import { Casas } from "./components/Casas";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <Apresentacao />
      <Casas />
    </main>
  );
}

export default App;
