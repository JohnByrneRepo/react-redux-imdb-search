const express = require('express');
const webpack = require('webpack');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const config = require('../../webpack.config.dev');
// const api = require('./api.routes');
const app = express();
const compiler = webpack(config);

app.use(morgan('dev'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use('/api', api);

app.use(express.static(path.join(__dirname, '../..')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
