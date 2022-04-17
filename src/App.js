import  './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
       <About/>
      {/* <TextForm heading ="Enter your text to analyze"/> */}
      </div>
    </>
  );
}

export default App;
