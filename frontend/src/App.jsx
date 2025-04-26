import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Navbar } from './Components/Navbar';
import { MainPic } from './Components/MainPic';
import { Features } from './Components/Features';
import { Footer } from './Components/Footer';
import { About } from './Components/About';
import { Login, Signup } from './Components/Auth';
import { Restaurant, Room } from './Components/Hotel';

const Home = () => (
  <>
    <MainPic />
    <Features />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/room' element={<Room/>} />
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='*' element={<div style={{ padding: '2rem' }}>Page Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
