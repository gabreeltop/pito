'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespostaSchema extends Schema {
  up () {
    this.create('respostas', (table) => {
      table.increments()
      table.string('texto', 45).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_pedido")
      .unsigned()
      .references("id")
      .inTable("pedidos")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('respostas')
  }
}

module.exports = RespostaSchema
