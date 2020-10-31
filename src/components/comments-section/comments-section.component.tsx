import React, { useState, useContext } from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import "./comments-section.styles.scss";

interface CommentsSectionProps {
  cardId: string;
  columnId: string;
  comments: { name: string; text: string; id: string }[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  cardId,
  columnId,
  comments,
}) => {
  const [inputNewComment, setInputNewComment] = useState("");
  const methods = useContext(MethodsContext);

  const addComment = () => {
    if (inputNewComment) {
      methods?.addNewComment(columnId, cardId, inputNewComment);
      setInputNewComment("");
    }
  };

  const commentHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputNewComment(e.target.value);
  };

  return (
    <Modal.Footer className="card-options__footer">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Напишите комментарий..."
          aria-label="Напишите комментарий..."
          aria-describedby="basic-addon2"
          onChange={commentHandleChange}
          value={inputNewComment}
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={addComment}>
            Сохранить
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ul className="comments-list">
        {comments.map((item) => {
          return (
            <li key={item.id} className="comments-item">
              <div className="comments-body">
                <h5>{item.name}</h5>
                <p>{item.text}</p>
              </div>

              <div className="header__icons">
                <PencilFill className="icon-edit" size={17} />
                <TrashFill className="icon-delete" size={17} />
              </div>
            </li>
          );
        })}
      </ul>
    </Modal.Footer>
  );
};

export default CommentsSection;
