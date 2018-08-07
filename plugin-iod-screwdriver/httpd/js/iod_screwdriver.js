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
    priority: -150,
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
            '^Vibease\d\d$',
            '^PEARL$',
            '^PEARL2$',
            '^ONYX$',
            '^ONYX2$',
            '^LVS-[ABCHSZ].*$',
            '^LVS-HUSH$',
            '^Blow hole$',
            '^Surfer$',
            '^BKK Cup$',
            '^Elvie-.*',
            '^Life guard$',
            '^OhMiBod$',
	    '^OhMiBod esca$',
	    '^esca$',
            '^Cougar$',
            '^MISSVV.*$',
            '^IMTOY.*$',
            '^Flamingo$',
            '^kGoal$',
            '^Glow!$',
            '^4plus$',
            '^Bloom$',
            '^classic$',
            '^Ditto$',
            '^Gala$',
            '^Jive$',
            '^Nova$',
            '^NOVAV2$',
            '^Pivot$',
            '^Rave$',
            '^sync$',
            '^Verge$',
            '^Wish$',
            '^Picobong Male Toy$',
            '^Picobong Ring$',
            '^Picobong Butt Plug$',
            '^Egg driver$',
            '^Surfer_plug$',
            '^Picobong Egg$',
            '^KRUSH$',
            '^MB Controller$',
            '^KIIROO$',
            '^LAUNCH$',
            '^!vita$',
            '^Smart Mini Vibe$',
            '^CycSA$',
            '^Youcups$',
            '^FUSE$',
            '^THE COWGIRL$',
            '^BLOWBOT$',
            '^RABBIT$',
            '^SHADOW$',
	    '^Kiiroo$',
	    '^VIRTUAL STROKER$',
	    '^UfoSa$',
	    '^Bach Smart$',
	    '^banana$',
            '^eros$',
            '^fly$',
            '^gcup$',
            '^gilly$',
            '^hackbuteer$',
            '^hackbutter$',
	    '^hqs$',
            '^ihole$',
	    '^iv$',
	    '^iv-alma$',
	    '^iv-amy$',
	    '^iv-ann$',
	    '^iv-ivy$',
	    '^kitty$',
	    '^ladi$',
	    '^lagi$',
	    '^lava$',
	    '^levo$',
	    '^ninio$',
	    '^papa$',
	    '^rhino$',
	    '^rigee$',
	    '^tange$',
	    '^turbo$',
	    '^usexy$',
	    '^venuzi$',
	    '^vernuz$',
	    '^viroll$',
	    '^wow$',
            ];

        var wifi_names = [
            'some_wifi_regex',
            ];

        if (data['kismet.device.base.phyname'] === 'Bluetooth') {
            for (var re of bluetooth_names) {
//                if (data['kismet.device.base.name'].match(re) != null)
		 if (data['kismet.device.base.name'].match(new RegExp(re, 'i')) != null)
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
