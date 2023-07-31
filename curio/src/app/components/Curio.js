import { DeviceController } from '@espruino-tools/core'

export class Curio extends DeviceController {

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

    forward()
    {
		this.UART.write(`go( 1000, 1000, 600 )\n`);
		console.log("moving forward");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    backward()
    {
		this.UART.write(`go( -1000, -1000, 600 )\n`);
		console.log("moving backward");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

	turnLeft()
    {
		this.UART.write(`go( 1000, 0, 600 )\n`);
		console.log("turning left");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    turnRight()
    {
		this.UART.write(`go( 0, 1000, 600 )\n`);
		console.log("turn right");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

	reverseLeft()
    {
		this.UART.write(`go( 0, -1000, 600 )\n`);
		console.log("reverse left");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    reverseRight()
    {
		this.UART.write(`go( -1000, 0, 600 )\n`);
		console.log("reverse right");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    rotateLeft() // anti-clockwise
    {
		this.UART.write(`go( 1000, -1000, 600 )\n`);
		console.log("rotate anti-clockwise");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    rotateRight() // clockwise
    {
		this.UART.write(`go( -1000, 1000, 600 )\n`);
		console.log("rotate clockwise");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

	stop()
    {
		this.UART.write(`go(0, 0)\n`);
		console.log("moving stopped");
		return;
	}

	customCommand(text_cmd)
	{
		try
		{
			let proper_cmd = String(text_cmd) + "\n";
			this.UART.write( proper_cmd );
			return;
		}
		catch(err)
		{
			console.log(err);
		}
		return;
	}

};

export const global_curio = new Curio();

