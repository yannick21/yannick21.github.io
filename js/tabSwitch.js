//display different title if tab is switched
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Pulkit Bansal";
            $("#favicon").attr("href", "assets/images/avatar.png");
        }
        else {
            document.title = "Hey, Come Back!";
            $("#favicon").attr("href", "assets/images/favicon_eyes.jpeg");
        }
    }
);
