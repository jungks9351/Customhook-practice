import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocalStoragePage from './pages/LocalStoragePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/useLocalStorage' element={<LocalStoragePage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
