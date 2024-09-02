import React from 'react';
import GridView from './GridView';
import TileView from './TileView';
import DetailView from './DetailView';

function MainContent({ students, view, setSelectedStudent, selectedStudent, setView }) {
  return (
    <main>
      {selectedStudent ? (
        <DetailView student={selectedStudent} setSelectedStudent={setSelectedStudent} />
      ) : view === 'grid' ? (
        <GridView students={students} setSelectedStudent={setSelectedStudent} />
      ) : (
        <TileView students={students} setSelectedStudent={setSelectedStudent} />
      )}
    </main>
  );
}

export default MainContent;
