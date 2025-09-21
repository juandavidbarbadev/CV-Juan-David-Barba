
import ExperienceItem from "./ExperienceItem";

function ExperienceList({ experiences, selectedId, onSelectExperience }) {
  return (
    <section className="bg-white rounded-xl shadow border overflow-hidden">

      <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h2 className="text-lg font-semibold">Experiencia</h2>
        <span className="text-sm opacity-90">
          Selecciona una experiencia para ver el resumen
        </span>
      </div>


      <div className="divide-y divide-gray-200">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            data={exp}
            isSelected={selectedId === exp.id}
            onSelect={onSelectExperience}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceList;
