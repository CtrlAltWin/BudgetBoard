const Modal = ({ Children, hideTransactionForm, onSave }) => {
  const handleOnClose = () => {
    hideTransactionForm();
    setDroppedUrl("");
  };
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-80 border border-white" />
      <div className="relative bg-white px-6 py-8 sm:rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={handleOnClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <Children hideTransactionForm={hideTransactionForm} onSave={onSave} />
      </div>
    </div>
  );
};
export default Modal;
