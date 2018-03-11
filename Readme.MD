MEAN_facturas:
-------------

Instalaciones Requeridas:
-------------------------

  1.- Instalar nodeJS:
  https://nodejs.org/en/download/

  2.- Instalar MongoDB
      https://www.mongodb.com/download-center#community

      En Community Service descargar
        mongodb-win32-x86_64-2008plus-ssl-3.6.3-signed.msi
      instalar
        - Abrir consola de windows - CMD
        - > mongod (recuerad crear la ruta de la base de datos ex: d:\data\db)
        - > mongo (levanta la seccion - cuidado con el puerto "27017" o "27666")


  3.- Instalar Express

      http://expressjs.com/es/starter/installing.html

      Si ya esta instalado instalado Node.js, cree un directorio que contenga
      la aplicación y conviértalo en el directorio de trabajo.

      $ mkdir myapp
      $ cd myapp

  4.- Instalar y configurar angularJS (OPCIONAL)

Adicionales:
-------------
  1.- npm install mongoose

  2.- npm install morgan

Los instaladores adicionales . Se pueden configurar en el package.json (npm install)

Configuraciones:
---------------
  Configurar package.json:  para express y mongo

      Utilice el mandato "npm init" para crear un archivo package.json para la aplicación.

      $ npm init

      Este mandato solicita varios elementos como, por ejemplo, el nombre y la versión de la aplicación.
      Por ahora, sólo tiene que pulsar INTRO para aceptar los valores predeterminados para la mayoría de ellos,
      con la siguiente excepción:

      entry point: (index.js)

      Especifique app.js o el nombre que desee para el archivo principal.
      Si desea que sea index.js, pulse INTRO para aceptar el nombre de archivo predeterminado recomendado.

      A continuación, instale Express en el directorio app y guárdelo en la lista de dependencias.
      Por ejemplo:

        $ npm install express --save

      Para instalar Express temporalmente y no añadirlo a la lista de dependencias, omita la opción --save:

        $ npm install express

CODIGO:
------
Copiar o bajarse el codigo fuente.


Poner en funcionamiento el proyecto?

      Luego de instalar NodeJS, Angular (opcional), Express y MongoDB:

      npm install : teneis que ejecutar este comando en la carpeta del proyecto para que se descargue las librerías de express y mongose, es decir las dependencias del proyecto.
      Es similar al uso  del fichero "pom.xml" de Maven en Java

      - npm install

      Para subir el servidor en la carpeta del proyecto lanzar el comando "node server.js"

      node server.js

      Para ver la aplicacion funcionando (el puerto es el definido en server.js)
      http://localhost:8080:

NOTAS:
-----

package.json:
============
{
  "name": "mean_facturas",
  "version": "1.0.0",ge
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "Error: No existe prueba especificada \" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2",
    "express-logger": "0.0.3",
    "mongoose": "^5.0.9",
    "morgan": "^1.9.0"
  }
}
