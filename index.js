const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github
     * @example
     * usuario = 'dandres10'
     * @param {string} usuario 
     * @returns 
     */
    obtenerDatosDeUsuario: function (usuario) {
        const url = `https://api.github.com/users/${usuario}`;
        return axios.get(url).then(data => data.data)
            .catch(error => console.log(error));
    }
}