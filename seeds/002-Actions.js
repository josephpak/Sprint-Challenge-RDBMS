exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {id: 1, description: "Book Venue", notes: "Book the San Diego convention center", completed: false, project_id: 1},
        {id: 2, description: "Construction Plan", notes: "Approve construction plan for theme park", completed: false, project_id: 2},
        {id: 3, description: "Advertise Opening", notes: "Create marketing plan for the theme park opening weekend", completed: false, project_id: 2}
      ]);
    });
};
