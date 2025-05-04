import { button } from "./Button.styles";

export const Button = (props: React.ComponentProps<'button'>) => {
  return <button css={button} {...props} />;
}
