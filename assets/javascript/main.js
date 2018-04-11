$(document).ready(function () {

	// You can delete this function, it's only used for demo purposes to get a future date
	function futureDate() {
		var futureDate = new Date();
		futureDate.setDate(futureDate.getDate() + 60); 

		dd = futureDate.getDate();
		mm = futureDate.getMonth() + 1;
		y = futureDate.getFullYear();

		futureFormattedDate = mm + '/'+ dd + '/'+ y;

		return futureFormattedDate;
	}

	// Change the 'date' variable value to your desierd future date
	$('#countdown').countdown({
		date: futureDate()+' 12:00:00', // CHANGE THE DATE
		format: 'on'
	});

    // Check 'api/config.php' file to set your credentials
    $('#tweets').twittie({
        template: '<div class="tweet_avatar">{{avatar}}</div> {{tweet}}',
        count: 20
    });

    setInterval(function() {
        var item = $('#tweets ul li:first'),
            height = item.height()+15;

        item.animate( {marginTop: '-'+height+'px', 'opacity': '0'}, 500, function() {
            $(this).detach().appendTo('#tweets ul').removeAttr('style');
        });
    }, 5000);

	// This is a dummy subscribe form action
	$('#subscribe button').live('click', function (e) {
		var error = 0;
		e.preventDefault();

		$('#subscribe input').each(function () {
			if($(this).val().length > 0) {
				$(this).parents('div').removeClass('error');
			} else {
				$(this).parents('div').addClass('error');
				error = 1;
			}
		});

		if(error == 1) {
			$('.error_alert').fadeIn(function() {
				$(this).delay(1000).fadeOut();
			});
		} else {
			var action = $('#subscribe').attr('action');

			$.ajax({
				url: 'assets/email/'+action,
				type: 'POST',
				data: {
					name:  $('#subscribe input[name="name"]').val(),
					email: $('#subscribe input[name="email"]').val()
				},
				success: function(data){
					$('#subscribe').html("Got it, you've been added to our email list.");
				},
				error: function() {
					$('.error_alert').fadeIn(function() {
						$(this).delay(1000).fadeOut();
					});
				}
			});
		}
	});

    // Scroll button
    $('.scroll div').live('click', function () {
        height = $('.panel_1').height();
        $('html, body').animate({scrollTop: height}, 'slow');
    });
});