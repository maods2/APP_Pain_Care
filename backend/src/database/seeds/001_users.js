
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Darlan', email:'darlan.nascimento16@gmail.com', password:'teste', doctor: true},
        { name: 'Matheus', email:'matheus.agt.engenharia@gmail.com', password:'teste', doctor: true},
        { name: 'Taylan', email:'taylantorres@gmail.com', password:'teste', pacient: true},
        { name: 'Rayane',email:'andradez.rayanne@gmail.com', password:'teste', pacient: true}

      ]);
    });
};
