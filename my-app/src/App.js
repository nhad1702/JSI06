import Header from './Header';
import './App.css';
import Nav from './Nav';
import Side from './Side';
import Content from './Content';
import Foot from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='center'>
        <Side />
        <Content />
      </div>
      <Foot />
    </div>
  );
}

export default App;
