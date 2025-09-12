export type FilterBarProps = {
    magazines?: { label: string; value: string }[];
    selectedMagazine: string;
    onSelectMagazine: (mag: string) => void;
    selectedDate: Date | null;
    onSelectDate: (date: Date | null) => void;
  }