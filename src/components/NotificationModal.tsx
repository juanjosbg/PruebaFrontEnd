import React from 'react';

interface NotificationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  message: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onRequestClose,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-80 relative">
        <button
          type="button"
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none py-2 px-2"
        >
          <span className="sr-only">Cerrar</span>
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-2 uppercase">Notificación</h2>
        <p className="mb-4">{message}</p>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-full px-10 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto bg-sky-500 hover:bg-sky-700 text-white uppercase"
          onClick={onRequestClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
