import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.scss";
const CustomModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({}); // Aquí puedes guardar los datos del formulario

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
    closeModal();
  };

  return (
    <Modal
      className="Modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Formulario Modal"
    >
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="h2">New task</h2>
        <label className="label" htmlFor="title">
          Title{" "}
        </label>
        <input
          className="input"
          type="text"
          id="title"
          name="title"
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="Description">
          Description
        </label>
        <textarea
          className="description"
          type="text"
          id="description"
          name="description"
          onChange={handleInputChange}
        />
        <select className="select">
          <option value="Unstarted">Unstarted</option>
          <option value="Started">Started</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="btn-box">
          <button className="btn" type="submit">
            Enviar
          </button>
          <button className="btn" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CustomModal;
