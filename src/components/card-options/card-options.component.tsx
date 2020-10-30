import React from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";

import "./card-options.styles.scss";

interface CardOptionsProps {
  name: string;
  description: string;
  comments: { name: string; text: string; id: string }[];
  show: boolean;
  onHide: () => void;
}

const CardOptions: React.FC<CardOptionsProps> = ({
  name,
  show,
  onHide,
  description,
  comments,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-options__body">
          <h3>Описание</h3>
          {description ? (
            <p>{description}</p>
          ) : (
            <InputGroup className="mb-3">
              <FormControl
                id="basic-url"
                placeholder="Добавить описание..."
                aria-label="Добавить описание..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-success">Сохранить</Button>
              </InputGroup.Append>
            </InputGroup>
          )}
        </Modal.Body>
        <Modal.Footer className="card-options__footer">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Напишите комментарий..."
              aria-label="Напишите комментарий..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-success">Сохранить</Button>
            </InputGroup.Append>
          </InputGroup>
          <ul className="comments-list">
            {comments.map((item) => {
              return (
                <li key={item.id}>
                  <h5>{item.name}</h5>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardOptions;
