// hamburger navbar start 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-items");

hamburger.addEventListener("click", (event) => {
    event.preventDefault();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click", (event) => {
        event.preventDefault();
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }
    ));
// hamburger navbar end


// smoot scrolling start
$(document).ready(function () {
	var count = 0;
	// Add smooth scrolling to all links
	$("a").on("click", function (event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$("html, body").animate(
		  {
			scrollTop: $(hash).offset().top,
		  },
		  800,
		  function () {
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  }
		);
	  } // End if
	});

	// sticky navigation bar
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky')
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
			$('div.cart').addClass("showCart");
		}else{
			$('.scroll-up-btn').removeClass("show");
			$('div.cart').removeClass("showCart");
		}
	});

	$('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
	// end sticky navigation bar

	// Active navigation bar
	var sections = document.querySelectorAll("section");
	onscroll = function(){
		var scrollPosition = document.documentElement.scrollTop;
		sections.forEach((section) => {
			if(scrollPosition >= section.offsetTop + section.offsetHeight){
				var currentId = section.attributes.id.value;
				removeAllActiveClasses();
				addActiveClass(currentId);
			}
		});
	};
		var removeAllActiveClasses = function(){
			document.querySelectorAll("nav a").forEach(el => {
				el.classList.remove("activeColor")
			});
		};
		var addActiveClass = function(id){
			console.log(id);
			var selector = `nav a[href="#${id}"]`;
			document.querySelector(selector).classList.add("activeColor");
		};
		onscroll = function (){
			var scrollPosition = this.document.documentElement.scrollTop;
			sections.forEach((section) => {
				if( scrollPosition >= section.offsetTop - section.offsetHeight * 0.15 &&
					scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.15

					){
						var currentId = section.attributes.id.value;
						removeAllActiveClasses();
						addActiveClass(currentId);
					}
			});
		};
		var removeAllActiveClasses = function(){
			document.querySelectorAll(".list-nav .nav-link").forEach((el) => {
				el.classList.remove("activeColor");
			});
		};
		var addActiveClass = function(id){
			var selector = `.list-nav .nav-link[href="#${id}"]`;
			document.querySelector(selector).classList.add("activeColor");
		};

		// counter start
	$("button.addCart-btn").click(function(event) {
		count++;
		$("button.addCart-btn").addClass("size");
		setTimeout(function() {
			$("button.addCart-btn").addClass("hover");
		}, 200);
		setTimeout(function() {
			$(".cart > span").addClass("counter");
			$(".cart > span.counter").text(count);
		}, 400);
		setTimeout(function() {
			$("button.addCart-btn").removeClass("hover");
			$("button.addCart-btn").removeClass("size");
		}, 600);
		event.preventDefault();
	});
	// counter end

  });
// smoot scrolling start