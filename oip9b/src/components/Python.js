import {PyScriptProvider,PyScript} from 'pyscript-react' 

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function Python( {codes} ) {

    return(
            <PyScriptProvider>
                <py-config>packages = ["numpy","pandas","matplotlib"]</py-config>
                <py-script>{codes}</py-script>
            </PyScriptProvider>
          );
};