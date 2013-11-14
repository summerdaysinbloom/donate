function notification() {
	$('#notification').click(function() {
		$('#notification-overlay').addClass('show');
		$('#notification-window').addClass('show');
	})

	$('#close').click(function() {
		$('#notification-overlay').removeClass('show');
		$('#notification-window').removeClass('show');
	})
}