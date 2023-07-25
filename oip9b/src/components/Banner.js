import { Link } from 'react-router-dom';

export default function Banner() {
    return(
            <div>
                <Link to="/">Curio Controller</Link><br/>
                <Link to="/mcq1">MCQ Question #1</Link><br/>
                <Link to="/openended1">Open Ended Python Question #1</Link><br/>
                <hr />
            </div>
    );
};