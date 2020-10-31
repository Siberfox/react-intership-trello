import React, { useState, useContext } from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { MethodsContext } from "../../App";

import CommentItem from "../comment-item/comment-item.component";

import "./comments-section.styles.scss";

interface CommentsSectionProps {
  username: string;
  cardId: string;
  columnId: string;
  comments: { name: string; text: string; id: string }[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  cardId,
  columnId,
  comments,
  username,
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
          placeholder="Напишите новый комментарий..."
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
            <CommentItem
              key={item.id}
              name={item.name}
              text={item.text}
              cardId={cardId}
              columnId={columnId}
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
