
exports.up = knex =>  knex.schema.createTable('users', table => {
  table.increments('id').primary().unsigned() 
  table.string('name').notNull()
  table.string('email').notNull().unique()
  table.string('password').notNull()
  table.boolean('doctor').notNull().defaultTo(false)
  table.boolean('pacient').notNull().defaultTo(false)
  table.timestamp('deletedAt')
})

exports.down = knex =>  knex.schema.dropTable('users')



