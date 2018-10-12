import { kebabCase } from 'lodash';


export const getIconsAsObject = () => {
  const iconsObject = {};
  const iconsMap = require.context('./svgComponents', true, /\.js/);
  iconsMap.keys().forEach(filename => {
    /* filename is like './smthSmth.js' */
    const cleanFileName =
      filename
        .split('')
        .slice(2, -3)
        .join('');   //cleanFileName = smthSmth
    const propName = kebabCase(cleanFileName);  //propName = 'smth-smth'
    iconsObject[propName] = iconsMap(filename).default;
  });

  return iconsObject;
};
