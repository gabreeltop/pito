'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    musica(){
        return this.belongsTo("App/Models/Musica")
    }
    musica(){
        return this.belongsToMany('App/Models/Musica')
    }
}

module.exports = Playlist
