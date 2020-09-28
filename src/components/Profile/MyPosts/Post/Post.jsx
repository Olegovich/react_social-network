import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>Post {props.count}</div>
  );
};

export default Post;