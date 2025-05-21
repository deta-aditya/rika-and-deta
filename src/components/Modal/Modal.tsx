import { useModalContext } from "../../contexts/ModalContext";
import * as styles from "./Modal.styles";
import classNames from "classnames";

export const Modal = () => {
  const { modalInfo, closeModal } = useModalContext();

  return (
    <section
      css={styles.modal(modalInfo.isDisplayed())}
      className={classNames({ 
        opening: modalInfo.isDisplayed() && !modalInfo.isHiding(),
        closing: modalInfo.isHiding(),
      })} 
    >
      {modalInfo.visit({
        displayed: (payload) => (
          <>
            <div className="overlay" onClick={closeModal} />
            <article className="dialog">
              {payload.title && (
                <header className="dialog-header">
                  <div className="dialog-title">{payload.title}</div>
                  <button className="close-button" onClick={closeModal}>&times;</button>
                </header>
              )}
              <main className="dialog-body">{payload.body}</main>
            </article>
          </>
        ),
        hidden: () => null
      })}
    </section>
  );
}
