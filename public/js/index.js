let config = null;
let loader = document.getElementById("loader");
let slider = document.getElementById("slider");
let emojisContainer = document.getElementById("emojis");

const showEmojis = (emojis) => {
  emojisplosion({
    container: document.getElementsByClassName("header")[0],
    count: 50,
    emojis,
    position: () => ({ x: 0, y: 0 }),
  });
};

slider.addEventListener("change", ({ target: { value } }) => {
  let index = Math.floor(value / 10);
  if (index >= config.animations.length) index = config.animations.length - 1;
  showEmojis(config.animations[index]);

  fetch("/mood/" + value, {
    method: "POST",
  });
});

window.addEventListener("load", async () => {
  config = await fetch("/config").then((r) => r.json());

  let mood = await fetch("/mood").then((r) => r.json());

  for (let emoji of config.emojis) {
    let span = document.createElement("span");
    span.innerText = emoji;
    emojisContainer.append(span);
  }

  slider.value = mood;
  slider.max = config.emojis.length * 10;

  loader.remove();
});
