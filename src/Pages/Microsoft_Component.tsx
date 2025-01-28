import { useState } from "react";
import Modal from "../Components/ModalProps";


function Microsoft_Component() {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Drag and Drop",
      description:
        "It is a component developed with .NET Drag and Drop integrated into Power Apps",
      video: "Drag_Drop.mp4", // Ruta al video de vista previa
      orientation: "horizontal", // Indica que el video es horizontal
    },
    {
      id: 2,
      title: "Login Component",
      description:
        "It is a component developed with .NET and React Login Animation integrated into Power Apps",
      video: "Login_Component.mp4", // Ruta al video de vista previa
      orientation: "vertical", // Indica que el video es vertical
    },
  ];

  return (
    <div className="relative bg-black text-text w-full h-screen overflow-auto">
      <p className="text-3xl font-bold mb-4 text-text text-center">Microsoft Component</p>
      {/* Lista de proyectos */}
      <div className="flex flex-wrap items-center justify-center gap-10 p-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-64 rounded-lg shadow-lg bg-white overflow-hidden text-black flex flex-col"
          >
            {/* Video */}
            <div
              className="relative group w-full h-40 cursor-pointer"
              onClick={() => setFullscreenVideo(project.video)} // Abre el modal con el video correspondiente
            >
              <video
                className={`w-full h-full cursor-pointer ${
                  project.orientation === "horizontal"
                    ? "object-fill"
                    : "object-cover"
                }`}
                src={project.video}
                muted
                autoPlay
                loop
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>

            {/* Contenido */}
            <div className="p-4 min-h-[64px]">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal reutilizable */}
      <Modal
        isOpen={!!fullscreenVideo}
        onClose={() => setFullscreenVideo(null)}
        videoSrc={fullscreenVideo}
      />
    </div>
  );
}

export default Microsoft_Component;
