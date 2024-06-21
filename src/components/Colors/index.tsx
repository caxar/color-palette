import React from "react";
import "./Colors.scss";
import ColorsItem from "./ColorsItem";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { setColors } from "../../redux/products/productSlice.js";
import { selectProducts } from "../../redux/products/selectors.js";

import { useInView } from "react-intersection-observer";

import colorData from "../../utils/test.json";

const Colors: React.FC = () => {
  const [visible, setVisible] = React.useState(12);

  const loadTest = () => {
    return setVisible((prev) => prev + 12);
  };

  const { ref, inView } = useInView({
    threshold: 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange: (inView: boolean, entry: IntersectionObserverEntry) => {
      if (inView) {
        loadTest();
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { entities } = useSelector(selectProducts);

  React.useEffect(() => {
    dispatch(setColors(colorData));
  }, []);

  return (
    <div className="colors-wrapper">
      {entities?.slice(0, visible).map((item) => (
        <ColorsItem key={nanoid()} data={item} />
      ))}
      <div ref={ref}>{inView && <p>Загрузка...</p>}</div>
    </div>
  );
};

export default Colors;
