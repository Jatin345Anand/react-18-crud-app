import React, { useState, useEffect } from 'react';
import { createStudent, updateStudent, getStudentById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const StudentForm = () => {
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    grade: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log('Fetched id details',id);
      fetchStudentDetails(id);
    }
  }, [id]);

  const fetchStudentDetails = async (id) => {
    try {
      console.log('Fetched id method',id);
      const { data } = await getStudentById(id);
      console.log('Fetched id details',data);
      setStudent(data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('handeld sumbit',id);
      if (id) {
        await updateStudent(id, student);
      } else {
        await createStudent(student);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={student.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={student.last_name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date_of_birth"
          value={student.date_of_birth}
          onChange={handleChange}
        />
        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={student.grade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentForm;
