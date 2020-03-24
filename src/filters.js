//import numeral from 'numeral';

const toShortVrs = function(vrs) {
  if (!vrs) {
    return "$ 0";
  }

  return vrs.slice(0, 8) + "..." + vrs.slice(-6);
};

const toShortAddress = function(address) {
  if (!address) {
    return "$ 0";
  }

  return address.slice(0, 8) + "..." + address.slice(-6);
};

const toBasePorcent = function(fee) {
  if (!fee) {
    return "0%";
  }

  fee = fee / 100;

  return `${Number(fee).toFixed(2)} %`;
};

export default {
  toShortVrs,
  toShortAddress,
  toBasePorcent
};
