import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";

import styles from "./EntryForm.module.css";

let errorMsg;

function EntryForm(props) {
  const nameInput = useRef();
  const ageInput = useRef();
  const [flag, setFlag] = useState(false);

  function onClickHandler(evt) {
    evt.preventDefault();
    const userName = nameInput.current.value;
    const userAge = ageInput.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      errorMsg = "Any of the name or age cant be empty";
      setFlag((prev) => !prev);
    }
    else if (Number(userAge) < 1) {
      errorMsg = "Age must be more than 1";
      setFlag((prev) => !prev);
    }
    else{
      let person = {};
      person.name = userName;
      person.age = Number(userAge);
      props.onClick(person);
      nameInput.current.value = "";
      ageInput.current.value = "";
    }
  }

  function onClickHandlerBtn(){
    setFlag((prev) => !prev);
  }

  return (
    <>
      {!flag || <ErrorModal Msg={errorMsg} onClick={onClickHandlerBtn}/>}
      <form className={styles.form} onSubmit={onClickHandler}>
        <div className={styles.input}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            className={styles.input1}
            ref={nameInput}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="age" className={styles.label}>
            Age(years):
          </label>
          <input
            type="number"
            id="age"
            className={styles.input2}
            ref={ageInput}
          />
        </div>
        <div className={styles.input}>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default EntryForm;
