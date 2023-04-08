import React, { useState, useEffect } from "react";
import "./Sim.css";

const Sim = (props) => {
  const array = props.sortBySim;
  const [selectedSim, setSelectedSim] = useState("");

  const selected = array.filter((phone) => {
    if (phone.sim.toLowerCase() === selectedSim) {
      return phone;
    }
  });

  useEffect(() => {
    props.onAddSimFiler(selected);
  }, [selectedSim]);

  const selectedSimHandler = (event) => {
    setSelectedSim(event.target.value);
  };

  return (
    <div className="filter">
      <div className="filter__control">
        <label className="filter__title">Sim:</label>
        <select onChange={selectedSimHandler}>
          <option value="choose">Choose SIM type</option>
          <option value="single sim">Single SIM</option>
          <option value="dual sim">Dual SIM</option>
        </select>
      </div>
    </div>
  );
};

export default Sim;
