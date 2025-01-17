import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function Ariel() {
  const [audio] = useState(new Audio("sonido.mp3")); // Asegúrate de tener un archivo de sonido en tu proyecto
  const [isHovering, setIsHovering] = useState(false);

  // Función para manejar el mouse enter
  const handleMouseEnter = () => {
    audio.play(); // Reproducir sonido
    setIsHovering(true); // Mostrar el texto "About Me"
  };

  // Función para manejar el mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false); // Ocultar el texto "About Me"
  };

  return (
    <div className="relative flex items-center justify-center gap-3">
      <Dropdown placement="bottom-end" backdrop="blur">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="/Kanban.jpg"
            alt="Ariel Aparicio"
            onMouseEnter={handleMouseEnter} // Agregar el efecto de hover
            onMouseLeave={handleMouseLeave} // Para cuando el mouse sale del avatar
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="faded">
          <DropdownItem key="team_settings">
            {/* Card with about me content */}
            <section className="p-6 bg-white rounded-lg shadow-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-sm text-gray-700 mb-4">
                ¡Hola! 👋 Soy Ariel Aparicio Alomá, un programador especializado en desarrollo web, aplicaciones móviles, IA, Power Platform y bases de datos.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Ayudo a empresas y emprendedores a convertir ideas en proyectos exitosos, ofreciendo soluciones robustas, escalables y optimizadas.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Mi enfoque:
                <ul className="list-inside list-disc text-left text-gray-700">
                  <li>🔍 Calidad y eficiencia: Resultados que cumplen tus necesidades específicas.</li>
                  <li>🤝 Comunicación clara: Trabajo alineado con tus expectativas en cada etapa.</li>
                  <li>🚀 Innovación y adaptabilidad: Uso de las últimas tecnologías para garantizar excelencia.</li>
                </ul>
              </p>
              <p className="text-sm text-gray-700 mb-4">
                📩 Contáctame y descubramos cómo puedo aportar valor a tu proyecto.
              </p>

              <div className="mt-4">
                <a
                  className="font-semibold text-gray-700 hover:text-primary"
                  href="mailto:arielaparicio100@gmail.com"
                >
                  Email: arielaparicio100@gmail.com
                </a>
                <br />
                <a
                  className="font-semibold text-gray-700 hover:text-primary"
                  href="tel:+34669808637"
                >
                  Tel: +34 669 808 637
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/arielaparicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-700 hover:text-primary"
                >
                  Linkedin: Ariel Aparicio Aloma
                </a>
                <br />
                <a
                  href="https://github.com/Arielparicio28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-700 hover:text-primary"
                >
                  Github: Arielparicio28
                </a>
              </div>
            </section>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Mostrar "About Me" al pasar el mouse */}
      {isHovering && (
        <div className="absolute right-10 transform -translate-x-1/2 bg-background text-primary text-sm p-2">
          <p className="text-center">Click Me!</p>
        </div>
      )}
    </div>
  );
}
