const { obtenerDatosDeUsuario } = require('../index');
const { expect } = require('chai');
var nock = require('nock');
const dandres10 = require('./respuestas/dandres10')

describe('Test de datos de diferentes usuarios de GitHub', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/dandres10')
            .reply(200, dandres10)
    })
    it('Obtener datos del usuario dandres10', () => {
        return obtenerDatosDeUsuario('dandres10').then((result) => {
            //probar el tipo de variable que se obtiene de respuesta debe ser un objeto
            expect(typeof result).to.equal('object');
            //comprobar que el usuario es dandres10
            expect(result.login).to.equal('dandres10');

        }).catch((err) => {

        });;
    })
})