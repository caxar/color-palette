import React from "react";
import "./ContrastChecker.scss";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import harmoniesPlugin from "colord/plugins/harmonies";
extend([a11yPlugin, harmoniesPlugin]);

interface propsContrastChecker {
  data: string;
}

const ContrastChecker = ({ data }: propsContrastChecker) => {
  // Проверка контраста на белом или черном фоне
  const contrastChekerBlack = colord(data).contrast("#000");
  const contrastChekerWhite = colord(data).contrast("#fff");

  return (
    <div className="contrast">
      <div className="contrast-text">
        <div className="contrast-title">Проверка контрасности</div>
        <div className="contrast-subtitle">
          Тест контрансоти цвета на белом и черном фоне
        </div>
      </div>
      <div className="contrast-wrapper">
        <div className="contrast-left">
          <div className="contrast-left__head">
            <div className="title">Белый фон</div>
            <span
              className={`status ${
                contrastChekerWhite < 7 ? "failed" : "success"
              }`}
            >
              {contrastChekerWhite < 7 ? "плохо" : "отлично"}
              {contrastChekerWhite < 7 ? (
                <svg
                  fill="#c0392b"
                  width="15px"
                  height="15px"
                  viewBox="0 -8 528 528"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>fail</title>
                  <path d="M264 456Q210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456ZM264 288L328 352 360 320 296 256 360 192 328 160 264 224 200 160 168 192 232 256 168 320 200 352 264 288Z" />
                </svg>
              ) : (
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                    fill="#27ae60"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="contrast-left__info" style={{ color: data }}>
            <div className="title">Пример заголовка (18px)</div>
            <div className="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry (13px).
            </div>
          </div>
        </div>
        <div className="contrast-left">
          <div className="contrast-left__head">
            <div className="title">Черный фон</div>
            <span
              className={`status ${
                contrastChekerBlack < 4.5 ? "failed" : "success"
              }`}
            >
              {contrastChekerBlack < 4.5 ? "плохо" : "отлично"}
              {contrastChekerBlack < 4.5 ? (
                <svg
                  fill="#c0392b"
                  width="15px"
                  height="15px"
                  viewBox="0 -8 528 528"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>fail</title>
                  <path d="M264 456Q210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456ZM264 288L328 352 360 320 296 256 360 192 328 160 264 224 200 160 168 192 232 256 168 320 200 352 264 288Z" />
                </svg>
              ) : (
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                    fill="#27ae60"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="contrast-left__info black" style={{ color: data }}>
            <div className="title">Пример заголовка (18px)</div>
            <div className="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry (13px).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastChecker;
