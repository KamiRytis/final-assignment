import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Menu/Header';
import LogIn from './components/Menu/LogIn';
import Register from './components/Menu/Register';
import Main from './components/Main';
import Footer from './components/Menu/Footer';
import AddPost from './components/Posts/AddPost';
import EditPost from './components/Posts/EditPost';
import PostPage from './components/Posts/PostPage';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Header />}>
        <Route path='/' element={<Main />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/addPost' element={<AddPost />} />
        <Route path='/editPost/:id' element={<EditPost />}/>
        <Route path='/postPage/:id' element={<PostPage />}/>
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
