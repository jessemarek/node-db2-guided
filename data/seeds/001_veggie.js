
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('veggies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert(generateData());
    });
};

function generateData() {
  return [
    { name: 'red pepper', color: 'red', tasty: true },
    { name: 'broccoli', color: 'green', tasty: true },
    { name: 'carrot', color: 'orange', tasty: false }
  ]
}