import clsx from 'clsx';

interface Props {
  bgColor?: string;
  bubbleType?: string;
  height?: string;
}

const Bubbles1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 800"
    opacity="0.88"
    role="img"
    aria-label="Bubbles 1"
  >
    <title>Bubbles 1</title>
    <desc>A decorative SVG with bubbles.</desc>
    <defs>
      <filter
        id="bbblurry-filter-1"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
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
        />
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter-1)">
      {[{ color: 'hsl(37, 99%, 67%)', cx: 195.07575212882972 }, { color: 'hsl(316, 73%, 52%)', cx: 411.24331807088123 }, { color: 'hsl(185, 100%, 57%)', cx: 630.9035196778707 }].map(({ color, cx }, index) => (
        <ellipse
          key={index}
          rx="150"
          ry="150"
          cx={cx}
          cy={index === 0 ? "489.54354010245856" : index === 1 ? "210.89381150171187" : "172.32006381312212"}
          fill={color}
        />
      ))}
    </g>
  </svg>
);

const BluePurpleRedBubbles = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 800"
    opacity="0.3"
    role="img"
    aria-label="Blue Purple Red Bubbles"
  >
    <title>Blue Purple Red Bubbles</title>
    <desc>A decorative SVG with blue, purple, and red bubbles.</desc>
    <defs>
      <filter
        id="bbblurry-filter-2"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur
          stdDeviation="127"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        />
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter-2)">
      {[{ fill: '#ff5e92' }, { fill: '#df4cfe' }, { fill: '#008dff' }].map(({ fill }, index) => (
        <ellipse
          key={index}
          rx="150"
          ry="150"
          cx={index === 0 ? "195.07575212882972" : index === 1 ? "411.24331807088123" : "630.9035196778707"}
          cy={index === 0 ? "489.54354010245856" : index === 1 ? "210.89381150171187" : "172.32006381312212"}
          fill={fill}
        />
      ))}
    </g>
  </svg>
);

const bubblesMap: { [key: string]: JSX.Element } = {
  '1': <Bubbles1 />,
  '2': <BluePurpleRedBubbles />,
};

export const BlurBG = ({ bgColor = 'bg-emerald-500', bubbleType = '2', height = '' }: Props) => (
  <div
    className={clsx('absolute top-0 w-full overflow-hidden', {
      [bgColor]: !!bgColor,
      height: !!height,
    })}
    role="presentation"
    aria-hidden="true"
  >
    {bubblesMap[bubbleType]}
  </div>
);
