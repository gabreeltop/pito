'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resposta extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    pedido(){
        return this.belongsTo("App/Models/Pedido")
    }
    pedido(){
        return this.belongsToMany('App/Models/Pedido')
    }
}

module.exports = Resposta
