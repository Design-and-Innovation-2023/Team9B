import { PyScriptProvider } from 'pyscript-react' 

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html


//export default function Python() {
export default function Python( {codes} ) {

    return(
            <div>
                <span>Copy the following Python codes and paste it into the Python console and click on the play button to execute.</span>
                <div id="sample-codes">
                    <textarea width="auto" height="auto">
                    {codes}
                    </textarea>
                </div>
                <div id="python-container">
                    <PyScriptProvider>
                        <py-config>packages = ["numpy","pandas","matplotlib"]</py-config>
                        {/* <py-script>{codes}</py-script> */}
                        <py-repl></py-repl>
                    </PyScriptProvider>
                    <div id="py-terminal-div">
                        <py-terminal id="py-terminal" />
                    </div>
                    <div id="output" name="output" />
                </div>
            </div>
          );
};