import React from "react";
import "./Logo.css";

function Logo({isNotCompleteLogo}: {isNotCompleteLogo:boolean}): JSX.Element {
  return (
    <svg
      id="Logo"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.91 130.91"
      className="logo"
    >
      <g id="Capa_1-2" data-name="Capa 1">
        <g>
          <polygon
            className="cls-2"
            points="116.36 72.72 101.82 72.72 101.82 87.27 101.82 101.82 116.36 101.82 116.36 87.27 116.36 72.72"
          />
          <g>
            <polygon
              className="cls-1"
              points="87.27 101.82 87.27 116.36 101.82 116.36 116.36 116.36 116.36 101.82 101.82 101.82 87.27 101.82"
            />
            <polygon
              className="cls-1"
              points="116.36 72.72 116.36 87.27 116.36 101.82 130.91 101.82 130.91 87.27 130.91 72.72 116.36 72.72"
            />
            <rect
              className="cls-1"
              x="101.82"
              y="58.18"
              width="14.54"
              height="14.54"
            />
            <polygon
              className="cls-1"
              points="87.27 72.72 87.27 58.18 72.72 58.18 58.18 58.18 43.63 58.18 29.09 58.18 14.54 58.18 14.54 72.72 14.54 87.27 14.54 101.82 29.09 101.82 29.09 116.36 43.63 116.36 58.18 116.36 72.72 116.36 72.72 101.82 87.27 101.82 87.27 87.27 87.27 72.72"
            />
          </g>
          {!isNotCompleteLogo && (
            <g className="smoke">
              <rect className="cls-3" x="43.63" width="14.55" height="14.54" />
              <rect
                className="cls-3"
                x="29.09"
                y="14.54"
                width="14.54"
                height="14.55"
              />
              <rect
                className="cls-3"
                x="43.63"
                y="29.09"
                width="14.55"
                height="14.54"
              />
            </g>
          )}

          <g>
            <polygon
              className="cls-3"
              points="14.54 72.72 14.54 58.18 0 58.18 0 72.72 0 87.27 0 101.82 14.54 101.82 14.54 87.27 14.54 72.72"
            />
            <polygon
              className="cls-3"
              points="87.27 58.18 87.27 72.72 87.27 87.27 87.27 101.82 101.82 101.82 101.82 87.27 101.82 72.72 101.82 58.18 87.27 58.18"
            />
            <rect
              className="cls-3"
              x="72.72"
              y="101.82"
              width="14.55"
              height="14.54"
            />
            <polygon
              className="cls-3"
              points="43.63 116.36 29.09 116.36 29.09 130.91 43.63 130.91 58.18 130.91 72.72 130.91 72.72 116.36 58.18 116.36 43.63 116.36"
            />
            <rect
              className="cls-3"
              x="14.54"
              y="101.82"
              width="14.55"
              height="14.54"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
