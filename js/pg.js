document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    document.addEventListener("backbutton", onBackKeyDown, false);

}

function onBackKeyDown() {
    if (slider.current == "intro") {
        alert('test');
        e.preventDefault();
        navigator.app.exitApp();
    } else {
        slider.slideout();
    }
}
