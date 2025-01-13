const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Jascas Web",
      description:
        "A modern and responsive website for the Italian-Argentine artist Jasmin Castrioty Avendaño",
      video: "jascasweb.mp4", // Ruta al video de vista previa
      url: "https://jascas.netlify.app",
    },
    {
      id: 2,
      title: "CRM F5",
      description:
        "System developed to connect Factoría F5 with customers,optimize processes and improve profitability.",
      video: "f5.mp4", // Ruta al video de vista previa
      url: "https://github.com/Arielparicio28/CRM-V1/blob/main/README.md",
    },

  ];

  return (
    <div className="flex flex-wrap justify-center gap-60 p-8 bg-background text-text">
      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden text-black"
        >
          {/* Video */}
          <div className="relative group">
            <video
              className="w-full h-fit object-cover cursor-pointer"
              src={project.video}
              muted
              autoPlay
              loop
              onClick={() => window.open(project.url, "_blank")}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-background text-white rounded hover:text-black hover:bg-primary"
              onClick={() => window.open(project.url, "_blank")}
            >
              Visit →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
