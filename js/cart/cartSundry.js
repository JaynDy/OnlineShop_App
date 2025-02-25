export function toNum(str) {
  if (typeof str !== "string") {
    return 0;
  }

  const num = Number(str.replace(/[^0-9.-]+/g, ""));
  return isNaN(num) ? 0 : num;
}

export function toCurrency(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "$0";
  }

  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(num);

  return format;
}
