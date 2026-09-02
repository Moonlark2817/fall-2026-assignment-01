// export function getInventoryValue(
//   inventory: Array<[string, number, number]>,
// ): number {
//   return 0;
// }

export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  const eligibleItems = inventory.filter((item) => item[1] > 5);

  const totalValue = eligibleItems.reduce(
    (total, item) => total + item[1] * item[2],
    0,
  );

  return totalValue;
}
