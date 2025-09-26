import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css';

function ProgressCircle({ percentage }) {
  return (
    <div className="progress-container">
      <span className="status-text">Tarefas Concluídas:</span>
      <div className="progress-circle">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#cfc6ff',
            pathColor: '#a88ae1',
            trailColor: '#2e2a36',
          })}
        />
      </div>
    </div>
  );
}

export default ProgressCircle;
