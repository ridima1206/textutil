
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
 
  return (
    <>
    
<Navbar title="textUtils" aboutText="About TextUtils"/>
<div className="container my-7">
  <TextForm heading="Enter Text To Analyse"/>
  </div>

    </>

  );
}

export default App;
