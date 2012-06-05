(function () {
    var matchMediaSupported = document.querySelector("#matchmedia-supported"),
        width600 = document.querySelector("#width-600"),
        height500 = document.querySelector("#height-500"),
        portraitOrientation = document.querySelector("#portrait-orientation"),
        width600Check,
        height500Check,
        portraitOrientationCheck;

    if (window.matchMedia) {
        matchMediaSupported.innerHTML = "supported";

        // Establishing media check
        width600Check = window.matchMedia("(min-width: 600px)"),
        height500Check = window.matchMedia("(min-height: 500px)"),
        portraitOrientationCheck = window.matchMedia("(orientation: portrait)");
       
        // Add listeners for detecting changes
        width600Check.addListener(setValues);
        height500Check.addListener(setValues);
        portraitOrientationCheck.addListener(setValues);
    }

    function setWidthValue (mediaQueryList) {
        width600.innerHTML = mediaQueryList.matches;
    }

    function setHeightValue (mediaQueryList) {
        height500.innerHTML = mediaQueryList.matches;
    }

    function setOrientationValue (mediaQueryList) {
        portraitOrientation.innerHTML = mediaQueryList.matches;
    }

    function setValues () {
        width600.innerHTML = width600Check.matches;
        height500.innerHTML = height500Check.matches;
        portraitOrientation.innerHTML = portraitOrientationCheck.matches;
    }

    window.addEventListener("DOMContentLoaded", setValues, false);
})();

