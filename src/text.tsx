function Microsoft_Component() {
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
      <div className="flex flex-wrap justify-center gap-60 p-8 bg-background text-text">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden text-black"
          >
            {/* Video */}
            <div className="relative group">
              <video
                className={w-full ${
                  project.orientation === "horizontal" ? "h-fit" : "h-48"
                } object-cover cursor-pointer}
                src={project.video}
                muted
                autoPlay
                loop
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
  
            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Microsoft_Component;
  