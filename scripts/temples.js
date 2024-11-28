
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModified;




const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classlist.toggle('open');
	hamButton.classList.toggle('open');
    menu.classList.toggle("active");
});