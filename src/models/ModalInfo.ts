import { ReactNode } from "react";

interface ModalInfoVisitor<T> {
  displayed(payload: ModalInfoPayload): T;
  hidden(): T;
}

export type ModalInfoPayload = {
  body: ReactNode;
  title?: ReactNode; 
}

export abstract class ModalInfo {
  abstract visit<T>(visitor: ModalInfoVisitor<T>): T; 
  abstract isDisplayed(): boolean;
  abstract isHiding(): boolean;

  static hidden(): ModalInfo {
    return new HiddenModal();
  }

  static hiding(payload: ModalInfoPayload): ModalInfo {
    return new HidingModal(payload);
  }

  static displayed(payload: ModalInfoPayload): ModalInfo {
    return new DisplayedModal(payload);
  }
}

class HiddenModal extends ModalInfo {
  visit<T>(visitor: ModalInfoVisitor<T>): T {
    return visitor.hidden();
  }

  isHiding(): boolean {
    return false;
  }

  isDisplayed(): boolean {
    return false;
  }
}

class HidingModal extends ModalInfo {
  constructor(
    public readonly payload: ModalInfoPayload,
  ) {
    super();
  }

  visit<T>(visitor: ModalInfoVisitor<T>): T {
    return visitor.displayed(this.payload);
  }

  isHiding(): boolean {
    return true;
  }

  isDisplayed(): boolean {
    return true;
  }
}

class DisplayedModal extends ModalInfo {
  constructor(
    public readonly payload: ModalInfoPayload,
  ) {
    super();
  }

  visit<T>(visitor: ModalInfoVisitor<T>): T {
    return visitor.displayed(this.payload);
  }

  isHiding(): boolean {
    return false;
  }

  isDisplayed(): boolean {
    return true;
  }
}
