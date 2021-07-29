/* Function to handle when the share arrow link clicked*/
function shareClickHandler() {

    /* Since the overlay is only used when the screen size < 600px.
       it will made visible and transformed when the screen size < 600px */
    const footerOverlay = document.getElementsByClassName('footer-overlay')[0];
    if (footerOverlay.style.transform === "" || footerOverlay.style.transform === "translateY(100%)")
    {
        footerOverlay.style.transform = "translateY(0)";
        footerOverlay.style.visibility = "visible";
    }
    else {
        footerOverlay.style.transform = "translateY(100%)";  
        footerOverlay.style.visibility = "hidden";
    }

    /* If the viewport is greater than 600px then hide the overlay
       regardless of what the current state overlay is in */
    const viewportSize = window.matchMedia("(min-width: 600px)");
    if (viewportSize.matches) { 
        const footerOverlay = document.getElementsByClassName('footer-overlay')[0];
    
        footerOverlay.style.visibility = "hidden";
        footerOverlay.style.transform = "translateY(100%)";
      }
}


/* This will called when screen is adjusted */
function resizeHandler(viewportSize) {
  /* The screen goes from below 600px to greater than 600px
     the hide the overlay */
  if (viewportSize.matches) { 
    const footerOverlay = document.getElementsByClassName('footer-overlay')[0];

    footerOverlay.style.visibility = "hidden";
    footerOverlay.style.transform = "translateY(100%)";
  }  
}


/* Add eventlistener for share arrow link. This needs to be done
   on the overlay and regular div */
const linkShare = document.getElementById('link-share');
const linkShareOverlay = document.getElementById('link-share-overlay');
linkShare.addEventListener('click', shareClickHandler);
linkShareOverlay.addEventListener('click', shareClickHandler);


/* Add eventlistener for screen resize */
const viewportSize = window.matchMedia("(min-width: 600px)");
resizeHandler(viewportSize);
viewportSize.addEventListener('change', resizeHandler);