# Screenplay Web - Cypress

## Automatización Screenplay Web

En la rama principal encontrarás el Login Orange Demo y búsqueda en Google. El objetivo de este ejemplo es ver una implementacion del patrón un poco más compleja y robusta con todos los elementos del ScreenPlay.

## Configuración luego de clonar el proyecto y Ejecución por Terminal

Luego de clonar el proyecto, puedes ejecutar los siguientes comandos por CMD en la ruta donde se ha guardado o abrirlo en tu IDE de preferencia para luego ejecutar los comandos y que el proyecto descargue los paquetes e información necesaria para su correcta ejecución.

Instalar Cypress para que se descarguen todos los archivos necesarios para su ejecución.
```sh
npm init -y 
```
Instalar **npx** para ejecutar comandos por consola mucho mas fácil. 

```sh
npm install -g npx
```

Confirma que todo esta funcionando correctamente lanzando el siguiente comando.
```sh
npx cypress open
```

## La estrucutura del proyecto sería:

PROYECTO-CYPRESS-SCREENPLAY/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │       ├── google-search.cy.js
│   │       └── login.cy.js
│   │   
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   ├── support/
│   │   ├── screenplay/
│   │   │   ├── abilities/
│   │   │   │   └── BrowseTheWeb.js
│   │   │   │
│   │   │   ├── actors/
│   │   │   │   └── Actor.js
│   │   │   │
│   │   │   ├── interactions/
│   │   │   │   ├── Click.js
│   │   │   │   ├── Type.js
│   │   │   │   ├── Press.js
│   │   │   │   └── Wait.js
│   │   │   │
│   │   │   └── tasks/
│   │   │       ├── Navigate.js
│   │   │       ├── Search.js
│   │   │       ├── VerifyResults.js
│   │   │       ├── Login.js
│   │   │       └── VerifyDashboard.js
│   │   │
│   │   ├── ui/
│   │   │   ├── GoogleHomePage.js
│   │   │   ├── GoogleResultsPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── DashboardPage.js
│   │   │
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── cypress.config.js
│
├── node_modules/
├── package-lock.json
└── package.json

Espero poder ayudarte a estrucutrar de otra forma tu proyecto cypress con screemplay. 

Muchas gracias.

***Luis Farco Oviedo***