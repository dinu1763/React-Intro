import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Route, Routes} from 'react-router-dom';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/users" element={<Users/>}></Route>

          <Route 
          path="/users/:userid" 
          element={
                  <PrivateRoute> 
                    <UserDetails/>
                  </PrivateRoute>
              }
          ></Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/product/:id" element={<Products />}></Route>
          <Route path="*" element={<h1>404 Page Not Found!</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
