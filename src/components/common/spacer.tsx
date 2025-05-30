import type { FC } from 'react';

interface SpacerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spacer: FC<SpacerProps> = ({ size = 'sm' }) => {
  let paddingClass = '';

  switch (size) {
    case 'sm':
      paddingClass = 'py-2';
      break;
    case 'md':
      paddingClass = 'py-4';
      break;
    case 'lg':
      paddingClass = 'py-6';
      break;
    default:
      paddingClass = 'py-2';
  }

  return <div className={paddingClass} />;
};

export default Spacer;
