import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function Ariel() {
  const [audio] = useState(new Audio("sound.mp3")); // Make sure you have a sound file in your project
  const [isHovering, setIsHovering] = useState(false);

  // Function to handle mouse enter
  const handleMouseEnter = () => {
    audio.play(); // Play sound
    setIsHovering(true); // Display the "About Me" text
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false); // Hide the "About Me" text
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
            onMouseEnter={handleMouseEnter} // Add hover effect
            onMouseLeave={handleMouseLeave} // For when the mouse leaves the avatar
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="faded">
          <DropdownItem key="team_settings">
            {/* Card with about me content */}
            <section className="p-6 bg-white rounded-lg shadow-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-sm text-gray-700 mb-4">
                Hello! 👋 I am Ariel Aparicio Alomá, a programmer specialized in web development, mobile applications, AI, Power Platform, and databases.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                I help companies and entrepreneurs turn ideas into successful projects, offering robust, scalable, and optimized solutions.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                My approach:
                <ul className="list-inside list-disc text-left text-gray-700">
                  <li>🔍 Quality and efficiency: Results that meet your specific needs.</li>
                  <li>🤝 Clear communication: Work aligned with your expectations at every stage.</li>
                  <li>🚀 Innovation and adaptability: Using the latest technologies to ensure excellence.</li>
                </ul>
              </p>
              <p className="text-sm text-gray-700 mb-4">
                📩 Contact me and let's discover how I can add value to your project.
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
                  Linkedin: Ariel Aparicio Alomá
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

      {/* Display "About Me" on mouse hover */}
      {isHovering && (
        <div className="absolute right-10 transform -translate-x-1/2 bg-background text-primary text-sm p-2">
          <p className="text-center">Click Me!</p>
        </div>
      )}
    </div>
  );
}
