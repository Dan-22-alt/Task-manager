const mongoose = require('mongoose');

// const URI = 'mongodb://localhost/auth';
const URI = 'mongodb+srv://dan:Dnsanianlau22@taskmancluster.pgq4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;