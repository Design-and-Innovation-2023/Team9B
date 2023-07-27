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

    async forward()
    {
		await this.UART.write(`go( 1000, 1000, 600 )\n`);
	}

    async backward()
    {
		await this.UART.write(`go( -1000, -1000, 600 )\n`);
	}

    async turnLeft()
    {
		await this.UART.write(`go( 1000, -1000, 600 )\n`);
	}

    async turnRight()
    {
		await this.UART.write(`go( -1000, 1000, 600 )\n`);
	}

	async stop()
    {
		await this.UART.write(`go(0, 0)\n`);
	}

	async customCommand(text_cmd)
	{
		try
		{
			let proper_cmd = String(text_cmd) + "\n";
			await this.UART.write( proper_cmd );
		}
		catch(err)
		{
			console.log(err);
		}
	}

};

export const global_curio = new Curio();

