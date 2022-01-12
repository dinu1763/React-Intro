import './App.css';
import { Home } from './components/Home';
import { Settings } from './components/Settings';
import { Dashboard } from './components/Dashboard';
import { Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          
          <Route path="/login" element={<Login/>}></Route>
          <Route 
          path="/dashboard/settings" 
          element={
                  <PrivateRoute> 
                    <Settings/>
                  </PrivateRoute>
              }
          ></Route>
          <Route 
          path="/dashboard" 
          element={
                  <PrivateRoute> 
                    <Dashboard/>
                  </PrivateRoute>
              }
          ></Route>
          
          <Route path="*" element={<h1>404 Page Not Found!</h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
