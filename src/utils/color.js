const randomShade = (h) => {
  const s = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  const l = Math.floor(Math.random() * (50 - 30 + 1) + 30) / 100;

  const a = s * (Math.min(l, 1 - l) / 100);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };

  return `#${f(0)}${f(8)}${f(4)}d9`;
};

const randomColor = () => `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;

export { randomColor, randomShade };
