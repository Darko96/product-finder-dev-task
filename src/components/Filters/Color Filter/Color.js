import "./Color.css";

const Color = () => {
  return (
    <div className="filter">
      <div className="filter__control">
        <label className="filter__title">Color:</label>
        <select>
          {/* value={props.selected} onChange={drowdownChangeHandler} */}
          <option value="choose">Choose color</option>
          <option value="price">Black</option>
          <option value="camera">Cream</option>
          <option value="camera">Lavender</option>
          <option value="camera">Green</option>
          <option value="camera">Blue</option>
        </select>
      </div>
    </div>
  );
};

export default Color;
