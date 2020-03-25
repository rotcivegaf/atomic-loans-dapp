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

const getFirstWord = function(phrase) {
  if (!phrase) {
    return "";
  }

  return phrase.split(" ", 2)[0];
};

const ethLength = 18;

function cutZeros(strNumber) {
  let zeros = 0;
  for (let i = strNumber.length; i >= 0; i--) if (strNumber[i] === "0") zeros++;

  return strNumber.slice(0, strNumber.length - zeros);
}

export function toFormatNumber(strNumber, symbol = "ETH", maxDigits = 9) {
  if (strNumber.length <= maxDigits)
    // aprox 0
    return strNumber + " WEI";

  if (strNumber.length <= ethLength) {
    const zeros = "0".repeat(ethLength - strNumber.length);
    strNumber = strNumber.slice(0, maxDigits - zeros.length);

    if (symbol) symbol = " " + symbol;

    return "0." + zeros + cutZeros(strNumber) + symbol;
  }

  const intPart = strNumber.slice(0, strNumber.length - ethLength);

  const decPart =
    "." + cutZeros(strNumber.slice(intPart.length, maxDigits + intPart.length));

  if (decPart != ".") return intPart + decPart + " " + symbol;
  else return intPart + " " + symbol;
}

export default {
  toShortVrs,
  toShortAddress,
  toBasePorcent,
  getFirstWord,
  toFormatNumber
};
