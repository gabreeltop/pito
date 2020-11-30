'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.string('pedidos', 45).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_resposta")
      .unsigned()
      .references("id")
      .inTable("respostas")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema
