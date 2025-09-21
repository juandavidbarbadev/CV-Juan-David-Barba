
import { useState } from "react";

function EducationList({ education }) {
  const [show, setShow] = useState(true);

  return (
    <section className="bg-white rounded-xl shadow border overflow-hidden">

      <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <h2 className="text-lg font-semibold">Educación</h2>
        <button
          onClick={() => setShow(!show)}
          className="px-3 py-1 bg-white text-green-600 rounded-md text-sm font-medium shadow hover:bg-gray-100"
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>


      {show && (
        <ul className="divide-y divide-gray-200">
          {education.map((ed) => (
            <li
              key={ed.id}
              className="px-6 py-3 hover:bg-gray-50 transition text-gray-700"
            >
              <strong>{ed.title}</strong> - {ed.place} ({ed.year})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default EducationList;
