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
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Notificación</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onRequestClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
