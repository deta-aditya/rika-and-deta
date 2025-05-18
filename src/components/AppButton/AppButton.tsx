import { ReactNode } from "react";
import * as styles from "./AppButton.styles";
import classNames from "classnames";

export const AppButton = (props: { 
  className?: string; 
  buttonClassName?: string; 
  title: string; 
  children?: ReactNode; 
  onClick?: () => void;
}) => {
  return (
    <article className={props.className} css={styles.appButton} onClick={props.onClick}>
      <div className={classNames(props.buttonClassName, "button")}>{props.children}</div>
      <span className="title">{props.title}</span>
    </article>
  )
}
