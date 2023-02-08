import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Menu/Header';
import LogIn from './components/Menu/LogIn';
import Register from './components/Menu/Register';
import Main from './components/Main';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Header />}>
        <Route path='/' element={<Main />}/>
      </Route>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<LogIn />}/>
    </Routes>
    </>
  );
}

export default App;
