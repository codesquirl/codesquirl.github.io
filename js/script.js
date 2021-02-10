
const StaticUtils = function() {

    this.show = function(element) {
        if (element.hasAttribute("data-display-value")) {
            element.style.display = element.getAttribute("data-display-value");
            if (element.style.display === 'none' || element.style.display.trim().length === 0) {
                element.style.display = 'block';
            }
            element.removeAttribute("data-display-value");
        } else {
            element.style.display = 'block';
        }
    }
    this.hide = function(element) {
        if (!element.hasAttribute("data-display-value") && element.style.display !== 'none') {
            element.setAttribute("data-display-value", element.style.display);
        }
        element.style.display = 'none';
    }

    this.empty = function(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
};
const UTILS = window.UTILS = new StaticUtils();