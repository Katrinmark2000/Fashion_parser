import React from 'react';

const DatePicker = React.lazy(() => import('react-datepicker'));

type Props = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  onClose?: () => void;
};

export const ArticleDateFilter = ({ 
    selectedDate, 
    onChange,
    onClose
}: Props) => {
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        isClearable
        maxDate={new Date()}
        onClickOutside={onClose}
        inline 
      />
    </div>
  );
};