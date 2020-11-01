import React, { useState, useContext } from "react";

import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./comment.styles.scss";

interface CommentProps {
  name: string;
  text: string;
  commentId: number;
  username: string;
}

const Comment: React.FC<CommentProps> = ({
  name,
  text,
  commentId,
  username,
}) => {
  const [newComment, setNewComment] = useState("");
  const [editCommentInput, setEditCommentInput] = useState(false);
  const methods = useContext(MethodsContext);

  const editComment = () => {
    if (newComment) {
      methods?.editComment(commentId, newComment);
      setNewComment("");
    }
    setEditCommentInput(false);
  };

  const commentHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewComment(e.target.value);
  };

  return (
    <>
      {editCommentInput ? (
        <InputGroup className="mb-3">
          <FormControl
            id="basic-url"
            placeholder="Изменить комментарий..."
            aria-label="Изменить комментарий..."
            aria-describedby="basic-addon2"
            value={newComment}
            onChange={commentHandleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-success" onClick={editComment}>
              Сохранить
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ) : (
        <li className="comments-item">
          <div className="comments-body">
            <h5>{name}</h5>
            <p>{text}</p>
          </div>

          <div className="header__icons">
            <PencilFill
              className="icon-edit"
              size={17}
              onClick={() => {
                username === name
                  ? setEditCommentInput(true)
                  : alert("Вы не можете изменять чужие сообщения");
              }}
            />
            <TrashFill
              className="icon-delete"
              size={17}
              onClick={() =>
                username === name
                  ? methods?.deleteComment(commentId)
                  : alert("Вы не можете удалять чужие сообщения")
              }
            />
          </div>
        </li>
      )}
    </>
  );
};

export default Comment;
