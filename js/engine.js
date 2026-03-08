const imageEl = document.getElementById("scene-image");
const storyTextEl = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

let currentScene = null;
let segments = [];
let segmentIndex = 0;
let history = [];

function preloadImages(scene) {
  // Preload all images in the current scene
  scene.images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  // Preload first image of each possible next scene
  scene.choices.forEach(choice => {
    const nextScene = scenes[choice.next];
    if (nextScene && nextScene.images.length > 0) {
      const img = new Image();
      img.src = nextScene.images[0];
    }
  });
}

function loadScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) return;

  if (currentScene) {
    history.push(currentScene.id);
  }

  currentScene = scene;
  segments = scene.storyText.split("||");
  segmentIndex = 0;

  choicesContainer.innerHTML = "";
  preloadImages(scene);
  showSegment();
}

function showSegment() {
  const scene = currentScene;
  const imgSrc = scene.images[segmentIndex] || scene.images[scene.images.length - 1];
  imageEl.src = imgSrc;
  choicesContainer.innerHTML = "";

  // Reset fade
  storyTextEl.classList.remove("visible");
  storyTextEl.textContent = segments[segmentIndex];

  // Trigger fade-in on next frame
  requestAnimationFrame(() => {
    storyTextEl.classList.add("visible");
  });

  // Show buttons after the fade completes
  const afterFade = () => {
    if (segmentIndex < segments.length - 1) {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = "Continue...";
      btn.addEventListener("click", () => {
        segmentIndex++;
        showSegment();
      });
      choicesContainer.appendChild(btn);
    } else {
      showChoices(scene);
    }
  };

  storyTextEl.addEventListener("transitionend", afterFade, { once: true });
}

function showChoices(scene) {
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => loadScene(choice.next));
    choicesContainer.appendChild(btn);
  });
  addGoBack();
}

function addGoBack() {
  if (history.length === 0) return;
  const btn = document.createElement("button");
  btn.className = "choice-btn go-back-btn";
  btn.textContent = "\u2190 Go Back";
  btn.addEventListener("click", () => {
    const prevId = history.pop();
    currentScene = null;
    loadScene(prevId);
  });
  choicesContainer.appendChild(btn);
}

// Start the game
loadScene(1);
