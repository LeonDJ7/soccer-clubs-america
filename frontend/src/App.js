import { DataContextProvider } from './contexts/DataContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Main from './Main';
import './styles.css';

function App() {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </DataContextProvider>
  );
}

export default App;
