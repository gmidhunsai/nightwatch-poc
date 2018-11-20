/* var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: __dirname + '/reports'
});
module.exports = {
	reporter: reporter.fn
};*/

var allure = require("nightwatch-allure-adapter");

module.exports = {
    reporter: allure.write
};