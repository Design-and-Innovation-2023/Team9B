
toggleConnect = document.getElementById(`toggleConnect`)
forward       = document.getElementById(`forward`)
backward      = document.getElementById(`backward`)
turnLeft      = document.getElementById(`turnLeft`)
turnRight     = document.getElementById(`turnRight`)
stopRobot     = document.getElementById(`stop`)
sleep         = document.getElementById(`sleep`)
movement1     = document.getElementById(`movement1`)

function sleep2( milliseconds )
{
    return new Promise(resolve => setTimeout( resolve, milliseconds ));
}

