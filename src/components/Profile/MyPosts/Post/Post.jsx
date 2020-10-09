import React from "react";
import s from "./Post.module.css";
import Avatar from "../../../../img/avatar-img.png";
import Like from "../../../../img/like.svg";

const Post = props => {
    return (
        <div className={s.item}>
            <div className={s.itemAvatar}>
                <img src={Avatar} alt=""/>
            </div>

            <div className={s.itemText}>
                <div className={s.itemMessage}>{props.message}</div>

                <div className={s.itemLikes}>
                    <div className={s.itemLikesIcon}>
                        <img src={Like} alt=""/>
                    </div>

                    <div className={s.itemLikesCount}>{props.likesCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
