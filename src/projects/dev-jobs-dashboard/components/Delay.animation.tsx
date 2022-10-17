import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  children: React.ReactNode;
  delay: number;
  className?: string;
}

const Delay: React.FC<Props> = ({ children, delay, className }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: delay });

  return (
    <animated.section className={className} style={props}>
      {children}
    </animated.section>
  );
};

export default Delay;
