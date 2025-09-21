
function Profile({ data }) {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 border rounded-2xl shadow-lg bg-white">
      
      <img
        src={data.image}
        alt={`Foto de perfil de ${data.name}`}
        className="w-28 h-28 object-cover rounded-full border-2 border-gray-300 shadow-md"
      />

      
      <div className="text-center sm:text-left space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-gray-600 italic">
          {data.profession ? data.profession : "Sin profesión registrada"}
        </p>
        <p className="text-gray-700 leading-relaxed">{data.description}</p>
        <a href="https://drive.google.com/uc?export=download&id=1i95hnRIL70rShBQRTnD037AVpqt2jEQ0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            📄 Descargar CV
          </a>


      </div>
    </section>
  );
}

export default Profile;
