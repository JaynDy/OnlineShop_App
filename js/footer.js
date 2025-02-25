const footer = document.createElement("footer");
function creatFooter() {
  footer.innerHTML = `
    <div class="information">
    <div class="links links-logo">
        <div class="logo-start">
            Fox
            <div class="imgfox"></div>
            shop
        </div>
        <a class="link" href=""
        >Lorem ipsum dolor sit amet consectetur consectetur</a
        >
        <a class="link" href="">Call us : 8956 3254 7887</a>
        <div class="icon-app">
        <a target="_blank" href="#"
            ><img class="app" src="icon/instagram.svg" alt="instagram" />
        </a>
        <a target="_blank" href="#"
            ><img class="app" src="icon/telegram.svg" alt="telegram" />
        </a>
        <a target="_blank" href="#"
            ><img class="app" src="icon/twitter.svg" alt="twitter" />
        </a>
        </div>
    </div>

    <div class="links shop">
        <div class="information-link">Shop</div>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
    </div>
    <div class="links product-links">
        <div class="information-link">Products</div>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
    </div>
    <div class="links collection">
        <div class="information-link">Collection</div>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
    </div>
    <div class="links weeklyUpdate">
        <div class="information-link">Weekly updates</div>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
    </div>
    <div class="links aboutUs">
        <div class="information-link">About us</div>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
        <a class="link" href="">Lorem ipsum</a>
    </div>
    </div>
    <div class="storelogo">Storelogo, 2023 All rights reserved</div>
  `;
  return footer;
}
document.body.appendChild(footer);
creatFooter();
