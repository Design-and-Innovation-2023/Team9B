import { global_curio , Curio } from '../../components/Curio';

const curio = new Curio();

export async function GET( request )
{
    if( global_curio.getConnection() )
    {
        global_curio.turnLeft();
        console.log("turnLeft()");
        return new Response('turnLeft()')
    }
    else
    {
        console.log("Not Connected");
        return new Response('Not Connected')
    }
}