$(function() {
	var app = {
		init: function() {
			$('#loginBtn').on('click', function(event) {
				event.preventDefault();
				vkApi.login();
			});
			$('#logoutBtn').on('click', function(event) {
				event.preventDefault();
				vkApi.logout();
			});
			$('#getAvatarsBtn').on('click', function(event) {
				event.preventDefault();
				vkApi.getAvatars();
			});
		}
	}

	app.init();
});