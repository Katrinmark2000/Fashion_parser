import { useEffect, useState } from 'react';
import clsx from 'clsx';
import type { DropdownBaseUIProps } from './type';
import styles from './dropdownBase.module.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const DropdownBaseUI = ({
  placeholder,
  options = [],
  onSelect,
  defaultValue,
}: DropdownBaseUIProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValue === "first" && options.length > 0) {
      setSelectedOption(options[0].value);
    } else if (
      defaultValue &&
      defaultValue !== "first" &&
      options.some((o) => o.value === defaultValue)
    ) {
      setSelectedOption(defaultValue);
    }
  }, [options, defaultValue]);

  const selectedText = options.find((o) => o.value === selectedOption)?.text;

  return (
    <div className={styles.container}>
      <div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
        <button
          className={styles.buttonDropdown}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={clsx({
              [styles.placeholder]: !selectedOption,
            })}
          >
            {selectedText || placeholder}
          </span>
          <MdOutlineKeyboardArrowDown
            className={clsx(styles.arrow, {
              [styles.arrowOpen]: isOpen,
            })}
          />
        </button>

        {isOpen && (
          <ul className={styles.dropdownList}>
            {options.map((option) => (
              <li
                key={option.value}
                className={clsx(styles.optionItem, {
                  [styles.selected]: option.value === selectedOption,
                })}
                onClick={() => {
                  setSelectedOption(option.value);
                  setIsOpen(false);
                  onSelect?.(option.value);
                }}
              >
                <div className={styles.itemText}>{option.text}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
