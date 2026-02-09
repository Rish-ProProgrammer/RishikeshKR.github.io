(function($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge:  [ '1281px',  '1680px' ],
        large:   [ '981px',   '1280px' ],
        medium:  [ '737px',   '980px'  ],
        small:   [ null,      '736px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height(); }
    });


	var $nav = $('#nav');
    var $navLinks = $nav.find('a');
    var $sections = $('article'); // Adjust if you use different tags for sections
    var $body = $('html, body');
    var isScrolling = true;

    // function updateActiveNav() {
    //     if (!isScrolling) return;

    //     var scrollPosition = $(window).scrollTop() + $nav.height();

    //     $sections.each(function() {
    //         var $section = $(this);
    //         var sectionTop = $section.offset().top;
    //         var sectionBottom = sectionTop + $section.outerHeight();

    //         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    //             var id = $section.attr('id');
    //             $navLinks.removeClass('active');
    //             $navLinks.filter('[href="#' + id + '"]').addClass('active');
    //         }
    //     });
    // }

    // function updateActiveNav() {
    //     if (!isScrolling) return;
    
    //     var scrollPosition = $(window).scrollTop() + $(window).height() ; // Changed to use window height
    
    //     $sections.each(function() {
    //         var $section = $(this);
    //         var sectionTop = $section.offset().top;
    //         var sectionBottom = sectionTop + $section.outerHeight();
    
    //         if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
    //             var id = $section.attr('id');
    //             $navLinks.removeClass('active');
    //             $navLinks.filter('[href="#' + id + '"]').addClass('active');
    //         }
    //     });
    
    //     // Special handling for the last section
    //     var $lastSection = $sections.last();
    //     var lastSectionTop = $lastSection.offset().top;
    //     var lastSectionBottom = lastSectionTop + $lastSection.outerHeight();
    
    //     if (scrollPosition >= lastSectionTop && scrollPosition >= lastSectionBottom) {
    //         var lastId = $lastSection.attr('id');
    //         $navLinks.removeClass('active');
    //         $navLinks.filter('[href="#' + lastId + '"]').addClass('active');
    //     }
    // }
function updateNavWindow() {
    // Only run this logic on smaller screens (e.g., less than 736px)
    if (window.innerWidth > 736) {
        document.querySelectorAll('#nav li').forEach(li => li.classList.remove('is-hidden'));
        return;
    }

    const navItems = Array.from(document.querySelectorAll('#nav li'));
    const activeIndex = navItems.findIndex(li => li.querySelector('a').classList.contains('active'));

    navItems.forEach((li, index) => {
        // Show if it's the active one, the one before, or the one after
        if (index === activeIndex || index === activeIndex - 1 || index === activeIndex + 1) {
            li.classList.remove('is-hidden');
        } else {
            li.classList.add('is-hidden');
        }
    });
}

// Run on load and whenever the window is resized
window.addEventListener('resize', updateNavWindow);
window.addEventListener('load', updateNavWindow);
    function updateActiveNav() {
        if (!isScrolling) return;
    
        var scrollPosition = $(window).scrollTop() + $(window).height(); // Default scroll position
    
        $sections.each(function() {
            var $section = $(this);
            var sectionTop = $section.offset().top;
            var sectionBottom = sectionTop + $section.outerHeight();
    
            // Check if we are in the last section
            var isLastSection = $section.is($sections.last());
    
            if (isLastSection) {
                // If in the last section, adjust the scroll position
                scrollPosition = $(window).scrollTop() + $(window).height();
            } else {
                scrollPosition = $(window).scrollTop() + $nav.height(); // Adjust for other sections
            }
    
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                var id = $section.attr('id');
                $navLinks.removeClass('active');
                $navLinks.filter('[href="#' + id + '"]').addClass('active');
            }
        });
    
        // Special handling for the last section
        var $lastSection = $sections.last();
        var lastSectionTop = $lastSection.offset().top;
        var lastSectionBottom = lastSectionTop + $lastSection.outerHeight();
    
        if ($(window).scrollTop() + $(window).height() >= lastSectionTop) {
            var lastId = $lastSection.attr('id');
            $navLinks.removeClass('active');
            $navLinks.filter('[href="#' + lastId + '"]').addClass('active');
        }
    }

    // Click event handler for nav links
    $navLinks.on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        var targetId = $(this).attr('href').substring(1); // Get target section ID
        var $targetSection = $('#' + targetId);

        // Temporarily disable scroll event handling
        isScrolling = false;

        // Scroll to the target section smoothly
        $body.animate({
            scrollTop: $targetSection.offset().top - $nav.height()
        }, 100, function() {
            // Update the active navigation link after scrolling is complete
            $navLinks.removeClass('active');
            $navLinks.filter('[href="#' + targetId + '"]').addClass('active');

            // Re-enable scroll event handling
            isScrolling = true;
        });
    });

    // Scroll event handler to update active nav link
    $(window).on('scroll', function() {
        updateActiveNav();
        updateNavWindow();
    });

    // Initialize active link on page load
    $(document).ready(function() {
        updateActiveNav();
        updateNavWindow();
    });

})(jQuery);

// To ensure that only one event—either clicking or scrolling—affects the active state at a time, you need to manage the interaction between scrolling and clicking effectively. Here's a refined approach to achieve this:

// 1. **Prevent Scroll Event from Interfering with Click Event**: When a user clicks a navigation link, you should temporarily disable the scroll event handler to avoid conflicts.

// 2. **Update the Active State on Click**: Ensure that clicking on a navigation link sets the active state properly and disables scroll-based activation until scrolling resumes.

// 3. **Re-enable Scroll Event Handling**: Once the user starts scrolling again, re-enable the scroll event handler to update the active state based on the scroll position.

// ### Updated JavaScript Approach

// Here’s how you can achieve this:

// ```javascript
// (function($) {
//     var $nav = $('#nav');
//     var $navLinks = $nav.find('a');
//     var $sections = $('section'); // Adjust if you use different tags for sections
//     var $body = $('html, body');
//     var isScrolling = true;

//     function updateActiveNav() {
//         if (!isScrolling) return;

//         var scrollPosition = $(window).scrollTop() + $nav.height();

//         $sections.each(function() {
//             var $section = $(this);
//             var sectionTop = $section.offset().top;
//             var sectionBottom = sectionTop + $section.outerHeight();

//             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                 var id = $section.attr('id');
//                 $navLinks.removeClass('active');
//                 $navLinks.filter('[href="#' + id + '"]').addClass('active');
//             }
//         });
//     }

//     // Click event handler for nav links
//     $navLinks.on('click', function(event) {
//         event.preventDefault(); // Prevent default link behavior

//         var targetId = $(this).attr('href').substring(1); // Get target section ID
//         var $targetSection = $('#' + targetId);

//         // Temporarily disable scroll event handling
//         isScrolling = false;

//         // Scroll to the target section smoothly
//         $body.animate({
//             scrollTop: $targetSection.offset().top - $nav.height()
//         }, 1000, function() {
//             // Update the active navigation link after scrolling is complete
//             $navLinks.removeClass('active');
//             $navLinks.filter('[href="#' + targetId + '"]').addClass('active');

//             // Re-enable scroll event handling
//             isScrolling = true;
//         });
//     });

//     // Scroll event handler to update active nav link
//     $(window).on('scroll', function() {
//         updateActiveNav();
//     });

//     // Initialize active link on page load
//     $(document).ready(function() {
//         updateActiveNav();
//     });

// })(jQuery);
// ```

// ### Explanation

// 1. **Scroll Handling Flag**: The `isScrolling` flag is used to determine whether the scroll event handler should update the active navigation link. It’s initially set to `true` and toggled to `false` when a navigation link is clicked.

// 2. **Click Event Handling**:
//     - `event.preventDefault()` stops the default link action.
//     - Smooth scrolling is handled with `$body.animate()`.
//     - Once scrolling is complete, the `active` class is updated, and `isScrolling` is set back to `true`.

// 3. **Scroll Event Handling**:
//     - The `updateActiveNav` function only updates the active navigation link if `isScrolling` is `true`.

// 4. **Initialization**:
//     - The `updateActiveNav` function is called on document ready to ensure the correct navigation link is active on page load.

// ### Additional Tips

// - **CSS**: Ensure that the `.active` class styles are applied correctly and do not conflict with other styles.
  
// - **Testing**: Test on different browsers and devices to ensure smooth operation, especially for smooth scrolling and updating active states.

// This approach ensures that the active navigation link is managed correctly based on either clicking or scrolling, but not both simultaneously.