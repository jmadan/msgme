var response = require('ringo/jsgi/response');
var mustache = require('ringo/mustache');
var model = require('./model')

exports.index = function (req) {
    var template = getResource("./templates/index.html").content;
    var user = model.dbname('person');

    return response.html(
        mustache.to_html(template, {
            title: "It's working!",
            person: user.findOne().data.name
        })
    );
};

exports.user = function (req) {
	var template = getResource("./templates/index.html").content;
	return response.html(mustache.to_html(template, {
		title: "This is second action"})
	);
};