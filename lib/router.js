Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function() { 
	this.render('postsList');
}, {
	name: 'postsList.index'
});