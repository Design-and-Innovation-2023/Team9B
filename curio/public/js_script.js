
toggleConnect = document.getElementById(`toggleConnect`)
forward       = document.getElementById(`forward`)
backward      = document.getElementById(`backward`)
turnLeft      = document.getElementById(`turnLeft`)
turnRight     = document.getElementById(`turnRight`)
stopRobot     = document.getElementById(`stop`)

function sleep( milliseconds )
{
    return new Promise(resolve => setTimeout( resolve, milliseconds ));
}

// function getCurio()
// {
//     global global_curio
//     return global_curio
// }