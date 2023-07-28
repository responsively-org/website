export const BlurBG = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 800"
        opacity="0.88"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="121"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="150"
            ry="150"
            cx="195.07575212882972"
            cy="489.54354010245856"
            fill="hsl(37, 99%, 67%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="411.24331807088123"
            cy="210.89381150171187"
            fill="hsl(316, 73%, 52%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="630.9035196778707"
            cy="172.32006381312212"
            fill="hsl(185, 100%, 57%)"
          ></ellipse>
        </g>
      </svg>
    </div>
  );
};
