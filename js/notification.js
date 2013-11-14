function notification(url) {
	$('#notification').click(function() {
		
	})

	$('#close').click(function() {
		$('#notification-overlay').removeClass('show');
		$('#notification-window').removeClass('show');
	})
}

function show_notification() {
  $('#notification-overlay').addClass('show');
  $('#notification-window').addClass('show');
}