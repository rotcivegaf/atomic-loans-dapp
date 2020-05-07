import web3Utils from "web3-utils";

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

const ethLength = 18;

function cutZeros(strNumber) {
  let zeros = 0;
  for (let i = strNumber.length; i >= 0; i--) if (strNumber[i] === "0") zeros++;

  return strNumber.slice(0, strNumber.length - zeros);
}

const toFormatId = function(strNumber, maxDigits = 2) {
  strNumber = web3Utils.toBN(strNumber).toString();
  if (strNumber.length <= maxDigits)
    // aprox 0
    return strNumber;

  if (strNumber.length <= ethLength) {
    const zeros = "0".repeat(ethLength - strNumber.length);
    strNumber = strNumber.slice(0, maxDigits - zeros.length);

    return "0." + zeros + cutZeros(strNumber);
  }

  const intPart = strNumber.slice(0, strNumber.length - ethLength);

  const decPart =
    "." + cutZeros(strNumber.slice(intPart.length, maxDigits + intPart.length));

  if (decPart != ".") return intPart + decPart + " ";
  else return intPart + " ";
};

const toFormatPrice = function(strNumber, symbol = "ETH", maxDigits = 2) {
  strNumber = web3Utils.toBN(strNumber).toString();
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
};

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }

  const d = new Date(inputFormat);

  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

const toDate = function(strNumber) {
  if (web3Utils.toBN(strNumber).gt(web3Utils.toBN("4294967296")))
    return "> " + convertDate(4294967296 * 1000);

  return convertDate(web3Utils.toBN(strNumber).toNumber() * 1000);
};

export default {
  toShortAddress,
  toBasePorcent,
  toFormatId,
  toFormatPrice,
  toDate
};
