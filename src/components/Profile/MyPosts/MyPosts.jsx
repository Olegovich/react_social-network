import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <section className={s.posts}>
      <p className={s.postsTitle}>My posts</p>

      <form className={s.postsForm} action="/">
        <textarea className={s.postsFormTextarea} name="message" placeholder="Your-message"></textarea>

        <input className={s.postsFormSubmit} type="submit" value="Send"/>
      </form>

      <div className={s.postsList}>
        <Post count="1"/>
        <Post count="2"/>
        <Post count="3"/>
      </div>
    </section>
  );
};

export default MyPosts;