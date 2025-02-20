'use strict';

const methods = (iface) => {
  const result = [];
  for (const key in iface) {
    const method = iface[key];
    if (typeof method === 'function') {
      result.push([key, method.length]);
    }
  }
  return result;
};

module.exports = { methods };
