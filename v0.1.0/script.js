const log = (data) => console.log(data);

/**
 * 1 main component
 * 3 tabs
 * tabs switch the main component output
 */

const appContainer = document.querySelector("#app_container");

class MainComp {
  constructor() {
    this.el = document.createElement("div");
    this.el.classList.add("main_container");
    appContainer.appendChild(this.el);
    this.nav = document.createElement("div");
    this.nav.classList.add("nav_container");
    this.el.appendChild(this.nav);
    this.body = document.createElement("div");
    this.body.classList.add("body_container");
    this.el.appendChild(this.body);
    this.tabs = 0;
  }
  appendToNav(el) {
    this.nav.appendChild(el);
    this.tabs = this.tabs + 1;
  }
}

const mainComponent = new MainComp();

class Tab {
  constructor(title, greeting) {
    this.el = document.createElement("div");
    this.el.classList.add(`tab_${title}`, "tab_button");
    this.el.textContent = title;
    this.title = title;
    this.greeting = greeting;
    this.body = document.querySelector(".body_container");
    this.onClick();
  }
  onClick() {
    this.el.addEventListener("click", () => {
      this.body.textContent = this.greeting;
    });
  }
}

const englishTab = new Tab("english", "hello!");
mainComponent.appendToNav(englishTab.el);

const spanishTab = new Tab("spanish", "hola!");
mainComponent.appendToNav(spanishTab.el);

const frenchTab = new Tab("french", "bonjour!");
mainComponent.appendToNav(frenchTab.el);
