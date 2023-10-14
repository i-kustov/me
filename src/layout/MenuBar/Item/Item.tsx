import React, { FC } from 'react';
import classNames from 'classnames';

import { ItemProps } from './Item.props';
import style from './Item.module.css';

export const Item: FC<ItemProps> = (props) => {
  const { children, isBold } = props;

  return <div className={classNames(style.item, {
    'font-bold': isBold,
  })}>
    {children}
  </div>;
};
