const knex = require('../database')

module.exports ={
  async index(req, res) {
    const results = await knex('users')
    return res.json(results)
  },
  async create(req, res, next){
    try {
      const user = { ...req.body }
      await knex('users').insert( user )
      return res.status(201).send()
    } catch (error) {
      next(error)
    }   
  },
  async update(req, res, next){
    try {
      const user = { ...req.body }
      const { id } = req.params

      await knex('users')
      .update(user)
      .where({ id })

      return res.send()

    } catch (error) {
        next(error)
    }
  },
  async delete(req, res, next){
    try {
      const { id } = req.params

      await knex('users')
      .where({ id })
      .del()

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}