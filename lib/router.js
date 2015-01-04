Router.configure({
	layoutTemplate: 'layout'
});

//Set root path to postsLists template
Router.map(function() {
	this.route('postsList', {path: '/'});
});