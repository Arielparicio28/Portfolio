import { useState } from "react";
import Button from "../Components/Button";
import Modal from "../Components/ModalProps";

const Projects: React.FC = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      title: "Jascas Web",
      description:
        "A modern and responsive website developer with React, for the Italian-Argentine artist Jasmin Castrioty Avendaño",
      video: "jascasweb.mp4", // Ruta al video de vista previa
      url: "https://jascas.netlify.app",
      orientation: "horizontal"
    },
    {
      id: 2,
      title: "CRM F5",
      description:
        "System developed with Nest.js, MongoDB, React to connect Factoría F5 with customers,optimize processes and improve profitability.",
      video: "crm_demo.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/CRM-V1/blob/main/README.md",
      orientation: "horizontal"
    },
    {
      id: 3,
      title: "Java API",
      description:
        "REST API with Spring Boot, Maven, SQL Server, global exception handling, Spring Boot Actuator, testing with JUnit and Mockito.",
      video: "api_comprimido.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/API-Java----SQL-Server/blob/main/README.md",
      orientation: "horizontal"
    },
    {
      id: 4,
      title: "Memory Game",
      description:
        "It is a memory game developed with Nest.js ,React,Mongo DB following the MVC view controller mode",
      video: "game.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/Brascuba_Game",
      orientation: "horizontal"
    },
    {
      id: 5,
      title: "Ranking of Repositories",
      description:
        "It is Project developed to improve the search for top-ranked repositories and programming languages.",
      video: "rank_repo.mp4", // Ruta al video de vista previa
      url: "https://rankingrepo.netlify.app/",
      orientation: "horizontal"
    },
    {
      id: 6,
      title: "Recruiting App",
      description:
        "Simplifies hiring by tracking candidates, scheduling interviews, and automating tasks with Power Platform tools.",
      video: "recruiting.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/Recruiting_PowerApps",
      orientation: "horizontal"
    },
    {
      id: 7,
      title: "Audit App",
      description:
        "Manages audits with Power Apps, Dataverse, and Power Automate, offering data centralization, workflows, and dynamic reports.",
      video: "audit.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/Audit_PowerApps",
      orientation: "horizontal"
    },
    {
      id: 8,
      title: "CRM App",
      description:
        "Manages clients and contacts, tracks activities, and integrates with Microsoft 365 for collaboration using Power Apps and Dataverse.",
      video: "crm_demo1.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/CRM-Power-Apps",
      orientation: "horizontal"
    },
  ];

  return (
    <div className="relative bg-black text-text w-full h-screen overflow-auto">
       <h1 className="text-3xl font-bold mb-4  text-text text-center">Projects</h1>
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
              <Button url={project.url} />
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
};

export default Projects;
