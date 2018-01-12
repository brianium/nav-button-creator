import React from 'react';
import { NavButton, NavQrButton } from 'nav-button/dist/nav-button-react';

const Preview = (props) => {
  const { type, actionText } = props;
  if (type === 'qr') {
    return <NavQrButton {...props} actionTitle={actionText} className="mx-auto" />;
  }
  return <NavButton {...props} actionTitle={actionText} className="mx-auto" />;
};

export default Preview;
