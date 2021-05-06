/****************************************
 * Domain specific configuraiton        *
 *    parameters                        *
 *                                      *
 * Look REGIONXYZ/LOG/ncl.out.* for corners
 ****************************************/

var corners = [];

corners["Bounds"]  = [];
corners["Centre"] = [];

corners.Bounds[4] = new google.maps.LatLngBounds(
    new google.maps.LatLng(48.0383492, 10.5565796), // SW
    new google.maps.LatLng(51.4547844, 21.0433960)  // NE
);
corners.Centre[4] = new google.maps.LatLng(49.7465668, 15.7999878);


var dayName   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var forecasts = [];

var Now = new Date().getTime();
var T = new Date();
T.setTime(Now);
var mS_Day = 24 * 60 * 60 * 1000;

var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()] + " - Today",
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+1/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day * 2);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+2/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day * 3);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+3/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day * 4);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+4/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day * 5);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+5/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)

T.setTime(Now + mS_Day * 6);
var f = {
    'name': dayName[T.getDay()] + ' ' + T.getDate() + ' ' + monthName[T.getMonth()],
    'latlon_file': 'latlon2d.json',
    'date': T.getTime(),
    'default_t': '1400',
    'dir': 'OUT+6/FCST/',
    'bounds': corners.Bounds[4],
    'centre': corners.Centre[4],
}
forecasts.push(f)
