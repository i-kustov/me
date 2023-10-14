import React, { FC } from 'react';

import finderImg from '@/assets/icons/finder.png';
import terminalImg from '@/assets/icons/terminal.png';
import trashEmptyImg from '@/assets/icons/trash-empty.png';

import { Icon } from './Icon/Icon';
import style from './Dock.module.css';

export const Dock: FC = () => {
  return <div className={style.dock__wrapper}>
    <div className={style.dock}>
      <Icon src={finderImg} isActive />
      <Icon src={terminalImg} />

      <div className={style.divider} />

      <Icon src={trashEmptyImg} />
    </div>
  </div>;
};
