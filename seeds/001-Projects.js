exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'Comic Con', description: 'The nerdiest conference ever for comic book enthusiasts', completed: false},
        {id: 2, name: 'Toy Story Land', description: 'A theme park based around the premise of the Toy Story movies', completed: false}
      ]);
    });
};
