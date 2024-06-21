import React from "react";
import "./singleColors.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsAction } from "../../redux/products/asyncActions";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin]);

import { colorNameList } from "color-name-list";
import { selectProducts } from "../../redux/products/selectors";
import { HexColorPicker } from "react-colorful";
import ColorPalette from "../ColorPalette";
import ContrastChecker from "../ContrastChecker";

const SingleColors = () => {
  const [colorSelect, setColorSelect] = React.useState<string>(null);
  const [visiblePalette, setVisiblePalette] = React.useState<boolean>(false);
  const paletteRef = React.useRef(null);

  const dispatch = useDispatch();

  // id с url params
  const { id } = useParams();
  const history = useNavigate();

  React.useEffect(() => {
    dispatch(fetchProductsAction(id));
    // window.scrollTo(0, 0);
    setColorSelect("#" + id);
  }, [dispatch, id, colorSelect]);

  // проверка темный ли цвет
  const colorConversions = colord(colorSelect).isDark();

  // название цвета если есть
  const nameColor = colorNameList.find(
    (color: { hex: string }) => color?.hex === colorSelect
  );

  // Получаем данные из store
  const { infoColors } = useSelector(selectProducts);

  const schemeDataPalette = infoColors?.colorSchemeData;

  // Popup цвет скопирован
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

  // открыть или закрыть палетку
  const openPalette = () => {
    setVisiblePalette(!visiblePalette);
  };

  // Обработка клика вне элеменат и закрытие палетки выбора цвета
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!paletteRef.current.contains(e.target)) {
        setVisiblePalette(false);
      }
    });
  }, [paletteRef]);

  const handleChangeColor = (colorItem: string) => {
    setColorSelect(colorItem);
    history(`/color/${colorItem.slice(1)}`, { replace: true });
  };

  return (
    <div className="single-color">
      <div className="container">
        <div className="single-color__wrapper">
          <Link to="/" className="single-color__menu">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M6 12L11 7M6 12L11 17"
                stroke="#272343"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Главная{" "}
          </Link>
          <div className="single-color__top">
            <div className="single-color__title">Информация о цвете</div>
            <div className="single-color__selected">
              {/* <div className="selected-title">Выбор цвета</div> */}
              <div className="selected-color">
                <div className="selected-color__title">Выбрать цвет</div>
                <div
                  className="selected-color__field"
                  onClick={() => openPalette()}
                >
                  <span>{colorSelect}</span>
                  <div
                    className="selected-color__frame"
                    style={{ background: colorSelect }}
                  ></div>
                </div>
              </div>
              <div ref={paletteRef} className="selected-color__hidden">
                {visiblePalette && (
                  <HexColorPicker
                    color={colorSelect}
                    onChange={(colorItem) => handleChangeColor(colorItem)}
                  />
                )}
              </div>
            </div>
            <div
              onClick={() => copyText(colorSelect)}
              className="single-color__item"
              style={{ background: "#" + id }}
            >
              <div
                className="title"
                style={{ color: colorConversions ? "#fff" : "" }}
              >
                {nameColor?.name || colord("#" + id).toName({ closest: true })}
              </div>
              <div
                className="color-code"
                style={{ color: colorConversions ? "#fff" : "" }}
              >
                {colorSelect}
              </div>
            </div>
          </div>
          <div className="single-color__middle">
            <div className="single-color__conversions">
              <div className="conversions-title">Цветовые преобразования</div>
              <span className="conversions-subtitle">
                Hex цвет {colorSelect} преобразуется в различные форматы.
              </span>
              <ul className="conversions-menu">
                <li>
                  <span className="conversions-menu__title">Hex</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.hex?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.hex?.value}
                  </span>
                </li>
                <li>
                  <span className="conversions-menu__title">RGB</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.rgb?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.rgb?.value}
                  </span>
                </li>
                <li>
                  <span className="conversions-menu__title">HSL</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.hsl?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.hsl?.value}
                  </span>
                </li>
                <li>
                  <span className="conversions-menu__title">HSV</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.hsv?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.hsv?.value}
                  </span>
                </li>
                <li>
                  <span className="conversions-menu__title">CMYK</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.cmyk?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.cmyk?.value}
                  </span>
                </li>
                <li>
                  <span className="conversions-menu__title">XYZ</span>
                  <span
                    onClick={() => {
                      copyText(infoColors?.xyz?.value);
                    }}
                    className="conversions-menu__btn"
                  >
                    {infoColors?.xyz?.value}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-color__bottom">
            <div className="single-color__variations">
              <div className="variations-title">Цветовая схема</div>
              <span className="variations-subtitle">
                Содержит многоцветные комбинации, подобранные в соответствии с
                соотношением цветов в цветовом круге.
              </span>
              {/* {status === "failed"
            ? "Not found 404"
            : status === "pending"
            ? [...new Array(8)].map(() => <SkeletonProduct key={nanoid()} />)
            : productItem} */}
              <ColorPalette data={schemeDataPalette} />
            </div>
          </div>
          {}
          <ContrastChecker data={infoColors?.hex?.value} />
        </div>
      </div>
      <ToastContainer className="modify-toastContainer" />
    </div>
  );
};

export default SingleColors;
