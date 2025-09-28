import { meta } from '@eslint/js'
import './App.css'
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <div >
    <Navbar />
    <MainRoutes />
    </ div>
  )
}

export default App
