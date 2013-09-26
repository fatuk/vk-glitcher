
var glitch = {
	init: function(){
		vkApi.init();
		$('#loginBtn').click(function(event){
		    event.preventDefault();
		    vkApi.login();
		});
		$('#logoutBtn').click(function(event){
		    event.preventDefault();
		    vkApi.logout();
		});
		$('#getFriendsBtn').on('click', function(event) {
			event.preventDefault();
			vkApi.getFriends();
		});
	}
};
