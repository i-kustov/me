import React, { FC } from 'react';

import { Item } from './Item/Item';
import style from './MenuBar.module.css';

export const MenuBar: FC = () => {
  return <div className={style['menu-bar']}>
    <Item isBold>Finder</Item>
    <Item>File</Item>
    <Item>Edit</Item>
    <Item>View</Item>
    <Item>Go</Item>
    <Item>Window</Item>
    <Item>Help</Item>
  </div>;
};
