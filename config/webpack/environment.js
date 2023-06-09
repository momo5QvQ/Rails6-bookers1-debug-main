const { environment } = require('@rails/webpacker')
//以下追加した部分
//const { ManifestPlugin } = require('webpack');

//environment.plugins.append(
  //'ManifestPlugin',
  //new ManifestPlugin()
//);
//ここまで

module.exports = environment;
