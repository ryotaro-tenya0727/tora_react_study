import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Chat = (props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt='icon' src='' />
      </ListItemAvatar>
      <div className='p-chat__bubble'>{props.text}</div>
    </ListItem>
  );
};

export default Chat;
