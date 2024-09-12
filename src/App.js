import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles'; // 글로벌 스타일 import
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Maintenance from './components/MaintenancePage.js';
import LoginForm from './components/LoginForm';
import AppRoutes from './routes/AppRoutes.js';

function App() {
  return (
    <Router>
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <AppRoutes />
    </Router>
  );
}

export default App;