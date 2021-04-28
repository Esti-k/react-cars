import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './data-models/Car';

function App() {
  new Car();
  return (
    <div>
      <HelloWorld/>
    </div>
  );
}

export default App;
