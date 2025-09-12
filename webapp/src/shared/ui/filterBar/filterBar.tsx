import { Button } from '../button/button';
import styles from './filterBar.module.scss'
import { FiFilter } from "react-icons/fi";
import { FaSortAmountDown } from "react-icons/fa";
import { DropdownBaseUI } from '../dropdownBase/dropdownBase';
import { FilterBarProps } from './type';
import { ArticleDateFilter } from '../dataPicker/dataPicker';
import {MAGAZINES} from '../../../features/articleFilter/consts/magazines'

const magazines = MAGAZINES;

export const FilterBar = ({
    magazines = [],
    selectedMagazine,
    onSelectMagazine,
    selectedDate,
    onSelectDate,
  }: FilterBarProps) => {
    return(
    <div className={styles.container}>
        <div className={styles.filterBar}>
            <div className={styles.filter}>
           <FiFilter size={20} color={'#ec4899'}/>
           <p className={styles.filterText}>
           Filter by Magazine:
           </p>
           {magazines.map((mag) => (
            <Button 
            key={mag.value} 
            color={selectedMagazine === mag.value ? 'shaded' : 'primary'}
            onClick={() => onSelectMagazine(mag.value)}
            >
                {mag.label}</Button>
            ))}
        </div>
        <div className={styles.sort}>
            <FaSortAmountDown size={20} color={'#ec4899'}/>
            <p className={styles.filterText}>
            Sort by Date:
            </p>
            <DropdownBaseUI 
            placeholder="Выберите дату"
            selectedValue={selectedDate ? selectedDate.toLocaleDateString() : undefined}>
            <div>
            <ArticleDateFilter
            selectedDate={selectedDate}
            onChange={onSelectDate}
            />
            </div>
          </DropdownBaseUI>
        </div>
        </div>
        </div>
    )
}