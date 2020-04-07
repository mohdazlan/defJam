const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path'); // this one doesn't need NPM install

const app = express();// instantiate express

// setting routes
app.get('/', (req, res) => {
  // res.send('Hello from my library app'); //sending some text
  // res.sendFile(__dirname + '/views/index.html');
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


// app.get('/',function (req,res) {   //arrow binding
//     res.sendFile(path.join(__dirname,'views/index.html'))
//    })

// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));// tell express we're goint tostick files in the dir; setting for css js dir
// app.use('/css',express.static(path,join(__dirname,'node_modules/bootstrap/dist/css')));
// app.use('/js',express.static(path,join(__dirname,'node_modules/bootstrap/dist/js')));
// app.use('/jquery',express.static(path,join(__dirname,'node_modules/bootstrap/dist/jquery')));
// app.use('/popper',express.static(path,join(__dirname,'node_modules/bootstrap/dist/popper.js/umd')));

// get express running
app.listen(3000, () => {
  // console.log('listening on port' + chalk.redBright(' 3000'));
  // console.log(`listening on port ${chalk.green('3000')}`);
  debug(`listening on port ${chalk.green('3000')}`);
});
