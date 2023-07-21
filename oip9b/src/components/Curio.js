import { DeviceController } from '@espruino-tools/core'

export class Curio extends DeviceController {

	state = false;

	setConnection(flag)
	{
		this.state = flag
	}

	getConnection()
	{
		return this.state;
	}

    forward()
    {
		this.UART.write(`go( 1000, 1000, 600 )\n`);
	}

    backward()
    {
		this.UART.write(`go( -1000, -1000, 600 )\n`);
	}

    turnLeft()
    {
		this.UART.write(`go( 1000, -1000, 600 )\n`);
	}

    turnRight()
    {
		this.UART.write(`go( -1000, 1000, 600 )\n`);
	}

	stop()
    {
		this.UART.write(`go(0, 0)\n`);
	}

};

