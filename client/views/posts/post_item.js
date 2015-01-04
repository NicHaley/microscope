Template.postItem.helpers({
	domain: function(){
		var a = document.createElement('a');
		// This refers to the iterated object specifed in the posts_list.html #each iterator
		a.href = this.url;
		return a.hostname;
	}
});