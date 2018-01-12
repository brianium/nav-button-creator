import React from 'react';
import './Selector.css';

function className(check, position) {
  const classes = ['btn', 'btn-secondary'];
  if (check === position) {
    classes.push('btn--active');
  }
  return classes.join(' ');
}

const PositionSelector = ({ position, update }) => (
  <div className="form-group text-left">
    <label className="mr-3">QR Position: </label>
    <div className="btn-group" role="group">
      <button type="button" onClick={() => update('position', 'bottom')} className={className('bottom', position)}>Bottom</button>
      <button type="button" onClick={() => update('position', 'right')} className={className('right', position)}>Right</button>
    </div>
  </div>
);

export default PositionSelector;
