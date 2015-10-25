import React from 'react';

const Header = (props) => (
  <div>
    <ul>
      {props.items.map((item, i) => (
        <li onClick={props.click.bind(this, item)}>{item}</li>
      ))}
    </ul>
  </div>
);

export {Header};
