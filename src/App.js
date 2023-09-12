import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import Input from './component/input/Input';
import Show from './component/show/Show';
import Navigation from './component/navigation/Navigation';

function App() {
  return (
   <Provider store={Store}>
     <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Show/>} />
          <Route path="login" element={<Input/>}/>
        </Route>
      </Routes>
    </div>
   </Provider>
  );
}

export default App;
