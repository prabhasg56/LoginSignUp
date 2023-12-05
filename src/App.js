import './App.css';

import API from './components/API';
import SignUp from './components/SignUp';
import { LoginSignUp } from './pages/LoginSignUp';

function App() {
  return (
    <div className="app">
      <LoginSignUp />
    </div>
  );
}

export default App;
