import { FaUserSecret } from 'react-icons/fa';

import { Animated, Skeleton } from './styles';

export const SkeletonLoader = () => {
  return (
    <Skeleton>
      <Animated>
        <FaUserSecret />
      </Animated>
    </Skeleton>
  );
};
