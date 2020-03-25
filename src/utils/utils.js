const ethLength = 18;

function cutZeros(strNumber) {
  let zeros = 0;
  for (let i = strNumber.length; i >= 0; i--) if (strNumber[i] === "0") zeros++;

  return strNumber.slice(0, strNumber.length - zeros);
}

const toFormatNumber = function(strNumber, symbol = "", maxDigits = 9) {
  return 0;
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

export default {
  toFormatNumber
};
