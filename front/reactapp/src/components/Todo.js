import axios from 'axios';
import { apiURL } from '../config';
import { useState } from 'react';
import PublishButton from './PublishButton.jsx';

export const fetch = () => {
  return axios
    .get(`${apiURL}/issues`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    setIsPublished(true);
  };
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article;
