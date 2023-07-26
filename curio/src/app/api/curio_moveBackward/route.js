import { global_curio , Curio } from '../../components/Curio';

const curio = new Curio();

export async function GET( request )
{
    if( global_curio.getConnection() )
    {
        global_curio.backward();
        console.log("backward()");
        return new Response('backward()')
    }
    else
    {
        console.log("Not Connected");
        return new Response('Not Connected')
    }
}