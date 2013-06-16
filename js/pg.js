document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    document.addEventListener("backbutton", onBackKeyDown, false);

}

function onBackKeyDown() {
    if ($.mobile.activePage.is('.intro')) {
        e.preventDefault();
        navigator.app.exitApp();
    } else {
        slider.slideout();
    }
}
