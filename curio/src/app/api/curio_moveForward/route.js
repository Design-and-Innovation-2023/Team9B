import { global_curio , Curio } from '../../components/Curio';

const curio = new Curio();

export function GET( request )
{

        global_curio.forward();
        console.log("forward()");
        return new Response('forward()')

}