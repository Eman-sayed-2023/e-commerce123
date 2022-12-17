(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	// $('#form-message-warning').html("Something went wrong. Please try again.");
				        //  $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        yourmessage: document.getElementById("message").value,
       

    };
    const seviceID = "service_l0wdory"
    const templateID = "template_pj5bazc"
    
    emailjs.send(seviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")

    }
)
.catch((err) => console.log(err));
}

