
import './App.css';
import Caixa from './components/Caixa';

import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      
          <Header/>

          <div className='container'>

            <div className='row'>
              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

            </div>

          </div>

          <div className='container'>

            <div className='row'>
              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

              <div className='col'>
              <Caixa></Caixa>

              </div>

            </div>

          </div>

          



          <Footer/>
      
    </div>
  );
}

export default App;
