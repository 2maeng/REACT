import { Button } from './Style';

function button(props) {
  const { variant, shape, size, children, ...rest } = props;
  return (
    <Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </Button>
  );
}
export default Button;
