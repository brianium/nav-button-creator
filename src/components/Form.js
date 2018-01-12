import React, { Component } from 'react';
import SizeSelector from './form/SizeSelector';
import PositionSelector from './form/PositionSelector';

export default class Form extends Component {
  render() {
    const { type, update, address, text, actionText, size, position, closeText, alt } = this.props;
    return (
      <form>
        <div className="form-group text-left">
          <label htmlFor="navAddress">Nav Address: </label>
          <input
            id="navAddress"
            type="text"
            onChange={(e) => { update('address', e.currentTarget.value) }}
            className="form-control-lg form-control"
            placeholder="Nav address - i.e NhN5m1uE1QwySphDJVN4nc6WhiAB6TFjxt"
            value={address}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="btnText">Button Text: </label>
          <input
            id="btnText"
            type="text"
            onChange={(e) => { update('text', e.currentTarget.value) }}
            className="form-control-lg form-control"
            placeholder="Tip with Nav"
            value={text}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="hoverText">Hover Text: <small className="text-muted">(cannot exceed text length)</small> </label>
          <input
            id="hoverText"
            type="text"
            maxLength={text.length}
            onChange={(e) => { update('actionText', e.currentTarget.value) }}
            className="form-control-lg form-control"
            placeholder="Copy Address"
            value={actionText}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="clostText">Clost Text: <small className="text-muted">(QR buttons only)</small> </label>
          <input
            id="closeText"
            type="text"
            maxLength={text.length}
            onChange={(e) => { update('closeText', e.currentTarget.value) }}
            className="form-control-lg form-control"
            placeholder="Thanks! Got it"
            value={closeText}
          />
        </div>
        <SizeSelector size={size} update={update} />
        <PositionSelector position={position} update={update} />
        <div className="form-group text-left">
          <label htmlFor="alt">
            <span className="mr-3">Use alternative blue button:</span>
            <input
              type="checkbox"
              id="alt"
              checked={alt}
              onChange={(e) => update('alt', e.currentTarget.checked)}
            />
          </label>
        </div>
        <div className="form-group text-left">
          <label htmlFor="type">
            <span className="mr-3">Include QR code:</span>
            <input
              type="checkbox"
              id="type"
              checked={type === 'qr'}
              onChange={(e) => update('type', e.currentTarget.checked ? 'qr' : 'copy')}
            />
          </label>
        </div>
      </form>
    );
  }
}
