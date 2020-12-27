import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { children, className, isLoading, ...rest } = this.props;
    return (
      <button className={classNames(styles.button, className)} {...rest}>
        {isLoading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        ) : null}
        {children}
      </button>
    );
  }
}

export default Button;
