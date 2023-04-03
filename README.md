# Recognition multiple gestures 📽️🤷 [![](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection) <br id="top">

Finger gesture classifier for multiple hand landmarks detected by <a href="https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection">MediaPipe Handpose Detection</a>. It detects gestures like "Victory" ✌️ or "Thumbs Up" 👍 from both individual hands inside a source video stream.

# Summary 
- [Installation](#installation)
- [Demo](#demo)
- [Configuring the gestures](#config)
- - [Guide of fingers](#guide)
- - [Define gesture](#define)
- [Credits](#credits)

# Installation ⚙️ <a name="installation"></a>

Install with NPM
```console
npm install
```

In the browser you need to accept the 📽️ camera permission and do the gestures 🤷, to see the table log and emoji realized.

# Demo 📽️ <a name="demo"></a>

[![](https://img.shields.io/badge/GitHub%20Page-100000?style=for-the-badge&logo=github&logoColor=white)](https://jonathan-assis.github.io/recognizing-multiple-gestures-AI/)
> Note: This demonstration needs to accept the browser camera permission to provide detection

Currently added gestures:
- thumbs up 👍
- rock ✊️
- paper 🖐
- scissors/victory ✌️
- don't 🙅

# Configuring the gestures 💻 <a name="config"></a> 

First of all, you need to read the guide of fingers to know how to define the fingers and how much the **accurancy** you need to use.

## Guide of fingers 📖 <a name="guide"></a>

🖐 Each finger mapped by:

| Finger | Name |
|--|--|
| 0 | Finger.Thumb |
| 1 | Finger.Index |
| 2 | Finger.Middle |
| 3 | Finger.Ring |
| 4 | Finger.Pinky |

🤌 How much the finger is curl

| Curl | Name |
|--|--|
| 0 | FingerCurl.NoCurl |
| 1 | FingerCurl.HalfCurl |
| 2 | FingerCurl.FullCurl |

You can refer to the images below for an example of how the index finger is curled (no-curl, half curl, full curl):
| ![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/nocurl.jpg) | ![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/halfcurl.jpg) | ![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/fullcurl.jpg) |
|--|--|--|
| No curl | Half curl | Full curl |

👉 Finger pointing direction

| Direction | Name |
|--|--|
| 0 | Vertical Up 👆 |
| 1 | Vertical Down 👇|
| 2 | Horizontal Left 👈|
| 3 | Horizontal Right 👉 |
| 4 | Diagonal Up Right ↗️ |
| 5 | Diagonal Up Left ↖️ |
| 6 | Diagonal Down Right ↘️ |
| 7 | Diagonal Down Left ↙️ |

## Define gesture 👋 <a name="define"></a>

To create the gesture, you need to open the <a href="src/gestures.js">src/gestures.js</a> file, in this file you can add new gestures instantiating the class `GestureDescription` to define the gesture "name", after that you need to use function `addCurl` passing the params:
- `Finger` type: The type of the finger you would like to define the gesture;
- `FingerCurl`: how much the finger should be curl/bent;
- Accurancy: value that defines the acceptable precision of the gesture ranging from 0 to 1.

For example, to create the gesture Paper 🖐, you need to configure all fingers that are not curled to accept that they are the "paper gesture":
```javascript
// Get the FigerPose variable from the window
const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

// Define the gesture variable
const paperGesture = new GestureDescription('paper'); // 🖐

/* no finger should be curled
In this example the first param will be each finger, 
because all the finger will be the same config, so using the for loop to pass each finger the same config.

the second param we define No curl, because the paper gesture all the finger will be no curl to accept

the last param we define the acceptable accuracy of the parsed gesture, in this case we define 100%(1.0) of accuracy each finger will not be curled to accept
*/
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// group the gesture already configured, that will be exported and used
const gestures = [
    paperGesture
]

export { gestures }
```

After the gesture configured, you need to add the name and the emoji in the constant `gestureStrings ` on the <a href="src/index.js">src/index.js</a> file, like that:

```javascript
import { gestures } from "./gestures.js"

const config = {
    video: { width: 640, height: 480, fps: 50 }
  }

  const landmarkColors = {
    thumb: 'red',
    index: 'blue',
    middle: 'yellow',
    ring: 'green',
    pinky: 'pink',
    wrist: 'white'
  }

/* At here you add all gestures from the `const gestures` in the src/gestures.js file
like the paper gesture that you saw few moments ago
*/
  const gestureStrings = {
    'paper': '🖐',
  }
```

# Credits 🥇 <a name="credits"></a>


- Learning to use both hands to detect gestures by [Erick Wendel](https://github.com/ErickWendel/live-recognizing-multiple-gestures-tensorflowjs)

- Base repository on one-hand gesture detection and documentation  [Andreas Schallwig](https://github.com/andypotato/fingerpose)
- The hand gesture recognition module is based on the amazing work by [Prasad9](https://github.com/Prasad9/Classify-HandGesturePose)

[⬆ Back to top](#top)