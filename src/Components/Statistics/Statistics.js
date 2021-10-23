import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.container}>
      {total <= 0 ? (
        <p className={s.total_item}>No feedback given</p>
      ) : (
        <>
          <p className={s.item}>{`Good: ${good}`}</p>
          <p className={s.item}>{`Neutral: ${neutral}`}</p>
          <p className={s.item}>{`Bad: ${bad}`}</p>
          <p className={s.total_item}>{`Total: ${total}`}</p>
          <p className={s.total_item}>
            {`Positive feedback: ${!good ? 0 : positivePercentage} %`}
          </p>
        </>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
