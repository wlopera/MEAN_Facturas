1.- Instalar mongoJS:
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

      Suponiendo que ya ha instalado Node.js, cree un directorio para que contenga la aplicación y conviértalo en el directorio de trabajo.
      $ mkdir myapp
      $ cd myapp

  4.- Instalar y cnfigurar angularJS (OPCIONAL)

Adicionales:
-------------
  1.- npm install mongoose

  2.- npm install morgan

Los instaladores adicionales . Se pueden configurar en el package.json (npm install)

  Configurar package.json:  para express y mongo
      Utilice el mandato npm init para crear un archivo package.json para la aplicación. Para obtener más información sobre cómo funciona package.json, consulte Specifics of npm’s package.json handling.


      $ npm init

      Este mandato solicita varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Por ahora, sólo tiene que pulsar INTRO para aceptar los valores predeterminados para la mayoría de ellos, con la siguiente excepción:


      entry point: (index.js)

      Especifique app.js o el nombre que desee para el archivo principal. Si desea que sea index.js, pulse INTRO para aceptar el nombre de archivo predeterminado recomendado.

      A continuación, instale Express en el directorio app y guárdelo en la lista de dependencias. Por ejemplo:


      $ npm install express --save

      Para instalar Express temporalmente y no añadirlo a la lista de dependencias, omita la opción --save:


      $ npm install express


      Poner en funcionamiento el proyecto?

  Como ya hemos dicho no vamos a explicar como instalar NodeJS, Express y MongoDB ya que dependiendo del sistema operativo que utiliceis se hará de una forma o de otra y en Windows por ejemplo es bastante tedioso instalar esta herramientas, así que una vez que lo tengáis instalado todo debéis seguir los siguientes pasos:

      npm install : teneis que ejecutar este comando en la carpeta del proyecto para que se descargue las librerías de express y mongose, es decir las dependencias del proyecto (si tenéis problemas hacerlo como "sudo" o superusuario). Salvando las distancias, esta acción es similar ha hacer un "composer install" en symphony o descargarte los ".jar" definidos en el fichero "pom.xml" de Maven en Java.



      npm install

      node server.js: En la carpeta del proyecto teneis que lanzar este comando. Sino os funciona este poner "nodejs server.js". Este comando se para poner a correr el servidor y que el proyecto funcione.



      node server.js

      http://localhost:8080: Ya podemos ver nuestra aplicación web yendo al navegador y poniendo la URL de vuestra máquina local donde tengáis el proyecto. Como ya he dicho podéis poner el puerto que queráis siempre que este este libre, pero lo tenéis que definir en el fichero "server.js".

package.json:
============
{
  "name": "mean_facturas",
  "version": "1.0.0",
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
