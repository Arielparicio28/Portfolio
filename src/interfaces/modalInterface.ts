
export interface ModalInterface {
    isOpen: boolean; // Indica si el modal está abierto
    onClose: () => void; // Función para cerrar el modal
    videoSrc: string | null; // Ruta del video
  }