import "./App.css";
import HomePage from "./pages/home/HomePage";

import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <HomePage />
    </Router>
    
  );
};

export default App;