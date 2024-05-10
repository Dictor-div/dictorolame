import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
      <RouterProvider router={MyRoutes}/>
  );
}

export default App;
