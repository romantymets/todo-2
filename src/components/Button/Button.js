import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { children, className, todoLoading, ...rest } = this.props;
    return (
      <button className={classNames(styles.button, className)} {...rest}>
        {todoLoading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
              {" "}
            </span>
          </button>
        ) : null}
        {children}
      </button>
    );
  }
}

export default Button;
