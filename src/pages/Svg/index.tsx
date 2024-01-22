const Svg = () => {
  return (
    <div>
      <svg width="800" height="800">
        <rect
          width="50"
          height="50"
          style={{ fill: 'red', strokeWidth: 1, stroke: 'black' }}
        />
        <line
          x1={100}
          y1={100}
          x2={250}
          y2={75}
          style={{ stroke: 'blue', strokeWidth: 1 }}
        />
        <circle
          cx={400}
          cy={100}
          r={50}
          style={{ fill: 'yellow', stroke: 'green', strokeWidth: 2 }}
        />
      </svg>
    </div>
  );
};

export default Svg;
