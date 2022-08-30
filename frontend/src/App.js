import { DataContextProvider } from './contexts/DataContext';
import HomePage from './pages/Home';
import './styles.css';

function App() {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  );
}

export default App;
