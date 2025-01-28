import { useState } from "react";


const Certificates = () => {
  // Lista de certificados con títulos y rutas a los archivos PDF
  const certificates = [
    { title: "Google: Inteligencia Artificial y productividad", url: "IAcertificate.pdf" },
    { title: "Full-Stack 850h", url: "p7.pdf" },
    { title: "Pyhton", url: "python.pdf" },
    { title: "Java Basic", url: "java_basic.webp" },
    { title: "Javascript", url: "javascript_basic certificate.pdf" },
    { title: "MongoDB Transactions", url: "transaction.pdf" },
    { title: "MongoDB Indexes", url: "indexes.pdf" },
    { title: "MongoDB Aggregation", url: "agregation.pdf" },
    { title: "MongoDB CRUD Operations: Replace and Delete", url: "crud.pdf" },
    { title: "MongoDB CRUD Operations: Insert And Find", url: "Insertandfind.pdf" },
    { title: "MongoDB Atlas Search", url: "atlasSearch.pdf" },
    { title: "MongoDB Data Modeling", url: "datamodeling.pdf" },
    { title: "Microsoft Certified: Power Platform Fundamentals", url: "power.png" },
  ];

  // Estado para manejar el certificado actualmente seleccionado
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  return (
    <div className="container mx-auto p-6 h-min-screen bg-black">
      <p className="text-3xl font-bold mb-6 text-text text-center">Certificates</p>
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
              <p className="text-gray-500 text-xl text-center inline-block animate-typewriter overflow-hidden whitespace-nowrap">Select a Certificate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
