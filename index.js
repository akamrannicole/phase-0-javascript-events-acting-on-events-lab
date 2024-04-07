// Your code here
// Define moveDodgerLeft function
function moveDodgerLeft() {
    const left = dodger.style.left.replace('px', '');
    const leftNum = parseInt(left, 10);

    if (leftNum > 0) {
        dodger.style.left = `${leftNum - 4}px`;
    }
}

// Define moveDodgerRight function
function moveDodgerRight() {
    const left = dodger.style.left.replace('px', '');
    const leftNum = parseInt(left, 10);

    if (leftNum < 360) {
        dodger.style.left = `${leftNum + 4}px`;
    }
}
