import React, { useState, useContext } from 'react';

import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';
import { StoreContext } from '../../store-context';

import Comment from '../comment/comment';

import './comments-section.styles.scss';

interface CommentsSectionProps {
  username: string;
  cardId: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  cardId,
  username,
}) => {
  const [newComment, setNewComment] = useState('');
  const store = useContext(StoreContext);
  const cardComments = store?.comments?.filter(
    (item) => item.cardId === cardId,
  );

  const addComment = () => {
    if (newComment) {
      store?.addNewComment(cardId, newComment);
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
          <Button variant="outline-success" onClick={addComment}>
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
              username={username}
            />
          );
        })}
      </ul>
    </Modal.Footer>
  );
};

export default CommentsSection;
