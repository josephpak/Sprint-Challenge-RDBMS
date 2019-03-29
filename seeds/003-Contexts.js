exports.seed = function(knex, Promise) {
  return knex('contexts').del()
    .then(function () {
      return knex('contexts').insert([
        {id: 1, name: "at home"},
        {id: 2, name: 'at computer'},
        {id: 3, name: 'online'},
        {id: 4, name: 'at work'}
      ]);
    });
};
