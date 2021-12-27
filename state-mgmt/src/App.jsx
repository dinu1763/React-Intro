import logo from './logo.svg';
import './App.css';
import { Grocery } from './components/Grocery';

function App() {
  return (
    <div className="App">
      <h3>Groceries List Management</h3>
      <Grocery />
    </div>
  );
}

export default App;
