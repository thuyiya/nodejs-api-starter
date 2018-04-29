[![GitHub tag](https://img.shields.io/github/tag/thuyiya/nodejs-api-starter.svg?style=flat-square)](https://github.com/thuyiya/nodejs-api-starter/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/thuyiya/nodejs-api-starter.svg?style=flat-square)](https://github.com/thuyiya/nodejs-api-starter/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/thuyiya/nodejs-api-starter/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/thuyiya/nodejs-api-starter.svg?style=flat-square)](https://github.com/thuyiya/nodejs-api-starter/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/thuyiya/nodejs-api-starter.svg?style=flat-square)](https://github.com/thuyiya/nodejs-api-starter/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/thuyiya/nodejs-api-starter.svg?style=flat-square)](https://github.com/thuyiya/nodejs-api-starter/issues-pr)

# Nodejs Stater Kit

Nodejs Stater Kit is a starter kit for beginers.

# New Features!

  - Config with new auth
  - Connect with defarent database
  - Auth0
  - SSL
  - Mail server
  - Stop brute Force Attack
  - Microservices

You can also:
  - Config this new one using this structre
  - Can remove unusable features

> The overriding design goal for project formatting syntax is to make it as readable, can work with ruler

### Tech

Softwares and Recommended Node.js Libraries:

* [VsCode](https://code.visualstudio.com/) - awesome web-based text editor!
* [Robomongo](https://robomongo.org/) - for conect with mongoDb
* [Nodemon] - Automatically restart Node.js server on code changes
* [Readme Creator](https://dillinger.io/) - For create readme file

### Installation

This kit requires [Node.js](https://nodejs.org/) v6+ to run.

First of all clone this reposteries.

```sh
$ git clone 
$ cd nodejs-stater-kit
$ npm install
```

configer .env...

```sh
$ npm i -g nodemon
$ mv .env.default .env
$ code .
```

### Plugins

Stater kit is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Express | Node.js web framework |
| Github | github	GitHub API library |
| body-parser | Express 4 middleware |
| express-session | Express 4 middleware |
| mongoose | MongoDB ODM. |
| dotenv | Loads environment variables from .env file. |
| mocha | Test framework. |
| chai | BDD/TDD assertion library |
| async | Utility library that provides asynchronous control flow. |
| paypal-rest-sdk | PayPal APIs library. |
| nodemailer | Node.js library for sending emails. |
| morgan | HTTP request logger middleware for node.js. |
| body-parser | Node.js body parsing middleware. |
| cookie-parser | Parse Cookie header and populate req.cookies with an object keyed by the cookie names. |

### Development

Up and running

Want to contribute? Great!
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ npm run start:dev
```

(optional) Third:
```sh
$ npm run test
```

### In case of missing things

##### 1. Config with babel

 - create `.babelrc` on root
 - add this .babelrc
 `
  {
    "presets": ["es2015", "stage-2"],
    "plugins": []
  }
 `
 - install babel npm
```sh
$ npm i --save-dev babel-cli babel-preset-es2015 babel-preset-stage-2
```

##### 2. Eslint configaration

 - "CMD + ,"
 - add `.eslintrc` in root
 - the add `"eslint.autoFixOnSave": true,`
 - add this to .eslintrc
 ```
 {
  "env": {
    "es6": true,
    "node": true,
    "mocha": false
  },
  "extends": "eslint-config-standard"
}
 ```
 - install eslint npm
 ```sh
  $ npm i --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

##### 3. Add Editor Configaration

 - Create `.editorconfig` in root or install editorconfig plugin to VsCode
 ```
 # http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
 ```


##### 4. Genarate api docs for public
in terminal
  ```sh
  $ npm install apidoc -g
  $ apidoc -i web/routes/api/ -o public/apidoc
  ```

##### 5. Debug configaration with `launch.json` VsCode

launch.json
```
  ...
    "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "program": "${workspaceRoot}/app.js",
          "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
          "cwd": "${workspaceRoot}",
          "sourceMaps": true
      },
      {
          "type": "node",
          "request": "attach",
          "name": "Attach to Process",
          "port": 5858
      }
    ]
}
```

### Kill server

If you got like `listen EADDRINUSE :::3000` after you try to re run the serve, you have to kill the pid

```sh
$ lsof -i :<PORT>

$ kill -9 <PID>
```


### SSL

1. create pem `openssl genrsa -out thuyiya-key.pem 2048`
2. check `more thuyiya-key.pem` 
3. certificate request using key `openssl req -new -sha256 -key thuyiya-key.pem -out thuyiya-csr.pem`
4. create certificate base on request `openssl x509 -req -in thuyiya-csr.pem -signkey thuyiya-key.pem -out thuyiya-cert.pem`

5. add them to application
```
var options = {
    key: fs.readFileSync('thuyiya-key.pem'),
    cert: fs.readFileSync('thuyiya-cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
}
```
6. create serve with default cert
```
https.createServer(options, app).listen(3000, () => {
    console.log('listening to 3000 (HTTPS Server)')
})
```

#### Understanding the File Structure
```
│
└───config
│   │   index.js
│   │   setups
│   │      │  common.js
│   │      │  facebook.js
│   │      │  index.js
│   │      │  google.js
│   │      │  redis.js
│   │      │  server.js
│
└───models
│   │   user
│   │     │ profile.js
│   │     │ contact.js
│   │   index.js
│
└───test
│   │   api.test.js
│
└───web
│   │   index.js
│   │
│   └───routes
│       │   api
             └─── index.js
│       │   index.js
│       │
│       middleware
│       │   index.js
│       │
│
│   .babelrc
│   .eslintrc
│   .editorconfig
│   App.js
│   package.json
│   README.md
```

License
----

[MIT](LICENSE)

![alt text](https://cldup.com/QHVAB_xBFk.png)
