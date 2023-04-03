// Get the FigerPose variable from the window
const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

// Define the gesture variable
const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // 🙅

  
// Rock ✊️
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper 🖐
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors ✌️
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Don't 🙅
// -----------------------------------------------------------------------------
for(const finger of Finger.all) {
    dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);

    dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
    dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);

    dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
    dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

// group the gestures already configured, that will be exported and used
const gestures = [
    rockGesture, paperGesture, scissorsGesture, dontGesture
]

export { gestures }