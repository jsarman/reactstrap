import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool
};

const contextTypes = {
  toggle: PropTypes.func
};

const defaultProps = {
  tag: 'button'
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  }

  render() {
    const tabIndex = this.getTabIndex();
    let {
      className,
      divider,
      tag: Tag,
      header,
      ...props } = this.props;

    const classes = classNames(
      className,
      {
        'disabled': props.disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }
    );

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      }
    }

    return (
      <Tag {...props}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}/>
    );
  }
}

DropdownItem.PropTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

export default DropdownItem;
