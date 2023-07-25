import { PyScriptProvider } from 'pyscript-react' 

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function Python( {codes} ) {

    return(
            <div>
                <PyScriptProvider>
                    <py-config>packages = ["numpy","pandas","matplotlib"]</py-config>
                    <py-script>{codes}</py-script>
                </PyScriptProvider>
            </div>
          );
};