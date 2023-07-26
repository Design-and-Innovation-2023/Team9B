'use client'

import { global_curio , Curio } from '../../components/Curio';

export function GET( request )
{
    if( global_curio.getConnection() )
    {
        console.log("Connected");
        return new Response('Connected')
    }
    else
    {
        console.log("Not Connected");
        return new Response('Not Connected')
    }
}