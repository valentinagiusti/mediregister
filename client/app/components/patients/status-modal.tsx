import { StatusModalProps } from '@/app/types';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';



const StatusModal: FC<StatusModalProps> = ({ isOpen, onClose, message, type }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className={`text-xl font-semibold mb-4 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {type === 'success' ? 'Success' : 'Error'}
          </h2>
          <p className="mb-4">{message}</p>
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default StatusModal;
