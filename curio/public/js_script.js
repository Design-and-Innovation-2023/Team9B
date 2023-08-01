DeviceController = ESPT_core.DeviceController;

function sleep( milliseconds )
{
    return new Promise(resolve => setTimeout( resolve, milliseconds ));
}

class CurioController extends DeviceController
{
    state  = false;

    setConnection(flag)
	{
		this.state = flag;
		return;
	}

    getConnection()
	{
		return this.state;
	}

    connect()
    {
        super.connect();
        console.log("Connecting to curio robot");
        this.setConnection(true);
        return;
    }

    disconnect()
    {
        super.disconnect();
        console.log("Disconnecting from curio robot");
        this.setConnection(false);
        return;
    }

    sleep(milliseconds)
    {
        return new Promise(resolve => setTimeout( resolve, milliseconds ));
    }

    forward()
    {
		this.UART.write(`go( 1000, 1000, 600 )\n`);
		console.log("moving forward");
		return;
	}

    backward()
    {
		this.UART.write(`go( -1000, -1000, 600 )\n`);
		console.log("moving backward");
		return;
	}

	turnLeft()
    {
		this.UART.write(`go( 1000, 0, 600 )\n`);
		console.log("turning left");
		return;
	}

    turnRight()
    {
		this.UART.write(`go( 0, 1000, 600 )\n`);
		console.log("turn right");
		return;
	}

	reverseLeft()
    {
		this.UART.write(`go( 0, -1000, 600 )\n`);
		console.log("reverse left");
		return;
	}

    reverseRight()
    {
		this.UART.write(`go( -1000, 0, 600 )\n`);
		console.log("reverse right");
		return;
	}

    rotateLeft() // anti-clockwise
    {
		this.UART.write(`go( 1000, -1000, 600 )\n`);
		console.log("rotate anti-clockwise");
		return;
	}

    rotateRight() // clockwise
    {
		this.UART.write(`go( -1000, 1000, 600 )\n`);
		console.log("rotate clockwise");
		return;
	}

	stop()
    {
		this.UART.write(`go(0, 0)\n`);
		console.log("moving stopped");
		return;
	}
}

_toggleConnect   = document.getElementById(`toggleConnect`);
_forward         = document.getElementById(`forward`);
_backward        = document.getElementById(`backward`);
_turnLeft        = document.getElementById(`turnLeft`);
_turnRight       = document.getElementById(`turnRight`);
_reverseLeft     = document.getElementById(`reverseLeft`);
_reverseRight    = document.getElementById(`reverseRight`);
_rotateLeft      = document.getElementById(`rotateLeft`);
_rotateRight     = document.getElementById(`rotateRight`);
_stopRobot       = document.getElementById(`stop`);
curio            = new CurioController();
