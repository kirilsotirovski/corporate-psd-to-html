jQuery(document).ready(function() {
    "use strict";

    $('#slider-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination: {
            container: ".sliderpager",
            anchorBuilder: false
        }
});

$(window).scroll(function() {
    var top = $(window).scrollTop();
    if(top>=60)
    {
        $("header").addClass('secondary-darkblue-bg');
    }
    else if ($("header").hasClass('secondary-darkblue-bg')) {
        $("header").removeClass('secondary-darkblue-bg');
    }
});

$('#portfolio-carousel').carouFredSel({

    responsive:true,
    width:'100%',
    circular:true,
    prev:'#prev',
    next:'#next',
    scroll:{
        items:1,
        duration:500,
        pauseOnHover: true
    },
    auto:true,
    items:{
        visible:{
            min:1,
            max:4
        },
        height:"variable"
    }
});

$('#team-carousel').carouFredSel({

    responsive:true,
    width:'100%',
    circular:true,
    prev:'#prev-team',
    next:'#next-team',
    scroll:{
        items:1,
        duration:500,
        pauseOnHover: true
    },
    auto:true,
    items:{
        visible:{
            min:1,
            max:4
        },
        height:"variable"
    }
});

$('.testimonials-carousel').carouFredSel({

    responsive:true,
    width:'100%',
    circular:true,
    scroll:{
        items:1,
        duration:500,
        pauseOnHover: true
    },
    auto:true,
    items:{
        visible:{
            min:1,
            max:1
        },
        height:"variable"
    },
        pagination: {
            container: ".testipager",
            anchorBuilder: false
        }
});
$("#menu").slicknav({
    label: '',
});

$('#main').stellar();

$('.animation').each(function() {
    var waypoint = new Waypoint({
        element: this,
        handler: function(direction) {
          var animation = $(this.element).attr('data-animation');
          $(this.element).css('opacity', '1');
          $(this.element).addClass("animated " + animation);
        },
        offset: '75%' 
      })
    })
/* SMOOTH SCROLLING */
// $('a').smoothScroll();


/* One page nav */
$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
	
});

/* Functional contact form */
$('.contact #submit').on('click', function() {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message  = $('#message').val();
    var form = new Array({'name': name, 'email': email, 'subject': subject, 'message': message});

    $.ajax({
        type: 'POST',
        url: "contact.php",
        data: ({'action': 'contact', 'form': form})
    }).done(function(data) {
        $('#contact .result').html(data);
        $(".contact-form")[0].reset();
    });
});



});