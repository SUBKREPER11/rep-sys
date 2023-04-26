import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';
import Help from './pages/Help';
import Form2 from './pages/Form2';
// import Form2 from './pages/Form2';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/form/:id/:unit?/:name?" element={<Form />} />
      <Route path="/help" element={<Help />} />
      <Route path="/for/:id/:unit?/:name?" element={<Form2 />} />
      {/* <Route path="/Panel" element={<Panel />} /> */}
    </Routes>
  );
}

export default App;