// // import React, { useEffect, useState } from 'react';
// // import { getStudents, deleteStudent } from '../services/api';
// // import { Link } from 'react-router-dom';
// // import moment from 'moment';

// // const StudentList = () => {
// //   const [students, setStudents] = useState([]);

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       const { data } = await getStudents();
// //       console.log('Fetchech data : ', data);
// //       let maped = data.map((s) => {
// //         let obj = { ...s };
// //         // const dateValue = moment(s.date_of_birth);
// //         // obj.date_of_birth  = dateValue.format("YYYY-MM-DD");
       
// //         obj.id = s._id;
// //         return obj
// //       });
// //       console.log('after edited', maped);
// //       setStudents(maped);
// //     } catch (error) {
// //       console.error('Error fetching students:', error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await deleteStudent(id);
// //       console.log('Deleted data : ', id);
// //       fetchStudents();
// //     } catch (error) {
// //       console.error('Error deleting student:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Student List</h2>
// //       <Link to="/add">Add Student</Link>
// //       <ul>
// //         {students.map((student) => (
// //           <li key={student.id}>
// //             {student.first_name} {student.last_name} ({student.grade})
// //             <Link to={`/edit/${student.id}`}>Edit</Link>
// //             <button onClick={() => handleDelete(student.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default StudentList;

// import React, { useEffect, useState } from 'react';
// import { getStudents } from '../services/api';
// import { Link } from 'react-router-dom';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       // const { data } = await getStudents();
//       // setStudents(data);
//       const { data } = await getStudents();
//       console.log('Fetchech data : ', data);
//       let maped = data.map((s) => {
//         let obj = { ...s };
//         // const dateValue = moment(s.date_of_birth);
//         // obj.date_of_birth  = dateValue.format("YYYY-MM-DD");
       
//         obj.id = s._id;
//         return obj
//       });
//       console.log('after edited', maped);
//       setStudents(maped);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <Link to="/add">Add Student</Link>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.first_name} {student.last_name} ({student.grade})
//             <Link to={`/edit/${student.id}`}>Edit</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchStudents } from '../redux/students/studentsActions';
// import SearchBar from './SearchBar';

// const StudentList = () => {
//   const { list, loading, error } = useSelector((state) => state.students);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchStudents());
//   }, [dispatch]);

//   const handleSearch = (query) => {
//     // Filter logic (if needed) or use server-side filtering
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Student List</h1>
//       <SearchBar onSearch={handleSearch} />
//       <ul>
//         {list.map((student) => (
//           <li key={student.id}>
//             {student.first_name} {student.last_name} - Grade: {student.grade}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;
