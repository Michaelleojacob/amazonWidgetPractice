const app = document.querySelector(".app");

const log = (data) => console.log(data);

// data
const a = [
  {
    id: 1,
    title: "english",
    greeting: "hello!",
  },
  {
    id: 2,
    title: "french",
    greeting: "bonjour!",
  },
  {
    id: 3,
    title: "spanish",
    greeting: "hola!",
  },
];

// all dom stuff
const mainComp = document.createElement("div");
const nav = document.createElement("div");
const body = document.createElement("div");
mainComp.append(nav);
mainComp.append(body);

a.map((lang) => {
  const langButton = document.createElement("button");
  langButton.textContent = lang.title;
  langButton.addEventListener(
    "click",
    () => (body.textContent = lang.greeting)
  );
  nav.append(langButton);
});

app.append(mainComp);
