import React from 'react';
import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => onLeaveFeedback('good')} className={styles.button}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={styles.button}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={styles.button}>
        Bad
      </button>

      {/* Conditionally render the Reset button only if there's feedback */}
      {totalFeedback > 0 && (
        <button onClick={() => onLeaveFeedback('reset')} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
