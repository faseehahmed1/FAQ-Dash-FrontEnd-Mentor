import classes from "./App.module.css";
import ladyImg from "../../assets/images/illustration-woman-online-desktop.svg";
import ladyImgMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import box from "../../assets/images/illustration-box-desktop.svg";
import dropDownIcon from "../../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import clsx from "clsx";
import faqArray from "../../assets/FAQ";

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={classes.main_container}>
      <div className={classes.art_container}>
        <picture>
          <source media="(max-width: 1190px)" srcSet={ladyImgMobile} />
          <img className={classes.lady_img} src={ladyImg} />
        </picture>
      </div>
      <div className={classes.faq_contatiner}>
        <h1 className={classes.heading}>FAQ</h1>
        {faqArray.map((faq, index) => {
          const isCurrentActive = activeIndex === index;

          const questionClass = clsx({
            [classes.active]: isCurrentActive,
          });

          const imgClass = clsx({
            [classes.default]: !isCurrentActive,
            [classes.rotate]: isCurrentActive,
          });

          const answerClass = clsx([classes.answer], {
            [classes.answer_active]: isCurrentActive,
            [classes.answer_hidden]: !isCurrentActive,
          });
          return (
            <>
              <button
                key={index}
                onClick={() =>
                  setActiveIndex((prevIndex) =>
                    prevIndex === index ? -1 : index
                  )
                }
              >
                <div className={classes.question_container}>
                  <p className={questionClass}>{faq.question}</p>
                  <img
                    src={dropDownIcon}
                    alt="drop down icon"
                    className={imgClass}
                  />
                </div>
              </button>
              <p className={answerClass}>{faq.answer}</p>
            </>
          );
        })}
      </div>
      <img className={classes.box_img} src={box} />
    </div>
  );
}

export default App;
