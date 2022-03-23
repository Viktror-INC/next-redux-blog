import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { TSelect } from './@types';
import styles from './Select.module.scss';

export default function Select(props: TSelect) {
  const { options, defaultValue, invalid = false, setValue } = props;
  const [selectValue, setSelectValue] = useState(defaultValue);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (!menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  /**Check if ckick on non focus element */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={classNames(styles.selectWrap, {
        [styles.invalid]: invalid,
      })}
    >
      <span
        className={styles.currentValue}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {selectValue}
        <div
          className={classNames(styles.selectImage, {
            [styles.revertImage]: showMenu,
          })}
        >
          <Image
            src="/images/downward-arrow.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </span>
      <div
        ref={menuRef}
        className={classNames(styles.menuWrap, {
          [styles.showMenu]: showMenu,
        })}
      >
        <ul>
          {options &&
            options.map((item, index) => {
              return (
                <li
                  onClick={(event) => {
                    setSelectValue(item);
                    setValue(event);
                    setShowMenu(false);
                  }}
                  key={index}
                  id={item}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
