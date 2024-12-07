// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import StudentList from './components/StudentList';
// import StudentForm from './components/StudentForm';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Student Management</h1>
//         <Routes>
//           <Route path="/" element={<StudentList />} />
//           <Route path="/add" element={<StudentForm />} />
//           <Route path="/edit/:id" element={<StudentForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <StudentList />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
