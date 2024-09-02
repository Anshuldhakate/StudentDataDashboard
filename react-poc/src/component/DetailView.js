import React from 'react';

function DetailView({ student, setSelectedStudent }) {
  return (
    <div className="detail-view">
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Username: {student.username}</p>
      <p>Phone: {student.phone}</p>
      <p>Website: {student.website}</p>
      <p>Company: {student.company.name}</p>
      <p>Address: {student.address.street}, {student.address.city}</p>
      <button onClick={() => setSelectedStudent(null)}>Back to Tiles</button>
    </div>
  );
}

export default DetailView;
