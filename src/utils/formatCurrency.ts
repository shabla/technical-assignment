// Ideally the currency and locale would come from a config somewhere
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (value: number): string => {
  return currencyFormatter.format(value);
};
