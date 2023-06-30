import './App.css';
import Home from './components/pages/home';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}> //Tất cả các component sử dụng redux đều phải nằm trong cái này
        <Home />
      </Provider>
    </div>
  );
}

export default App;
