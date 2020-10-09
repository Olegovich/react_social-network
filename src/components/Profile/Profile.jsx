import React from "react";
import s from "./Profile.module.css";
import ContentBgTop from "../../img/content-bg-top.jpg";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main>
            <section className={s.heading}>
                <img src={ContentBgTop} alt=""/>
            </section>

            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
};

export default Profile;
