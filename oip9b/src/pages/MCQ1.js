import Prototype1 from '../components/Prototype1';

const MCQ1 = () =>
{
    return(
        <>
            <div>task : Help the Curio Robot reach point B</div>
            <Prototype1 />
        </>
    )
}

MCQ1.getLayout = (page) => (
    <div>
        {page} 
    </div>
  );

export default MCQ1;