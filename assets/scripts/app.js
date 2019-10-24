import sal from 'sal.js/dist/sal';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.min';
import SmoothScroll from 'smooth-scroll';
import MobileMenu from './modules/_menuMobile';

new MobileMenu();
new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
sal();




