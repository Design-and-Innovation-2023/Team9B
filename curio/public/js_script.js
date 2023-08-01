
_toggleConnect = document.getElementById(`toggleConnect`)
_forward       = document.getElementById(`forward`)
_backward      = document.getElementById(`backward`)
_turnLeft      = document.getElementById(`turnLeft`)
_turnRight     = document.getElementById(`turnRight`)
_reverseLeft   = document.getElementById(`reverseLeft`)
_reverseRight  = document.getElementById(`reverseRight`)
_rotateLeft    = document.getElementById(`rotateLeft`)
_rotateRight   = document.getElementById(`rotateRight`)
_stopRobot     = document.getElementById(`stop`)

function sleep( milliseconds )
{
    return new Promise(resolve => setTimeout( resolve, milliseconds ));
}