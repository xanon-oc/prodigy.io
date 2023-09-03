import React from "react";

const Demo = () => {
  return (
    <div>
      <ul className="menu bg-base-100 lg:menu-horizontal rounded-box">
        <li>
          <a>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Choose Category
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </a>
        </li>
        <li>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Price
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Demo;
