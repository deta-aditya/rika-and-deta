import { css } from "@emotion/react";

export const copyable = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .copyable-label {
    font-size: 11px;
    text-align: center;
  }

  .copyable-content {
    padding: 10px 16px;
    background-color: #323232;
    font-size: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copy-icon {
    font-size: 12px;
  }
`;
