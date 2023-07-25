import                           '../styles/Python.css'
import { PyScriptProvider } from 'pyscript-react' 

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html


//export default function Python() {
export default function Python( {codes} ) {

    return(
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>
                                <span>Hint</span>
                            </th>
                            <th>
                                    <span>Copy the following Python codes and paste it into the Python console and click on the play button to execute.</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="sample_container">
                                    <div id="sample-codes">
                                        <textarea id="python-example" width="auto" height="auto">
                                        {codes}
                                        </textarea>
                                    </div>
                            </td>
                            <td id="code_container">
                                    <div id="python-container">
                                        <PyScriptProvider>
                                            <py-config>packages = ["numpy","pandas","matplotlib"]</py-config>
                                            {/* <py-script>{codes}</py-script> */}
                                            <py-repl />
                                        </PyScriptProvider>
                                        <div id="py-terminal-div">
                                            <py-terminal id="py-terminal" output="output" />
                                        </div>
                                        <div id="output" name="output" />
                                    </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          );
};