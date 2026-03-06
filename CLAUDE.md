The purpose of this app is to make a simple story based game, with one or two images displayed with scrolling text 
underneath, with two choices presented. 

It will use HTML/CSS and be hosted on a github page. 

It will utilize pre-loading, so that the next set of images will be loaded before the user makes a choice. 

## Decision Tree Architecture

The game uses a "diamond-shaped" decision tree: 5 turns of binary choices across 11 scene nodes + 2 endings (13 total scenes).

### Structure
```
Turn 1: 1 node   branches to 2
Turn 2: 2 nodes  each branches to 2 = 4
Turn 3: 4 nodes  merge down to 2  (this is the key trick)
Turn 4: 2 nodes  each offers choice leading to 2
Turn 5: 2 nodes  each leads to 1 of 2 endings
```

The tree fans out for turns 1-3, then merges back after turn 3. This means every turn 3 node's two choices map to the same two turn 4 nodes (Anim 8 or Anim 9). The same pattern applies at turn 45. This gives the player the feeling of meaningful divergence while keeping total content manageable.

### Node Map

| Node | Turn | Receives from | Choice A  | Choice B  |
|------|------|---------------|------------|------------|
| 1    | 1    | (start)       | 2          | 3          |
| 2    | 2    | 1A            | 4          | 5          |
| 3    | 2    | 1B            | 6          | 7          |
| 4    | 3    | 2A            | 8          | 9          |
| 5    | 3    | 2B            | 8          | 9          |
| 6    | 3    | 3A            | 8          | 9          |
| 7    | 3    | 3B            | 8          | 9          |
| 8    | 4    | 4A/5A/6A/7A   | 10         | 11         |
| 9    | 4    | 4B/5B/6B/7B   | 10         | 11         |
| 10   | 5    | 8A/9A         | Ending A   | Ending B   |
| 11   | 5    | 8B/9B         | Ending A   | Ending B   |

### Scene Data Format

Each scene node has:
- `id`: number (1-11, or "endingA"/"endingB")
- `image`: path to the scene image (Midjourney-generated, see below)
- `storyText`: narrative text displayed over/below the image
- `choices`: array of `{ label: string, next: id }` (empty for endings)

### Image Framing

All Midjourney images will be stored in this project folder, and I will add them as I go. Update the naming 
convention on them as needed. 
