import { useState } from "react";


const Certificates = () => {
  // Lista de certificados con títulos y rutas a los archivos PDF
  const certificates = [
    { title: "Certificado - P7 850h mixta BCN", url: "p7.pdf" },
    { title: "Certificado - Javascript", url: "javascript_basic certificate.pdf" },
    { title: "Certificado 3", url: "/certificates/certificado3.pdf" },
  ];

  // Estado para manejar el certificado actualmente seleccionado
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Mis Certificados</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de certificados */}
        <div className="lg:w-1/3 space-y-4">
          <ul className="bg-white shadow-md p-4 rounded-lg">
            {certificates.map((cert, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedCertificate === cert.url
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCertificate(cert.url)}
              >
                {cert.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Visor de PDF */}
        <div className="lg:w-2/3">
          {selectedCertificate ? (
            <iframe
              src={selectedCertificate}
              className="w-full h-[500px] border rounded-lg shadow-md"
              title="Visor de Certificado"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-[500px] border rounded-lg bg-gray-50 shadow-md">
              <p className="text-gray-500 text-lg">Selecciona un certificado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;