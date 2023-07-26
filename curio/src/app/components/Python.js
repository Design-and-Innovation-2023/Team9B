import                           '../styles/Python.css'
import { global_curio }     from './Curio';
import { PyScriptProvider } from 'pyscript-react' 

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

//export default function Python() {
export default function Python( { codes } ) {

    function checkConnection()
    {
        return global_curio.getConnection() 
    }

    function toggle_Connect() {

        if( ! global_curio.getConnection() )
        {
            global_curio.connect( ()=>{
                global_curio.setConnection(true)
            })
        }
        return;
    }

    return(
            <div>
                <input type="button" id="toggle_Connect" onClick={toggle_Connect} value="Connect" />
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
                                        <textarea id="python-example" width="auto" height="auto" defaultValue={codes} >
                                        </textarea>
                                    </div>
                            </td>
                            <td id="code_container">
                                    <div id="python-container">
                                        <span>Input:</span><br/>
                                        <script type="text/javascript">
                                            toggleConnect = document.getElementById(`toggle_Connect`)
                                        </script>
                                        <PyScriptProvider>
                                            <py-config>packages = ["numpy","pandas","matplotlib","scikit-learn"]</py-config>
                                            {/* <py-script>{codes}</py-script> */}
                                            <py-repl />
                                        </PyScriptProvider>
                                        <hr />
                                        <span>Output:</span><br/>
                                        <div id="output-container">
                                            <div id="py-terminal-div">
                                                <py-terminal id="py-terminal" output="output" />
                                            </div>
                                            <div id="output" name="output" />
                                        </div>
                                    </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          );
};