***Notes
**Day1
* npm install webpack globally npm install webpack-dev-server -g
* running webpack runs the configuration of webpack which builds a output bundle.js file which should be included in html files.
* running webpack-dev-server —inline loads html pages as changes are being made
* including ‘require’ to create dependency chains in js
* ‘babel’ to transpile ES6 to ES5
* Running webpack command can consolidate/combine all js into one bundle.js file as per webpack config
* minifying javascript for prod release can be done by using webpack -p command
* After minifying it is not good to use webpack-dev-server instead use web app localhost:8080 server
* strip-loader is used to remove console.log statements from js file before prod release
* jshint can be used to check for errors in javascript every time we save or run server

**Day2
* Organizing html, js files in their directory and referring to files using path module
* Instead of combining all js into one bundle.js, multiple bundles can be created if we want one js per html file. This can be added in the webpack config file.
* Common js can be loaded across all html files as well using CommonsChunkPlugin

Issue: new keyword doesn’t seem to work - Add ES6 support by following the module
Issue Resolved: javascript is case sensitive and the constructor was misunderstood to use camel casing. Reverting that method call to remove camel casing fixes the issue.

**Day3
* Dealing with CSS npm install css-loader style-loader —save-dev
* css additions are made as require statements in the corresponding js file
* css files are added completely into the html as style tags by compiler to avoid additional network request for each css file.
* css also gets minified in production while we build using webpack -p
* There is a way to combine all CSS into one file and have it as a separate network request instead of embedding all css into head of html. This is done using npm install extract-text-webpack-plugin —save-dev
* SASS and LESS css loaders compile CSS
* Auto Prefixer adds prefixes to each css that is used in our project which can be used to identify which module css we are referring to. 

Issue: CSS file is not loaded into the index.html file
Issue Resolved: Had to install file-loader and url-loader npm modules. Also I was not able to reference bootstrap node module instead I had to copy it to a css folder in my application. Also had to reference the above loaders in webpack config file as below
{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/, loader: 'url-loader?limit=100000'}

**Day4
* Loading images  into webpack
* Loading fonts into webpack
Express backend running along side with the front end
* Run webpack middleware for express
* Loaders work but they do not offer a way to create global variables and hence we move to plugins

**Day5
Plugins are like Grunt Tasks. They create a global variables
* JQuery plugin allows you to run jQuery from any page with $() or jQuery() 
* Timestamp plugin adds timestamp of web server restarts into a json file
* Banner plugin adds a text banner to all complied js/css files
React Build
* babel is used to convert jsx to js es5
* react .15 has different methods for render and it required react dom as well.
* Seconds ticker app js file is transpiled by babel preset react
* .babelrc file should be updated to include react