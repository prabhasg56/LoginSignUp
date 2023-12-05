import React from "react";

const Modal = (props) => {
    if(!props.showModal){
        return null;
    }

    const handleClose = (e) => {
        if(e.target.id === 'wrapper'){
            props.closeModal(false);
        }
    }

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={()=>props.closeModal(false)}> X </button>
          <div className="bg-white p-2 rounded">
            {props.children}
            </div>
        </div>
      </div>
    </>
  );
};

export default Modal;