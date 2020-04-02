import React, { useState } from "react";

const SearchParams = () => {
  // Prop destructuring -> useState returns 2 items - first, current state and second, the function for updating this state
  // Best practice when using hooks -> Never define hooks under conditional(if, for) statements
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
