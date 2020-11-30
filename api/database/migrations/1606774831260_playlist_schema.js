'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
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
      .integer("id_musica")
      .unsigned()
      .references("id")
      .inTable("musicas")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistSchema
