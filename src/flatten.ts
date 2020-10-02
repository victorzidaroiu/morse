const flattenArray = (list: any[]) => list.reduce((accumulator, listElement) => accumulator.concat(
  Array.isArray(listElement) ? flattenArray(listElement) : listElement,
), []);

export default flattenArray;
