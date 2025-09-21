// src/App.jsx
import { useState } from "react";
import { profile, experiences, education } from "./data";
import Profile from "./components/profile";
import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";

function App() {
  const [selectedExpId, setSelectedExpId] = useState(null);

  function handleSelectExperience(id) {
    setSelectedExpId((prevId) => (prevId === id ? null : id));
  }

  const selectedExperience = experiences.find((exp) => exp.id === selectedExpId);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      <Profile data={profile} />

      
      <ExperienceList
        experiences={experiences}
        selectedId={selectedExpId}
        onSelectExperience={handleSelectExperience}
      />

      
      <div className="mt-4 p-4 bg-gray-50 border rounded-lg text-gray-700">
        {selectedExperience ? (
          <p>
            <strong>{selectedExperience.title}</strong> en{" "}
            {selectedExperience.company} ({selectedExperience.years})
          </p>
        ) : (
          <p>No hay experiencia seleccionada.</p>
        )}
      </div>

      
      <EducationList education={education} />
    </div>
  );
}

export default App;
