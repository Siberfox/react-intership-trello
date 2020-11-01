import React, { useState, useContext } from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { MethodsContext } from "../../App";

import Comment from "../comment/comment";

import "./comments-section.styles.scss";

interface CommentsSectionProps {
  username: string;
  cardId: number;
  comments: {
    id: number;
    cardId: number;
    name: string;
    text: string;
  }[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  cardId,
  username,
  comments,
}) => {
  const [newComment, setNewComment] = useState("");
  const methods = useContext(MethodsContext);

  const addComment = () => {
    if (newComment) {
      methods?.addNewComment(cardId, newComment);
      setNewComment("");
    }
  };

  const commentHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewComment(e.target.value);
  };

  return (
    <Modal.Footer className="card-options__footer">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Напишите новый комментарий..."
          aria-label="Напишите комментарий..."
          aria-describedby="basic-addon2"
          onChange={commentHandleChange}
          value={newComment}
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={addComment}>
            Сохранить
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ul className="comments-list">
        {comments
          .filter((item) => item.cardId === cardId)
          .map((item) => {
            return (
              <Comment
                key={item.id}
                name={item.name}
                text={item.text}
                commentId={item.id}
                username={username}
              />
            );
          })}
      </ul>
    </Modal.Footer>
  );
};

export default CommentsSection;
