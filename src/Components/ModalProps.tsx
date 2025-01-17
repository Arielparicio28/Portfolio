import { ModalInterface } from "../interfaces/modalInterface";

  
  const Modal: React.FC<ModalInterface> = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen || !videoSrc) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            className="max-w-full max-h-full"
            src={videoSrc}
            controls
            autoPlay
          />
          <button
            className="absolute top-4 right-4 bg-stone-200 !text-primary p-2 rounded-full shadow-lg"
            onClick={onClose}
          >
             ✖
          
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  