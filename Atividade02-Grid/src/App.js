
import './App.css';
import Caixa from './components/Caixa';

import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Header />

      <div class="grid-container">

        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        <div >
          <Caixa></Caixa>
        </div>
        
      </div>





      <Footer />

    </div>
  );
}

export default App;
