import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';

import { RootState } from '../../redux/root-reducer';
import { useAppDispatch } from '../../redux/store';
import { addComment } from '../../redux/comments/comments.actions';

import Comment from '../comment/comment';

import './comments-section.styles.scss';

interface CommentsSectionProps {
  cardId: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  cardId,
}) => {
  const dispatch = useAppDispatch();
  const [newComment, setNewComment] = useState('');
  const cardComments = useSelector((state:RootState) => state?.comments?.filter(
    (item) => item.cardId === cardId,
  ));
  const username = useSelector((state:RootState) =>
    state.user.currentUser,
  );

  const onAddComment = () => {
    if (newComment) {
      dispatch(addComment([cardId, newComment, username]));
      setNewComment('');
    }
  };

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewComment(e.target.value);
  };

  return (
    <Modal.Footer className="card-options__footer">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Напишите новый комментарий..."
          aria-label="Напишите комментарий..."
          aria-describedby="basic-addon2"
          onChange={onCommentChange}
          value={newComment}
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={onAddComment}>
            Сохранить
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ul className="comments-list">
        {cardComments?.map((item) => {
          return (
            <Comment
              key={item.id}
              name={item.name}
              text={item.text}
              commentId={item.id}
            />
          );
        })}
      </ul>
    </Modal.Footer>
  );
};

export default CommentsSection;