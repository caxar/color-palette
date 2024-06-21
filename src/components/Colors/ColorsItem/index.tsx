import React from "react";
import "./ColorsItem.scss";
import { Link } from "react-router-dom";
// import { nanoid } from "@reduxjs/toolkit";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin]);

import { colorNameList } from "color-name-list";

interface PropsColors {
  data: string;
}

const ColorsItem = ({ data }: PropsColors): JSX.Element => {
  const colorConversions = colord("#" + data).isDark();

  const someColor = colorNameList.find(
    (color: { hex: string }) => color.hex === "#" + data
  );

  return (
    <div className="colors-items">
      <Link to={`/color/${data}`}>
        <div className="">
          <div
            className="colors-items__top "
            style={{
              background: "#" + data,
              color: colorConversions ? "#fff" : "",
            }}
          >
            #{data}
          </div>
        </div>
      </Link>
      <div className="colors-items__bottom">
        <div className="title">
          {/* {colord("#" + data).toName({ closest: true })} */}
          {someColor?.name || colord("#" + data).toName({ closest: true })}
        </div>
        <div className="liked">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            enableBackground="new 0 0 32 32"
            id="Stock_cut"
            version="1.1"
          >
            <desc />
            <path
              d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
              fill="none"
              stroke="#000000"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default ColorsItem;
