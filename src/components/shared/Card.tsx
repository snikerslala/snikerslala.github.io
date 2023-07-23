import { StyledCard } from './Card.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { CardProps } from 'antd';

interface ThisCardProps extends CardProps {
  width?: string | number;
}

function Card({ width, children }: ThisCardProps) {
  const { md } = useBreakpoint();

  const cardWidth = md ? '700px' : '300px';
  return (
    <StyledCard style={{ width: width ?? cardWidth }}>{children}</StyledCard>
  );
}

export default Card;
