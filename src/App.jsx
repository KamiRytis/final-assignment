import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Menu/Header';
import LogIn from './components/Menu/LogIn';
import Register from './components/Menu/Register';
import Main from './components/Main';
import Footer from './components/Menu/Footer';
import AddPost from './components/Posts/AddPost';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Header />}>
        <Route path='/' element={<Main />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/addPost' element={<AddPost />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
