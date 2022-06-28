import { FC } from 'react';
import { Animated, Skeleton } from './styles';

export const SkeletonLoader = (props: { Icon?: FC; time?: string }) => {
  const { Icon, time } = props;

  return (
    <Skeleton>
      <Animated time={time ? time : '5s'}>{Icon && <Icon />}</Animated>
    </Skeleton>
  );
};
