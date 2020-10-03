import React from 'react';
import s from './Profile.module.css';
import ContentBgTop from '../../img/content-bg-top.jpg';
import Avatar from '../../img/avatar-img.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main>
      <section className={s.heading}>
        <img src={ContentBgTop} alt=""/>
      </section>

      <section className={s.author}>
        <div className={s.authorImgWrap}>
          <img src={Avatar} alt=""/>
        </div>

        <div className={s.authorInfo}>
          <p className={s.authorInfoTitle}>Test user</p>

          <div className={s.authorInfoText}>
            <p>Date of birth: 12 June</p>
            <p>City: Minsk</p>
            <p>Education: MIE'13</p>
          </div>
        </div>
      </section>

      <MyPosts />
    </main>
  );
};

export default Profile;