import React, { useState } from "react";

import { Modal, Button, FormControl } from "react-bootstrap";

interface modalProps {
  show: boolean;
  onHide: () => void;
  setUserName: (value: string) => void;
}

const NameModal: React.FC<modalProps> = ({ show, onHide, setUserName }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (): void => {
    if (inputValue) {
      onHide();
      setUserName(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Как вас зовут?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Ваше имя..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit} variant="success">
          Принять
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NameModal;
