import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({ children, variant, size, as, ...props }) {
  return createElement(
    as,
    {
      ...props,
      className: classNames("h-10 flex items-center justify-center rounded", {
        " bg-primary text-white font-medium": variant === "primary",
        "px-5": size === "normal",
      }),
    },
    children
  );
}

Button.propTypes = {
  props: PropTypes.object,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.oneOf(["primary", "light"]),
  size: PropTypes.oneOf(["normal", "small", "large"]),
};

Button.defaultProps = {
  as: "button",
  variant: "primary",
  size: "normal",
};
