import { useState } from "react";


const Cv = () => {
  // Lista de cv y rutas a los archivos PDF
  const cv = [
    { title: "CV English Version", url: "English_Version_Java_Developer.pdf" },
    { title: "CV Spanish Version", url: "last_v.pdf" },
  ];

  // Estado para manejar el cv actualmente seleccionado
  const [selectedCV, setSelectedCV] = useState<string | null>(
    null
  );

  return (
    <div className="container mx-auto p-6 h-screen bg-black">
      <p className="text-3xl font-bold mb-6 text-text text-center">CV</p>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de CV */}
        <div className="lg:w-1/3 space-y-4">
          <ul className="bg-white shadow-md p-4 rounded-lg">
            {cv.map((cert, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedCV === cert.url
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCV(cert.url)}
              >
                {cert.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Visor de PDF */}
        <div className="lg:w-2/3">
          {selectedCV ? (
            <iframe
              src={selectedCV}
              className="w-full h-[500px] border rounded-lg shadow-md"
              title="Visor de Certificado"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-[500px] border rounded-lg bg-gray-50 shadow-md">
              <p className="text-gray-500 text-xl text-center inline-block animate-typewriter overflow-hidden whitespace-nowrap">Select a CV</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cv;
