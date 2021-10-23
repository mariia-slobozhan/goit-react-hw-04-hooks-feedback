import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map((option) => (
        <button
          className={s.button}
          type="button"
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
