// Import our custom CSS
import '../scss/styles.scss'

import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";

import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";

import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "./carousel.js"


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

const container = document.getElementById("myCarousel");
const options = {
    infinite: false,
    Navigation: false,
    Thumbs: {
        type: "classic",
    },
};

new Carousel(container, options, { Thumbs });
