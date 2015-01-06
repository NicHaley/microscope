Posts = new Meteor.Collection('posts');

Meteor.methods({
	postInsert: function(postAttributes) {
		var user = Meteor.user(),
		// First check to see if a post with the same link already exists
		postWithSameLink = Posts.findOne({url: postAttributes.url});
		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new stories");
		// ensure the post has a title
		if (!postAttributes.title)
			throw new Meteor.Error(422, 'Please fill in a headline');
		// throw an error for posts with the same link
		if (postAttributes.url && postWithSameLink) { throw new Meteor.Error(302,
			'This link has already been posted',
			postWithSameLink._id); }
		// pick out the fields that we want to insert
		var post = _.extend(_.pick(postAttributes, 'url', 'title'), 
			{ userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		//Insert the post
		var postId = Posts.insert(post);

		//Return the new post's id to the user
		return postId; 
	}
});