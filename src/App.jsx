/* Page de "routes" de l'application. Sert à rediriger les utilisateurs sur les bonnes pages.*/ 
import './App.css';
import ChatbotFull from './pages/chatbot/ChatbotFull';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/login/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/chatbot' component={ChatbotFull} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
