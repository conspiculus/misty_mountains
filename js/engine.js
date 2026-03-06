const imageEl = document.getElementById("scene-image");
const storyTextEl = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

let currentScene = null;
let segments = [];
let segmentIndex = 0;
let textInterval = null;

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
  storyTextEl.textContent = "";
  choicesContainer.innerHTML = "";

  if (textInterval) clearInterval(textInterval);

  const text = segments[segmentIndex];
  let charIndex = 0;

  textInterval = setInterval(() => {
    storyTextEl.textContent += text[charIndex];
    charIndex++;
    if (charIndex >= text.length) {
      clearInterval(textInterval);
      textInterval = null;

      if (segmentIndex < segments.length - 1) {
        // More segments — show a "continue" tap target
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = "Continue...";
        btn.addEventListener("click", () => {
          segmentIndex++;
          showSegment();
        });
        choicesContainer.appendChild(btn);
      } else {
        // Final segment — show choices
        showChoices(scene);
      }
    }
  }, 30);
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
