'use strict';

const random = (min = 0, max) => {
  if (min === max) return max;
  const delta = max - min;
  const res = Math.floor(Math.random() * delta);
  return res;
};

module.exports = { random };
