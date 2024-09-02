import React from 'react';

function GridView({ students, setSelectedStudent }) {
  return (
    <div className="grid-view">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} onClick={() => setSelectedStudent(student)}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.username}</td>
              <td>{student.phone}</td>
              <td>{student.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GridView;
