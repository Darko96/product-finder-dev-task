import "./FilterList.css";
import SortBy from "./Sort By Filter/SortBy";
import Sim from "./Sim Filter/Sim";
import MainCamera from "./Main Camera FIlter/MainCamera";
import Color from "./Color Filter/Color";

const FilterList = (props) => {
  let arrayToSort = props.phones;

  const addSortedBy = (sortedByArray) => {
    props.onSortedByApp(sortedByArray);
  };

  const addSimFilter = (simFilter) => {
    props.onSimFilter(simFilter);
  };

  const addCameraFilter = (colorFilter) => {
    props.onCameraFilter(colorFilter);
  };

  return (
    <div className="filter-list-container">
      <SortBy onAddSortedBy={addSortedBy} sortBy={arrayToSort} />
      <Color />
      <Sim onAddSimFiler={addSimFilter} sortBySim={arrayToSort} />
      <MainCamera
        onAddCameraFilter={addCameraFilter}
        sortByCamera={arrayToSort}
      />
    </div>
  );
};

export default FilterList;
