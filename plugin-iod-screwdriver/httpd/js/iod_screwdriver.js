(
  typeof define === "function" ? function (m) { define("iod-screwdriver-js", m); } :
  typeof exports === "object" ? function (m) { module.exports = m(); } :
  function(m){ this.iod_screwdriver = m(); }
)(function () {

"use strict";

var exports = {};

// Flag we're still loading
exports.load_complete = 0;

kismet_ui.AddDeviceRowHighlight({
    name: "IoD Device",
    description: "Detect and highlight known IoD devices",
    priority: 100,
    defaultcolor: "#ff6699",
    defaultenable: true,
    fields: [
        'kismet.device.base.phyname',
        'kismet.device.base.name'
    ],
    selector: function(data) {
        var bluetooth_names = [
            '^Vibratissimo$',
            '^MV Crescendo$',
            '^VIBEASE.*$',
            '^PEARL$',
            '^ONYX$',
            '^LVS-.*$',
            '^Blow hole$',
            '^Surfer$',
            '^BKK Cup$',
            '^Elvie-.*$',
            '^Life guard$',
            '^OhMiBod$',
            '^Cougar$',
            '^MISSVV.*$',
            '^IMTOY.*$',
            '^Flamingo$',
            '^kGoal$',
            '^Glow!$',
            ];

        var wifi_names = [
            'some_wifi_regex',
            ];

        if (data['kismet.device.base.phyname'] === 'Bluetooth') {
            for (var re of bluetooth_names) {
                if (data['kismet.device.base.name'].match(re) != null)
                    return true;
            }
        } else if (data['kismet.device.base.phyname'] === 'IEEE802.11') {
            for (var re of wifi_names) {
                if (data['kismet.device.base.name'].match(re) != null)
                    return true;
            }
        }

        return false;
    }
});


// We're done loading
exports.load_complete = 1;

return exports;

});
