import {PyScriptProvider,PyScript} from 'pyscript-react' ;
// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html
export default function Python( {codes} ) {

    return(
            <>
                <>
                    <PyScriptProvider>
                        <div id="matplotlibplot" name="matplotlibplot">Output</div>
                        {/* 
                        <PyScript 
                                output="matplotlibplot" 
                                generateOutputTag 
                                pyConfigProps={{ type: "json" , packages: new Set(["numpy","pandas","matplotlib"]), }} /> 
                        */}
                        <py-config>
                            packages = ["numpy","pandas","matplotlib"]
                            {/* plugins  = [] */}
                        </py-config>
                        <py-script>
                        {codes}
                        </py-script>
                    </PyScriptProvider>
                </>
            </>
          );
};