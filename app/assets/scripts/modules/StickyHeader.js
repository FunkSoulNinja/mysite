import $ from "jquery";
import waypoints from "waypoints/lib/noframework.waypoints";

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint() {
        var element = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            offset: "30%",
            handler: function(direction) {
                if (direction == "down") {
                    element.siteHeader.addClass("site-header--translucent");
                } else {
                    element.siteHeader.removeClass("site-header--translucent");
                }
            }
        });
    }


}

export default StickyHeader;
