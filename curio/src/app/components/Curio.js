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
		this.UART.write(`go( 1000, -1000, 600 )\n`);
		console.log("turning left");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

	turnLeft2()
    {
		this.UART.write(`go( 500, -500, 600)\n`);
		console.log("turning left2");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

	turnLeft3()
    {
		this.UART.write(`go( 1333.33, -1333.33, 600 )\n`);
		console.log("turning left2");
		// setTimeout( this.stop.bind(this) , 1800 );
		return;
	}

    turnRight()
    {
		this.UART.write(`go( -1000, 1000, 600 )\n`);
		console.log("turning right");
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

