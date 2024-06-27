import './App.css';
import EmployeeSearch from './app/features/Employee/EmployeeSearch';
import EmployeeCreate from './app/features/Employee/EmployeeCreate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/employees/search" element={<EmployeeSearch />} />
          <Route path="/employees/create" element={<EmployeeCreate />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
