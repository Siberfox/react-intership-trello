import React, { useState, useContext } from "react";

import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./comment-item.styles.scss";

interface CommentItemProps {
  name: string;
  text: string;
  columnId: string;
  cardId: string;
  commentId: string;
  username: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  name,
  text,
  columnId,
  cardId,
  commentId,
  username,
}) => {
  const [inputNewComment, setInputNewComment] = useState("");
  const [editCommentInput, setEditCommentInput] = useState(false);
  const methods = useContext(MethodsContext);

  const editComment = () => {
    if (inputNewComment) {
      methods?.editComment(columnId, cardId, commentId, inputNewComment);
      setInputNewComment("");
    }
    setEditCommentInput(false);
  };

  const commentHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputNewComment(e.target.value);
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
            value={inputNewComment}
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
                  ? methods?.deleteComment(columnId, cardId, commentId)
                  : alert("Вы не можете удалять чужие сообщения")
              }
            />
          </div>
        </li>
      )}
    </>
  );
};

export default CommentItem;
