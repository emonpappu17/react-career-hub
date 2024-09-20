import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h2 className="text-4xl text-center mb-7">Oops!!!</h2>
                <Link to="/"><button className="btn">Go back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;