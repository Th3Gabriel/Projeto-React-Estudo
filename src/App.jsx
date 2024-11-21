import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Utils
import ScrollTop from './utils/ScrollTop';
import { AppContext } from './contexts/AppContext';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const appContext = useContext(AppContext);

  // Verifique se o contexto existe antes de tentar acessar suas propriedades
  if (!appContext) {
    return 'Erro: Contexto não encontrado';
  }

  // Verifique o valor de `loading`
  if (appContext.loading) {  // Certifique-se de que 'loading' está com "l" minúsculo
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
