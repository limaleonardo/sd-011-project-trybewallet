export default function currencyTypeFilter(currencies) {
  const keyToRemove = 'USDT';
  const currenciesArray = Object.keys(currencies);

  const filteredArray = currenciesArray.filter((valueToCheck) => (
    valueToCheck !== keyToRemove
  ));

  return filteredArray;
}
