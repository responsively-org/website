import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

const scriptTag = document.createElement("script");
scriptTag.src = "https://analytics.responsively.app/tracker.js";
scriptTag.setAttribute("data-api", "https://analytics.responsively.app/track");
scriptTag.setAttribute("data-domain", "responsively.app");
document.body.appendChild(scriptTag);
