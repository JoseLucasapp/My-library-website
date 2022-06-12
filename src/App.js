import './App.css';
import { Footer } from './components/footer/footer';
import { Top } from './components/top/top';
import { Home } from './views/home';

function App() {
  return (
    <div className="App">
      <Top />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
