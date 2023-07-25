import Python from '../components/Python'

// https://github.com/Py4Js/pyscript-react
// https://pyscript.net/examples/matplotlib.html

export default function OpenEnded1( {codes} ) {

    const python_codes  = 
    `
      import numpy             as np
      import matplotlib.pyplot as plt
      x = np.array([2,3,4,5,6,7,8])
      y = np.array([3,2,1,0,1,2,3])
      fig, ax = plt.subplots()
      plt.scatter( x , y )
      display(fig)
      print("Hello World")
    `;

    return(
            <>
                <Python codes={python_codes} />
            </>
          );
};