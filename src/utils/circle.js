const polarToCartesian = (x, y, r, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: x + r * Math.cos(rad),
    y: y + r * Math.sin(rad),
  };
};

const circle = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');

  return d;
};

export { polarToCartesian, circle };
