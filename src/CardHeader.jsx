import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'div'
};

const CardHeader = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'card-header'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardHeader.PropTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
