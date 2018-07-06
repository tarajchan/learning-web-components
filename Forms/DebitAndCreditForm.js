function run() {
  let body = document.querySelector("body");
  let form = document.querySelector("form");

  function appendHeading() {
    let div = document.createElement("div");
    let hw = document.createTextNode("Credit/Debit Form");

    div.appendChild(hw);
    div.style.color = "white";
    body.insertBefore(div, form);
  }

  function changeFontColor() {
    let title = document.querySelector("legend");

    title.style.color = "black"
  }

  function appendImg() {
    let img = document.createElement("img");

    img.src = "../fabian-blank-78637-unsplash.jpg";
    img.style.height = "15rem";
    body.insertBefore(img, form);
  }

  function bgImg() {
    let url = 'url(../jimi-filipovski-189724-unsplash.jpg)';

    body.style.backgroundImage = url;
    body.style.backgroundSize ="20%";
  }

  function list() {
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let text1 = document.createTextNode("First Item");
    let text2 = document.createTextNode("Second Item");

    li1.appendChild(text1);
    ul.appendChild(li1);
    li2.appendChild(text2);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.style.color = "white";
    body.insertBefore(ul, form);
  }

  function footer() {
    let p = document.createElement("p");
    let text = document.createTextNode("This will be the footer.");

    p.appendChild(text);
    p.style.color = "white";
    body.appendChild(p);
  }

  appendHeading();
  changeFontColor();
  appendImg();
  bgImg();
  list();
  footer();
}

document.body.onload = run;
