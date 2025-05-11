interface InvitationVisitor<T> {
  notOpened(): T;
  opened(): T;
}

export abstract class Invitation {
  abstract visit<T>(visitor: InvitationVisitor<T>): T;
  abstract serialize(): string;

  static unserialize(data: string) {
    if (data === "opened") {
      return new OpenedInvitation();
    }
    return new UnopenedInvitation();
  }
}

export class UnopenedInvitation extends Invitation {
  visit<T>(visitor: InvitationVisitor<T>): T {
    return visitor.notOpened();
  }

  serialize(): string {
    return "unopened";
  }
}

export class OpenedInvitation extends Invitation {
  visit<T>(visitor: InvitationVisitor<T>): T {
    return visitor.opened();
  }

  serialize(): string {
    return "opened";
  }
}
