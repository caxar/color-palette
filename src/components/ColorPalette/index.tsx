import { nanoid } from "@reduxjs/toolkit";
import { colord } from "colord";
import React from "react";

import "./ColorPalette.scss";
import { Bounce, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

const ColorPalette = ({ data }) => {
  const [activeColor, setActiveColor] = React.useState(null);

  // Получаем данные из store
  const { status } = useSelector(selectProducts);

  const colorTest = (color: string) => {
    return colord(color).isDark();
  };

  const notify = () =>
    toast.success("Цвет скопирован", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  // Копирвоание цвета
  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
    notify();
  };

  return (
    <div className="palette-wrapper">
      <div className="palette-wrapper__tiles">
        {/* {status === "failed"
            ? "Not found 404"
            : status === "pending"
            ? [...new Array(8)].map(() => <SkeletonProduct key={nanoid()} />)
            : productItem} */}
        {data?.map((item) => (
          <div
            key={nanoid()}
            className="tiles-item"
            style={{ background: item.hex.value }}
          >
            <span
              onClick={() => copyText(item.hex.value)}
              className={``}
              style={{ color: colorTest(item.hex.value) ? "#fff" : "" }}
            >
              {item.hex.value}
            </span>
          </div>
        ))}
      </div>
      {/* <div className="palette-wrapper__info"></div> */}
    </div>
  );
};

export default ColorPalette;
