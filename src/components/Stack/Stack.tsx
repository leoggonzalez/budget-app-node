import "./Stack.css";
import classnames from "classnames";
import { GlobalProps } from "../../model/common";
import { Size } from "../../model/size";

interface Props extends GlobalProps {
  size?: Size;
}

export function Stack({
  style,
  children,
  className,
  size = "md",
}: Props): JSX.Element {
  return (
    <div
      className={classnames("stack", `stack--${size}`, className)}
      style={style}
    >
      {children}
    </div>
  );
}
