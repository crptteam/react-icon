import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Icon from '../components/Icon';
import { getIconsAsObject } from "../components/lib";

const elements = storiesOf('Icon', module);

elements.addDecorator(withKnobs);

elements.add('All', () => {
  const icons = Object.keys(getIconsAsObject());

  return (
    <div>
      {icons.map((name, value) => <div><Icon type={name} fill="black"/> - {name}</div>)}
    </div>
  );
});

elements.add('Icon with size', () => {
  const size = number('size', 16);
  return <Icon spacingRight={16} type='add-blank' size={size} />
});

elements.add('Icon with spacing right/left', () => {
  const spacingLeft = number('spacingLeft', 12);
  const spacingRight = number('spacingRight', 12);
  return <Icon type='add-blank' spacingLeft={spacingLeft} spacingRight={spacingRight} />;
});
