import React, { useState } from 'react';
import Header from './components/Header';
import BuscaSeguros from './components/Buscaseguros';
import SegurosList from './components/SegurosList';
import Footer from './components/Footer';

function App() {
  const [seguros, setSeguros] = useState([]);

  return (
    <div>
      <Header />
      <BuscaSeguros setSeguros={setSeguros} />
      <SegurosList seguros={seguros} />
      <Footer />
    </div>
  );
}

export default App;
