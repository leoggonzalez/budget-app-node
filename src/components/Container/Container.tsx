import "./Container.css";
import classnames from "classnames";
import { GlobalProps } from "../../model/common";

export function Container({
  style,
  children,
  className,
}: GlobalProps): JSX.Element {
  return (
    <div className={classnames("container", className)} style={style}>
      {children}
    </div>
  );
}
