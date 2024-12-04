import React from "react";
import "./SearchFilter.css";

const Filters = ({
  filterValues,
  onFilterChange,
  onSearchClick,
  onResetClick,
}) => {
  return (
    <>
      <div className="filter-container">
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={filterValues.firstName}
            onChange={(e) => onFilterChange("firstName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={filterValues.lastName}
            onChange={(e) => onFilterChange("lastName", e.target.value)}
          />
          <input
            type="date"
            placeholder="Date Of Birth"
            value={filterValues.dob}
            onChange={(e) => onFilterChange("dob", e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Address"
            value={filterValues.email}
            onChange={(e) => onFilterChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={filterValues.phone}
            onChange={(e) => onFilterChange("phone", e.target.value)}
          />
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Street Address"
              value={filterValues.address}
              onChange={(e) => onFilterChange("address", e.target.value)}
              style={{ width: "-webkit-fill-available" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="City"
              value={filterValues.city}
              onChange={(e) => onFilterChange("city", e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={filterValues.state}
              onChange={(e) => onFilterChange("state", e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={filterValues.zip}
              onChange={(e) => onFilterChange("zip", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="filter-actions">
        <button onClick={onSearchClick}>Search</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </>
  );
};

export default Filters;
