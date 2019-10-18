import ImageFade from './modules/_imageFade';

let group1 = document.querySelectorAll(".group1 picture");
let group2 = document.querySelectorAll(".group2 picture");
let group3 = document.querySelectorAll(".group3 picture");
new ImageFade(group1, 3500);
new ImageFade(group2, 4500);
new ImageFade(group3, 3500);

