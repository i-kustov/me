import { FC } from 'react';

import style from './Icon.module.css';

import { IconProps } from './Icon.props';

export const Icon: FC<IconProps> = (props) => {
  const { src, isActive } = props;

  return <div className={style.icon__wrapper}>
    <img className='w-full' src={src} alt='' />

    {isActive && <div className='flex justify-center'>
      <div className='w-1 h-1 rounded-full bg-black' />
    </div>}
  </div>;
};
