import { FilterButon } from "./Filter.style";

interface FilterProps {
  onSort: () => void;
}

const Filter = ({ onSort } : FilterProps) => {
  return (
    <FilterButon onClick={onSort} />
  );
};

export default Filter;
