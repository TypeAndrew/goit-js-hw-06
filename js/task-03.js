const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector(".gallery");
const pEl = document.querySelector("p");
const divEl = document.createElement("div");
pEl.insertAdjacentElement("afterend", divEl);

let html = "";
images.forEach((element) => {
    html += `<li style="height: 1200px; list-style-type: none"><img src=${element["url"]}
     style="height: 100%; background-size: cover" alt=${element["alt"]}></li>`;
})


if (galleryEl !== null) {

    divEl.append(galleryEl);
    galleryEl.insertAdjacentHTML("afterbegin", html);
    galleryEl.style.display = "flex";

} else {
    console('DOM object don\'t find!');
}