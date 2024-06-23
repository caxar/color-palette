import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";
import { colord, extend } from "colord";
import harmoniesPlugin from "colord/plugins/harmonies";

extend([harmoniesPlugin]);

import "./ColorPalette.scss";

interface PropsColorPalette {
  data: [
    {
      hex: {
        value: string;
      };
    }
  ];
  currentColor: string;
}

const ColorPalette = ({ data, currentColor }: PropsColorPalette) => {
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

  const analogousColor = colord(currentColor)
    .harmonies("analogous")
    .map((c) => c.toHex());

  const complementaryColor = colord(currentColor)
    .harmonies("complementary")
    .map((c) => c.toHex());

  const splitColor = colord(currentColor)
    .harmonies("split-complementary")
    .map((c) => c.toHex());

  const tetradColor = colord(currentColor)
    .harmonies("tetradic")
    .map((c) => c.toHex());

  const triadColor = colord(currentColor)
    .harmonies("triadic")
    .map((c) => c.toHex());

  return (
    <div className="palette-wrapper">
      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Общая цветовая схема</div>
          <div className="subtitle">Аналоги цвета</div>
        </div>
        <div className="palette-wrapper__tiles">
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
      </div>

      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Аналоги цвета</div>
          <div className="subtitle">
            Аналоговая цветовая палитра это цвета которые находяттся рядом с
            другом другом в цветом диапозоне.
          </div>
        </div>
        <div className="palette-wrapper__tiles">
          {analogousColor?.map((analogousItem) => (
            <div
              key={nanoid()}
              className="tiles-item"
              style={{ background: analogousItem }}
            >
              <span
                onClick={() => copyText(analogousItem)}
                className={``}
                style={{ color: colorTest(analogousItem) ? "#fff" : "" }}
              >
                {analogousItem}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Дополняющие цвета</div>
          <div className="subtitle">
            Дополняющие цвета это цвета которые являются противоположностью в
            цветом диапозоне.
          </div>
        </div>
        <div className="palette-wrapper__tiles">
          {complementaryColor?.map((complentaryItem) => (
            <div
              key={nanoid()}
              className="tiles-item"
              style={{ background: complentaryItem }}
            >
              <span
                onClick={() => copyText(complentaryItem)}
                className={``}
                style={{ color: colorTest(complentaryItem) ? "#fff" : "" }}
              >
                {complentaryItem}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Соседние дополняющие цвета</div>
          <div className="subtitle">
            Раздельные комплементарные цвета в которых используются сеседние
            цвета комплементарного цвета.
          </div>
        </div>
        <div className="palette-wrapper__tiles">
          {splitColor?.map((splitItem) => (
            <div
              key={nanoid()}
              className="tiles-item"
              style={{ background: splitItem }}
            >
              <span
                onClick={() => copyText(splitItem)}
                className={``}
                style={{ color: colorTest(splitItem) ? "#fff" : "" }}
              >
                {splitItem}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Triad цвета</div>
          <div className="subtitle">
            Триадные цвета это цвета которые выстраиваются в треугольник на
            цветовой палитре.
          </div>
        </div>
        <div className="palette-wrapper__tiles">
          {tetradColor?.map((tetradItem) => (
            <div
              key={nanoid()}
              className="tiles-item"
              style={{ background: tetradItem }}
            >
              <span
                onClick={() => copyText(tetradItem)}
                className={``}
                style={{ color: colorTest(tetradItem) ? "#fff" : "" }}
              >
                {tetradItem}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="palette-wrapper__block">
        <div className="text">
          <div className="title">Tetrad цвета</div>
          <div className="subtitle">
            Тетрадные цвета это цвета которые выстраиваются в квадрат на
            цветовой палитре.
          </div>
        </div>
        <div className="palette-wrapper__tiles">
          {triadColor?.map((triadItem) => (
            <div
              key={nanoid()}
              className="tiles-item"
              style={{ background: triadItem }}
            >
              <span
                onClick={() => copyText(triadItem)}
                className={``}
                style={{ color: colorTest(triadItem) ? "#fff" : "" }}
              >
                {triadItem}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="palette-wrapper__info"></div> */}
    </div>
  );
};

export default ColorPalette;
