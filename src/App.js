import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import PageHome from './Components/PageHome';
import Footer from './Components/Footer';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <main className='middle'>
        <PageHome />
      </main> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
