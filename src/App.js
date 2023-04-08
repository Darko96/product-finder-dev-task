import React, { useState } from "react";
import Search from "./components/Search Component/Search";
import FilterList from "./components/Filters/FilterList";
import PhoneList from "./components/Phones/PhoneList";
import BackToTopButton from "./components/Back to the top Button/BackToTheTopBtn";

const DUMMY_PHONES = [
  {
    id: 1,
    model: "Galaxy S23 Ultra",
    series: "GalaxyS",
    price: 29000,
    color: ["green", "phantom-black", "lavender", "cream"],
    camera: 200,
    sim: "Dual SIM",
    images: [
      { green: "/images/s-series/GalaxyS23Ultra_Green.png" },
      {
        "phantom-black": "/images/s-series/GalaxyS23Ultra_PhantomBlack.png",
      },
      { lavender: "/images/s-series/GalaxyS23Ultra_Lavender.png" },
      { cream: "/images/s-series/GalaxyS23Ultra_Cream.png" },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-s23-ultra/",
  },
  {
    id: 2,
    model: "Galaxy S23",
    series: "GalaxyS",
    price: 19500,
    color: ["lavender", "cream", "phantom-black", "green"],
    camera: 50,
    sim: "Dual SIM",
    images: [
      { lavender: "/images/s-series/GalaxyS23_Lavender.png" },
      {
        cream: "/images/s-series/GalaxyS23_Cream.png",
      },
      {
        "phantom-black": "/images/s-series/GalaxyS23_PhantomBlack.png",
      },
      { green: "/images/s-series/GalaxyS23_Green.png" },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-s23/",
  },
  {
    id: 3,
    model: "Galaxy S23 Plus",
    series: "GalaxyS",
    price: 23750,
    color: ["lavender", "cream", "phantom-black", "green"],
    camera: 50,
    sim: "Dual SIM",
    images: [
      { lavender: "/images/s-series/GalaxyS23Plus_Lavender.png" },
      {
        cream: "/images/s-series/GalaxyS23Plus_Cream.png",
      },
      {
        "phantom-black": "/images/s-series/GalaxyS23Plus_PhantomBlack.png",
      },
      { green: "/images/s-series/GalaxyS23Plus_Green.png" },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-s23",
  },
  {
    id: 4,
    model: "Galaxy A04",
    series: "GalaxyA",
    price: 2750,
    color: ["black", "dark-green"],
    camera: 50,
    sim: "Dual SIM",
    images: [
      { black: "/images/a-series/GalaxyA04_Black.png" },
      {
        "dark-green": "/images/a-series/GalaxyA04_DeepGreen.png",
      },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-a/",
  },
  {
    id: 5,
    model: "Galaxy A04e",
    series: "GalaxyA",
    price: 2160,
    color: ["light-blue", "black"],
    camera: 13,
    sim: "Single SIM",
    images: [
      { "light-blue": "/images/a-series/GalaxyA04e_LightBlue.png" },
      {
        black: "/images/a-series/GalaxyA04e_Black.png",
      },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-a",
  },
  {
    id: 6,
    model: "Galaxy A14",
    series: "GalaxyA",
    price: 3750,
    color: ["black", "light-green"],
    camera: 13,
    sim: "Single SIM",
    images: [
      { black: "/images/a-series/GalaxyA14_Black.png" },
      {
        "light-green": "/images/a-series/GalaxyA14_LightGreen.png",
      },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-a",
  },
  {
    id: 7,
    model: "Galaxy Z Fold 4",
    series: "GalaxyZ",
    price: 27500,
    color: ["beige", "phantom-black", "grey-green"],
    camera: 48,
    sim: "Single SIM",
    images: [
      { beige: "/images/z-series/Z-Fold4-Beige.png" },
      {
        "phantom-black": "/images/z-series/Z-Fold4-Black.png",
      },
      {
        "grey-green": "/images/z-series/Z-Fold4-Graygreen.png",
      },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-a",
  },
  {
    id: 8,
    model: "Galaxy Z Flip4",
    series: "GalaxyZ",
    price: 23450,
    color: ["blue", "bora-purple", "graphite", "pink-gold"],
    camera: 50,
    sim: "Dual SIM",
    images: [
      { blue: "/images/z-series/Z-Flip4-Blue.png" },
      {
        "bora-purple": "/images/z-series/Z-Flip4-BoraPurple.png",
      },
      {
        graphite: "/images/z-series/Z-Flip4-Graphite.png",
      },
      {
        "pink-gold": "/images/z-series/Z-Flip4-PinkGold.png",
      },
    ],
    url: "https://www.samsung.com/za/smartphones/galaxy-z-flip4",
  },
];

const App = () => {
  const [phoneSearch, setPhoneSearch] = useState("");
  const [sortedby, setSortedBy] = useState("");
  const [filters, setFilters] = useState({
    sim: "",
    color: "",
    camera: "",
  });

  const addSearchHandler = (search) => {
    setPhoneSearch(search);
  };

  const addSortedByApp = (sorted) => {
    setSortedBy(sorted);
  };

  const addSimFilterApp = (sim) => {
    setFilters((prevState) => ({ ...prevState, sim: sim }));
  };

  const addCameraFilterApp = (camera) => {
    setFilters((prevState) => ({ ...prevState, camera: camera }));
  };

  console.log(filters);

  if (filters.camera.length > 0) {
    return (
      <div className="App">
        <Search onAddSearch={addSearchHandler} />
        <FilterList
          onCameraFilter={addCameraFilterApp}
          onSimFilter={addSimFilterApp}
          onSortedByApp={addSortedByApp}
          phones={DUMMY_PHONES}
        />
        <PhoneList search={phoneSearch} phones={filters.camera} />
        <BackToTopButton />
      </div>
    );
  }

  if (filters.sim.length > 0) {
    return (
      <div className="App">
        <Search onAddSearch={addSearchHandler} />
        <FilterList
          onCameraFilter={addCameraFilterApp}
          onSimFilter={addSimFilterApp}
          onSortedByApp={addSortedByApp}
          phones={DUMMY_PHONES}
        />
        <PhoneList search={phoneSearch} phones={filters.sim} />
        <BackToTopButton />
      </div>
    );
  }

  if (sortedby.length > 1) {
    return (
      <div className="App">
        <Search onAddSearch={addSearchHandler} />
        <FilterList
          onCameraFilter={addCameraFilterApp}
          onSimFilter={addSimFilterApp}
          onSortedByApp={addSortedByApp}
          phones={DUMMY_PHONES}
        />
        <PhoneList search={phoneSearch} phones={sortedby} />
        <BackToTopButton />
      </div>
    );
  }

  return (
    <div className="App">
      <Search onAddSearch={addSearchHandler} />
      <FilterList
        onCameraFilter={addCameraFilterApp}
        onSimFilter={addSimFilterApp}
        onSortedByApp={addSortedByApp}
        phones={DUMMY_PHONES}
      />
      <PhoneList search={phoneSearch} phones={DUMMY_PHONES} />
      <BackToTopButton />
    </div>
  );
};

export default App;
