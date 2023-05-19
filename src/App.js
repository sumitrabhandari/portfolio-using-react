import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "./Style.css";
import Services from './components/Services';
import Home from './components/Home';

function App() {
  return (
  <>
  <Header title="Portfolio"/>
  <div className='services-section container'>
  <Services title="Web Desigh" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae magni fuga autem. Quibusdam repudiandae corrupti doloribus, tempora laboriosam quis voluptates quo quasi aliquid enim porro accusantium veniam ratione fugit."/>
  <Services title="graphics design" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae magni fuga autem. Quibusdam repudiandae corrupti doloribus, tempora laboriosam quis voluptates quo quasi aliquid enim porro accusantium veniam ratione fugit."/>
  <Services title="php" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae magni fuga autem. Quibusdam repudiandae corrupti doloribus, tempora laboriosam quis voluptates quo quasi aliquid enim porro accusantium veniam ratione fugit."/>
  </div>
  </>
  );
}

export default App;
