import React, { useState } from "react";
import "./PhoneList.css";
import Phone from "./Phone";
import LoadMore from "../Load More Component/LoadMore";

const PhoneList = (props) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

  const filteredPhones = props.phones.filter((phone) =>
    phone.model.toLowerCase().includes(props.search.toLowerCase())
  );

  const addLoadMore = (load) => {
    setShouldLoadMore(load);
  };

  if (props.search.length > 0) {
    return (
      <div className="phone-list-container">
        {filteredPhones.map((phone) => (
          <Phone
            key={phone.id}
            model={phone.model}
            series={phone.series}
            price={phone.price}
            color={phone.color}
            images={phone.images}
            camera={phone.camera}
            sim={phone.sim}
            url={phone.url}
          />
        ))}
      </div>
    );
  } else if (shouldLoadMore && props.phones.length >= 6) {
    return (
      <div className="phone-list-container">
        {props.phones.map((phone) => (
          <Phone
            key={phone.id}
            model={phone.model}
            series={phone.series}
            price={phone.price}
            color={phone.color}
            images={phone.images}
            camera={phone.camera}
            sim={phone.sim}
            url={phone.url}
          />
        ))}
        {props.phones.length >= 6 ? (
          <LoadMore load={addLoadMore} />
        ) : (
          <LoadMore style={{ display: "none" }} load={addLoadMore} />
        )}
      </div>
    );
  } else {
    return (
      <div className="phone-list-container">
        {props.phones.slice(0, 6).map((phone) => (
          <Phone
            key={phone.id}
            model={phone.model}
            series={phone.series}
            price={phone.price}
            color={phone.color}
            images={phone.images}
            camera={phone.camera}
            sim={phone.sim}
            url={phone.url}
          />
        ))}
        {props.phones.length >= 6 ? (
          <LoadMore load={addLoadMore} />
        ) : (
          <LoadMore style={{ display: "none" }} load={addLoadMore} />
        )}
      </div>
    );
  }
};

export default PhoneList;
