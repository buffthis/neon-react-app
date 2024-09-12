import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles'; // 글로벌 스타일 import
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