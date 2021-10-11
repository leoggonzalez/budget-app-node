import "./Dialog.css";
import { GlobalProps } from "../../model/common";
import classnames from "classnames";

interface Props extends GlobalProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
}

export function Dialog({ children, open, title, onClose }: Props): JSX.Element {
  return (
    <div
      className={classnames("dialog__wrapper", {
        "dialog__wrapper--open": open,
      })}
    >
      <div className="dialog__background" onClick={onClose} />
      <dialog open={open} className="dialog">
        <header className="dialog__header">
          {title && <h3>{title}</h3>}
          <button className="dialog__close" onClick={onClose}>
            X
          </button>
        </header>
        <div className="dialog__content">{children}</div>
      </dialog>
    </div>
  );
}
