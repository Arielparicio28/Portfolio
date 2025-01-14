import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function Ariel() {
  return (
    <div className="flex items-center gap-3">
      <Dropdown placement="bottom-end" backdrop="blur">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="/Kanban.jpg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="faded">
          <DropdownItem key="team_settings" className="">
          
            <p className="p-10">
            <h3 className="font-semibold">About me</h3>
              ¡Hola! 👋 Soy Ariel Aparicio Alomá,<br /> programador especializado en
              desarrollo web, aplicaciones móviles,<br /> inteligencia artificial,
              Power Platform y bases de datos.<br /> Ayudo a empresas y emprendedores
              a convertir ideas en proyectos exitosos,<br /> ofreciendo soluciones
              robustas, escalables y optimizadas.<br /> Mi enfoque: 🔍 Calidad y
              eficiencia:<br /> Resultados que cumplen tus necesidades específicas.<br /> 🤝
              Comunicación clara: Trabajo alineado con tus expectativas en cada
              etapa. <br />🚀 Innovación y adaptabilidad: Uso de las últimas
              tecnologías para garantizar excelencia.<br /> 📩 Contáctame y
              descubramos cómo puedo aportar valor a tu proyecto.
              <br />
              <br />
              <a
              className="font-semibold"
              href="mailto:arielaparicio100@gmail.com"
            >
             Email: arielaparicio100@gmail.com
            </a>
            <br />
            <a
              className="font-semibold"
            
            >
             Tel: +34 669 808 637
            </a>
<br />
            <a href="https://www.linkedin.com/in/arielaparicio" target="_blank" rel="noopener noreferrer" className="font-semibold">
            Linkedin: Ariel Aparicio Aloma</a>

            <br />
            <a href="https://github.com/Arielparicio28" target="_blank" rel="noopener noreferrer" className="font-semibold">
            Github: Arielparicio28</a>

            </p>
          
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
