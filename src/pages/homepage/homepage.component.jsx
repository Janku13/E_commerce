import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

export default function HomePage() {
  console.log(process.env.REACT_APP_NODE_ENV);

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
