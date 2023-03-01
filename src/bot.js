require('dotenv').config()
const { token } = process.env
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} = require('discord.js')
const fs = require('fs')
const client = new Client({
  intents: 3276799,
  partials: [Partials.Channel]
})
/*API INIT*/
const { request } = require('undici')
const express = require('express')
const serveStatic = require('serve-static')
const { clientId, clientSecret, port } = require('./config.json')
const session = require('express-session');
const passport = require('passport');
const discordStrategy = require('./strategies/discordstrategy');
const db = require('./database/database')
const path = require('path');

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));
/*API INIT*/
const app = express()
client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.commandArray = []

const functionFolders = fs.readdirSync(`./src/functions`)
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter(file => file.endsWith('.js'))
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client)
}
client.handleEvents()
client.handleCommands()
client.handleComponents()
client.login(token)
/* --- API DASHBOARD --- */

// Routes
const authRoute = require('./api/auth');
const dashboardRoute = require ('./api/dashboard');


app.use(session({
  secret: 'some random secret',
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  resave: true,
  saveUninitialized: false,
  name: 'discord.oauth2'
}));


// Passport

app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute)

app.get('/', (req,res) =>{
  res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'})
})
//initialize Website
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
/*END OF API DASHBOARD ---*/
