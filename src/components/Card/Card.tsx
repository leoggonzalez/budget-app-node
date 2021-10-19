import "./Card.css";
import classnames from "classnames";
import { GlobalProps } from "./../../model/common";

interface Props extends GlobalProps {
  title?: string;
  footer?: React.ReactNode;
}

export function Card({
  title,
  children,
  footer,
  className,
  style,
}: Props): JSX.Element {
  return (
    <div className={classnames("card", className)} style={style}>
      {title && (
        <header className="card__header">
          <h3 className="card__title">{title}</h3>
        </header>
      )}
      <div className="card__body">{children}</div>
      <footer className="card__footer">{footer}</footer>
    </div>
  );
}
