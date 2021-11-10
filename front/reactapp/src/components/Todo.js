import axios from 'axios';
import { apiURL } from '../config';

export const fetch = () => {
  return axios
    .get(`${apiURL}/issues`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

export const Article = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};
