
toggleConnect = document.getElementById(`toggleConnect`)
forward       = document.getElementById(`forward`)
backward      = document.getElementById(`backward`)
turnLeft      = document.getElementById(`turnLeft`)
turnRight     = document.getElementById(`turnRight`)
reverseLeft   = document.getElementById(`reverseLeft`)
reverseRight  = document.getElementById(`reverseRight`)
rotateLeft    = document.getElementById(`rotateLeft`)
rotateRight   = document.getElementById(`rotateRight`)
stopRobot     = document.getElementById(`stop`)

function sleep( milliseconds )
{
    return new Promise(resolve => setTimeout( resolve, milliseconds ));
}