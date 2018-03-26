var UI = {};

window.onload = function() {
    // Find active elements
    var ids = ["lat", "lon"];
    for (var n = 0; n < ids.length; n++) {
        var e = document.getElementById(ids[n]);
        if (!e) {
            alert("Element not found: " + ids[n]);
            return;
        }
        UI[ids[n]] = e;
    }

    RefreshLocation();
}

function RefreshLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            UI.lat.innerHTML = pos.coords.latitude;
            UI.lon.innerHTML = pos.coords.longitude;
        });
    }

    // Queue up next location query    
    window.setTimeout(RefreshLocation, 5000);
}