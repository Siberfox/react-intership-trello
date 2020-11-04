import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

import { useAppDispatch } from '../../redux/store';
import { editComment, deleteComment } from '../../redux/slices/commentsSlice';
import { userSelector } from '../../redux/slices/userSlice';

import './comment.styles.scss';

interface CommentProps {
  name: string;
  text: string;
  commentId: number;
}

const Comment: React.FC<CommentProps> = ({ name, text, commentId }) => {
  const dispatch = useAppDispatch();
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { username } = useSelector(userSelector);

  const onEditComment = () => {
    if (newComment) {
      dispatch(editComment([commentId, newComment]));
      setNewComment('');
    }
    setIsEditing(false);
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewComment(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <InputGroup className="mb-3">
          <FormControl
            id="basic-url"
            placeholder="Изменить комментарий..."
            aria-label="Изменить комментарий..."
            aria-describedby="basic-addon2"
            value={newComment}
            onChange={onCommentChange}
          />
          <InputGroup.Append>
            <Button variant="outline-success" onClick={onEditComment}>
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
                  ? setIsEditing(true)
                  : alert('Вы не можете изменять чужие сообщения');
              }}
            />
            <TrashFill
              className="icon-delete"
              size={17}
              onClick={() =>
                username === name
                  ? dispatch(deleteComment(commentId))
                  : alert('Вы не можете удалять чужие сообщения')}
            />
          </div>
        </li>
      )}
    </>
  );
};

export default Comment;
