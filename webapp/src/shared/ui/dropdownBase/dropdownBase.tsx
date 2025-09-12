import { useEffect, useState } from 'react';
import clsx from 'clsx';
import type { DropdownBaseUIProps } from './type';
import styles from './dropdownBase.module.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const DropdownBaseUI = ({
  placeholder,
  children,
  onSelect,
  selectedValue
}: DropdownBaseUIProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
        <button
          className={styles.buttonDropdown}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={clsx({ [styles.placeholder]: !selectedValue })}>
            { selectedValue || placeholder}
          </span>
          <MdOutlineKeyboardArrowDown
            className={clsx(styles.arrow, {
              [styles.arrowOpen]: isOpen,
            })}
          />
        </button>

        {isOpen && (
          <div className={styles.dropdownList}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
