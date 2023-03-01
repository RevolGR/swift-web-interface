const mongoose = require('mongoose');
module.exports = mongoose.connect(`mongodb+srv://revol:${process.env.databasepass}@swift.rx9v6hh.mongodb.net/discordauth`,{ useNewUrlParser: true });