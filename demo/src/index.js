import React, {Component} from 'react'
import { kebabCase } from 'lodash';
import {render} from 'react-dom'

import Icon from '../../src/index';


class Demo extends Component {
  render() {
    const RandomIcon = Icon.svgIconsAsComponents['emitted'];

    const iconNameList = [];
    const icons = require.context('../../src/components/svgComponents', true, /\.js/);
    icons.keys().forEach(filename => {
      /* filename is like './smthSmth.js' */
      const cleanFileName =
        filename
          .split('')
          .slice(2, -3)
          .join('');   //cleanFileName = smthSmth
      iconNameList.push(kebabCase(cleanFileName));  //name = 'smth-smth'
    });

    return (
      <div>
        <h1>RandomIcon</h1>
        <RandomIcon width={16} height={16} />
        <h1>react-icon Demo</h1>
        {iconNameList.map(type => (
          <div key={type}>
            <Icon type={type} fill="#333333" withoutMask />
            {" - "}{type}
          </div>
        ))}
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
