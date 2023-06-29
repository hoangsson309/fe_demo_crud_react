import './App.css';
import Home from './components/pages/home';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
