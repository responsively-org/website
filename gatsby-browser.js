import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

const scriptTag = document.createElement("script");
scriptTag.src = "https://analytics.responsively.app/tracker.js";
scriptTag.defer = true;
document.body.appendChild(scriptTag);