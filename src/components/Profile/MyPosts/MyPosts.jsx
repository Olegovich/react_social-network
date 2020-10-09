import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {
            id: 0,
            message: "Hi!",
            likesCount: 1
        },
        {
            id: 1,
            message: "Hello!",
            likesCount: 5
        }
    ];

    let postsElements = postsData.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);


    return (
        <section className={s.posts}>
            <p className={s.postsTitle}>My posts</p>

            <form className={s.postsForm} action="/">
                <textarea className={s.postsFormTextarea} name="message" placeholder="Your-message"></textarea>

                <input className={s.postsFormSubmit} type="submit" value="Send"/>
            </form>

            <div className={s.postsList}>
                {postsElements}
            </div>
        </section>
    );
};

export default MyPosts;
