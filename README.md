# Api github
obtener los datos de un usuario introducido por parametros de la api

## Instrucciones de uso
Seguir las siguientes instrucciones.


### Instalacion

```
npm install proyecto-1b-api-github-09222022-0809
```

### Uso


```
const api = require('proyecto-1b-api-github');

api.obtenerDatosDeUsuario('dandres10').then(
    data => {
        console.log(data);
        if (data.message === undefined) { // OK message
            console.log('OK');
            console.log(data.login);
        } else {
            console.log(data.message); // ERROR message
        }
    }
);
```
