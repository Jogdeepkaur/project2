const button = document.getElementById('hamburger');
const links  = document.getElementById('main-nav-list');

button.addEventListener( 'click', function() {
    links.classList.toggle( 'toggled' );
} );
