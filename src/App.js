import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='todo-container'>
      <Header/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
