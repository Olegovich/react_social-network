import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};


const MessagesItem = props => {
    return <div className={s.message}>{props.message}</div>;
};


const Dialogs = () => {
    let dialogsData = [
        {
            id: 0,
            name: "Oleg"
        },
        {
            id: 1,
            name: "Pasha"
        },
        {
            id: 2,
            name: "Anton"
        }
    ];

    let messagesData = [
        {
            id: 0,
            message: "Hi!"
        },
        {
            id: 1,
            message: "Hello!"
        },
        {
            id: 2,
            message: "Yo!"
        },
    ];


    let dialogsElements = dialogsData.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData.map((message) => <MessagesItem key={message.id} message={message.message} />);


    return (
        <main className={s.dialogs}>
            <section className={s.dialogsItems}>
                {dialogsElements}
            </section>

            <section className={s.messages}>
                {messagesElements}
            </section>
        </main>
    );
};

export default Dialogs;
