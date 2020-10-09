import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <main className={s.dialogs}>
      <section className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Oleg</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Pasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Anton</NavLink>
        </div>
      </section>


      <section className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>Hello!</div>
        <div className={s.message}>Yo!</div>
      </section>
    </main>
  );
};

export default Dialogs;