import React from 'react';
import { kebabCase } from "lodash";
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Icon from '../components/Icon';

const elements = storiesOf('Icon', module);

elements.addDecorator(withKnobs);

elements.add('All', () => {
  const iconNameList = [];
  const icons = require.context('../components/svgComponents', true, /\.js/);
  icons.keys().forEach(filename => {
    // filename is like './smthSmth.js'
    const cleanFileName = filename.split('').slice(2, -3).join('');   //cleanFileName = smthSmth
        iconNameList.push(kebabCase(cleanFileName));  //name = 'smth-smth'
  });

  return (
    <div>
      {iconNameList.map((name) => <div><Icon type={name}/> - {name}</div>)}
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
