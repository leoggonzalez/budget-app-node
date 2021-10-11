import "./Button.css";
import classnames from "classnames";
import { GlobalProps } from "../../model/common";

interface Props extends GlobalProps {
  icon?: boolean;
  onClick?: () => void;
}

export function Button({
  style,
  children,
  className,
  icon,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className={classnames("button", { "button--icon": icon }, className)}
      style={style}
      onClick={onClick}
    >
      {icon ? "+" : children}
    </button>
  );
}
