const scenes = {
  1: {
    id: 1,
    image: "images/scene1.png",
    storyText: "You stand at the base of the Misty Mountains. The path ahead splits in two directions.",
    choices: [
      { label: "Take the left path through the forest", next: 2 },
      { label: "Take the right path along the ridge", next: 3 }
    ]
  },
  2: {
    id: 2,
    image: "images/scene2.png",
    storyText: "The forest path leads you deeper into the woods.",
    choices: [
      { label: "Choice A", next: 4 },
      { label: "Choice B", next: 5 }
    ]
  },
  3: {
    id: 3,
    image: "images/scene3.png",
    storyText: "The ridge offers a breathtaking view of the valley below.",
    choices: [
      { label: "Choice A", next: 6 },
      { label: "Choice B", next: 7 }
    ]
  },
  4: {
    id: 4,
    image: "images/scene4.png",
    storyText: "Scene 4 placeholder.",
    choices: [
      { label: "Choice A", next: 8 },
      { label: "Choice B", next: 9 }
    ]
  },
  5: {
    id: 5,
    image: "images/scene5.png",
    storyText: "Scene 5 placeholder.",
    choices: [
      { label: "Choice A", next: 8 },
      { label: "Choice B", next: 9 }
    ]
  },
  6: {
    id: 6,
    image: "images/scene6.png",
    storyText: "Scene 6 placeholder.",
    choices: [
      { label: "Choice A", next: 8 },
      { label: "Choice B", next: 9 }
    ]
  },
  7: {
    id: 7,
    image: "images/scene7.png",
    storyText: "Scene 7 placeholder.",
    choices: [
      { label: "Choice A", next: 8 },
      { label: "Choice B", next: 9 }
    ]
  },
  8: {
    id: 8,
    image: "images/scene8.png",
    storyText: "Scene 8 placeholder.",
    choices: [
      { label: "Choice A", next: 10 },
      { label: "Choice B", next: 11 }
    ]
  },
  9: {
    id: 9,
    image: "images/scene9.png",
    storyText: "Scene 9 placeholder.",
    choices: [
      { label: "Choice A", next: 10 },
      { label: "Choice B", next: 11 }
    ]
  },
  10: {
    id: 10,
    image: "images/scene10.png",
    storyText: "Scene 10 placeholder.",
    choices: [
      { label: "Choice A", next: "endingA" },
      { label: "Choice B", next: "endingB" }
    ]
  },
  11: {
    id: 11,
    image: "images/scene11.png",
    storyText: "Scene 11 placeholder.",
    choices: [
      { label: "Choice A", next: "endingA" },
      { label: "Choice B", next: "endingB" }
    ]
  },
  endingA: {
    id: "endingA",
    image: "images/endingA.png",
    storyText: "Ending A — placeholder.",
    choices: []
  },
  endingB: {
    id: "endingB",
    image: "images/endingB.png",
    storyText: "Ending B — placeholder.",
    choices: []
  }
};
