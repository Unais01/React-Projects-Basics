import React, { useState } from "react";
import data from "./data";
import "./Test.css";
const Home = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const displaySemesterDetails = (semester) => {
    setSelectedSemester(semester);
  };

  const getSemesterSubjects = (semester) => {
    const semesterInfo = data.find((item) => item.semester === semester);
    return semesterInfo ? semesterInfo.subjects : [];
  };

  return (
    <div>
      {/* Displaying Subjects Initially */}
      <h1>Subjects List</h1>
      {data.map((item) => (
        <div key={item.semester}>
          <h2>Semester {item.semester}</h2>
          <ul>
            {getSemesterSubjects(item.semester).map((subject, idx) => (
              <li key={idx}>{subject.name}</li>
            ))}
          </ul>
          <button onClick={() => displaySemesterDetails(item.semester)}>
            Show Details for Semester {item.semester}
          </button>
        </div>
      ))}

      {/* Displaying Details for Selected Semester */}
      <h1>Hello Retrieve info</h1>
      {selectedSemester !== null && (
        <div>
          <h2>Details for Semester {selectedSemester}</h2>
          {getSemesterSubjects(selectedSemester).map((subject, idx) => (
            <div key={idx}>
              <h3>{subject.name}</h3>
              {subject.notes.length > 0 && (
                <div>
                  <h4>Notes:</h4>
                  <ul>
                    {subject.notes.map((note, noteIdx) => (
                      <li key={noteIdx}>
                        <a
                          href={note.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {note.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {subject.pyqs.length > 0 && (
                <div>
                  <h4>Previous Year Questions:</h4>
                  <ul>
                    {subject.pyqs.map((pyq, pyqIdx) => (
                      <li key={pyqIdx}>
                        <a
                          href={pyq.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pyq.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
