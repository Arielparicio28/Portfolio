// ProjectButton.tsx
import React from 'react';
import { ProjectButtonProps } from '../interfaces/ProjectButton';

const Button: React.FC<ProjectButtonProps> = ({ url }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-background text-white rounded hover:text-black hover:bg-primary"
      onClick={() => window.open(url, "_blank")}
    >
      <span className="inline-block animate-typewriter overflow-hidden whitespace-nowrap">
        Visit →
      </span>
    </button>
  );
};

export default Button;
