function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function sortedCategories(categories) {
  return Object.entries(countCategories(categories))
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);
}

const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

console.log(countCategories(categories));
console.log(sortedCategories(categories));
