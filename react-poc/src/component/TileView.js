import React from 'react';

function TileView({ students, setSelectedStudent }) {
  return (
    <div className="tile-view">
      {students.map((student) => (
        <div key={student.id} className="tile" onClick={() => setSelectedStudent(student)}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Username: {student.username}</p>
          <div className="tile-buttons">
            <button>Edit</button>
            <button>Flag</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TileView;
