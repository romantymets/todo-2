import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <button className={classNames(styles.button, className)} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;
