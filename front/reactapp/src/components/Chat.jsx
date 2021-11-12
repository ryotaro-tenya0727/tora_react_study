import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import Face from '../assets/img/face.jpg';
import mikotan from '../assets/img/mikotan.jpeg';

const Chat = (props) => {
  const isQuestion = props.type === 'question';
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt='icon' src={mikotan} />
        ) : (
          <Avatar alt='icon' src={Face} />
        )}
      </ListItemAvatar>
      <div className='p-chat__bubble'>{props.text}</div>
    </ListItem>
  );
};

export default Chat;
