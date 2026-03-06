const imageEl = document.getElementById("scene-image");
const storyTextEl = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

function preloadImages(scene) {
  scene.choices.forEach(choice => {
    const nextScene = scenes[choice.next];
    if (nextScene) {
      const img = new Image();
      img.src = nextScene.image;
    }
  });
}

function loadScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) return;

  imageEl.src = scene.image;
  storyTextEl.textContent = "";
  choicesContainer.innerHTML = "";

  // Scrolling text effect
  let charIndex = 0;
  const textInterval = setInterval(() => {
    storyTextEl.textContent += scene.storyText[charIndex];
    charIndex++;
    if (charIndex >= scene.storyText.length) {
      clearInterval(textInterval);
      showChoices(scene);
    }
  }, 30);

  preloadImages(scene);
}

function showChoices(scene) {
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => loadScene(choice.next));
    choicesContainer.appendChild(btn);
  });
}

// Start the game
loadScene(1);
