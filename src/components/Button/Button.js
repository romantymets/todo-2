import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { children, className, isloading, ...rest } = this.props;
    return (
      <button className={classNames(styles.button, className)} {...rest}>
        {isloading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Loading...</span>
          </button>
        ) : null}
        {children}
      </button>
    );
  }
}

export default Button;
