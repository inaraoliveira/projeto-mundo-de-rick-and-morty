import './styles/App.css'
import { Header } from './components/Header';
import { Rotas } from './Routes';
import Particle from './components/particle';





function App() {
  return (
    <div className="App">
      <Particle/>
      <Header />
      <Rotas /> 
    </div>
  );
}

export default App;
