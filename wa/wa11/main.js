const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['image1.JPG', 'image2.JPG', 'image3.JPG', 'image4.JPG', 'image5.JPG'];

/* Declaring the alternative text for each image file */
var altDict = {
    'image1.JPG': "semi-cloudy day",
    'image2.JPG': "school district headquarters",
    'image3.JPG': "cliffs",
    'image4.JPG': "backyard sunset",
    'image5.JPG': "my street",
};
/* Looping through images */

for(img of imgArray){
const newImage = document.createElement('img');
newImage.setAttribute('src', img);
newImage.setAttribute('alt', altDict[img]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;

})
}

//btn.addEventListener("click", () => {
    //if(){

    //}
    //else {

    //}
//})
/* event listener for if button is dark then change the class if the button is light then change the class */

/* Wiring up the Darken/Lighten button */
