import React from 'react';
import './Selector.css';

function className(check, size) {
  const classes = ['btn', 'btn-secondary'];
  if (check === size) {
    classes.push('btn--active');
  }
  return classes.join(' ');
}

const SizeSelector = ({ size, update }) => (
  <div className="form-group text-left">
    <label className="mr-3">Button Size: </label>
    <div className="btn-group" role="group">
      <button type="button" onClick={() => update('size', 'lg')} className={className('lg', size)}>Large</button>
      <button type="button" onClick={() => update('size', 'md')} className={className('md', size)}>Medium</button>
      <button type="button" onClick={() => update('size', 'sm')} className={className('sm', size)}>Small</button>
    </div>
  </div>
);

export default SizeSelector;
