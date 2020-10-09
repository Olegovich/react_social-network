import React from "react";
import s from "./ProfileInfo.module.css";
import Avatar from "../../../img/avatar-img.png";


const ProfileInfo = () => {
    return (
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
    );
};

export default ProfileInfo;
