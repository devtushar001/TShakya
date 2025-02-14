import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import TShakyaContextProvider from './Context/TShakya.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TShakyaContextProvider>
      <App />
    </TShakyaContextProvider>
  </BrowserRouter>,
)
