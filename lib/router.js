Router.configure({ 
	layoutTemplate: 'layout'
});

Router.route('/', function() { 
	this.render('postsList');
}, {
	name: 'postsList.index'
});