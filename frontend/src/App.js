import { DataContextProvider } from './contexts/DataContext';
import Main from './Main';
import './styles.css';

function App() {
  return (
    <div className='app'>
      <DataContextProvider>
        <Main />
      </DataContextProvider>
    </div>
  );
}

export default App;
