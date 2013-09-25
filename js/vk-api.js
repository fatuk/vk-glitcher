var vkApi = {
	init: function() {

	},
	login: function() {
		VK.Auth.login(null, VK.access.FRIENDS | VK.access.PHOTOS);
	},
	logout: function() {
		VK.Auth.logout();
	},
	getAvatars: function() {
		VK.Observer.subscribe('auth.login', function(response) {
          console.log(response);
        });
	},
	getData: function() {

	}
};