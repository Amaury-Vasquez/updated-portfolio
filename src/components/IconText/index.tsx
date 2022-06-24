import { Text } from './styles';

export const IconText = (props: {
  children: string;
  color?: string;
  Icon?: React.FC;
}) => {
  const { children, color, Icon } = props;

  return (
    <Text color={color}>
      {children}
      {Icon && <Icon />}
      <br />
    </Text>
  );
};
