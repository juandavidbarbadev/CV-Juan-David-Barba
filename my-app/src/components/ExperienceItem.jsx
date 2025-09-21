
function ExperienceItem({ data, isSelected, onSelect }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition">

      <div>
        <h3 className="font-semibold text-gray-800">{data.title}</h3>
        <p className="text-sm text-gray-500">
          {data.company} · {data.years}
        </p>
      </div>

      <button
        onClick={() => onSelect(data.id)}
        className={`px-4 py-1.5 rounded-md text-sm font-medium shadow
          ${
            isSelected
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
      >
        {isSelected ? "Deseleccionar" : "Seleccionar"}
      </button>
    </div>
  );
}

export default ExperienceItem;
