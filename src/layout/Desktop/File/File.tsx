import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import fileImg from '@/assets/icons/document.png';
import folderImg from '@/assets/icons/folder.png';

import { FileProps } from './File.props';
import style from './File.module.css';

export const File: FC<FileProps> = (props) => {
  const {
    type,
    name,
    className,
    linkedProgram,
    programArguments
  } = props;

  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive(true);

    if (e.detail === 2) {
      console.log('db click', linkedProgram, programArguments);
    }
  };

  let iconSrc: string;

  switch (type) {
    case 'file':
      iconSrc = fileImg;

      break;


    case 'folder':
      iconSrc = folderImg;

      break;
  }

  useEffect(() => {
    const handleWindowClick = () => {
      setIsActive(false);
    };

    window.addEventListener('click', handleWindowClick, { capture: true });

    return () => window.removeEventListener('click', handleWindowClick, { capture: true });
  }, []);

  return <div
    className={classNames('flex flex-col items-center w-28', className)}
    onClick={handleClick}
  >
    <div className={classNames(style.icon__wrapper, {
      [style['icon__wrapper--active']]: isActive
    })}>
      <img className={style.icon} src={iconSrc} alt='' />
    </div>

    <div className={classNames(style.name, {
      'bg-trueBlue rounded-md': isActive
    })}>
      {name}
    </div>
  </div>;
};
