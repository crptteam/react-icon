import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withTheme } from "styled-components";

import { getIconsAsObject } from './lib';

import Wrapper from "../styled/Wrapper";


class Icon extends Component {
  static get svgIconsAsComponents () {
    return {...getIconsAsObject()};
  };

  constructor(props) {
    super(props);
    this.displayName = "Icon";
    this.iconList = {...getIconsAsObject()};
  }

  render() {
    const {
      onClick,
      type,
      disabled,
      spacingLeft,
      spacingRight,
      size,
      withoutMask,
      ...otherProps
    } = this.props;

    if (!type || !type.length) return null;
    const Icon = this.iconList[type];
    if (!Icon) {
      console.log('ICON. Error. Couldn\'t find icon type = ', type);
      return null;
    }

    const StyledIcon = styled(Icon)`
      * { mask: none; }
    `;

    const IconComponent = withoutMask ? StyledIcon : Icon;

    return (
      <Wrapper
        onClick={onClick}
        spacingLeft={spacingLeft}
        spacingRight={spacingRight}
        disabled={disabled}
      >
        <IconComponent
          {...(size ? { width: `${size}px`, height: `${size}px` } : null) }
          {...otherProps}
        />

      </Wrapper>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  spacingLeft: PropTypes.number,
  spacingRight: PropTypes.number
};

Icon.defaultProps = {
  type: ""
};

export default withTheme(Icon);
