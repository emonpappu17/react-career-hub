

const Banner = () => {
    return (
        <div className="md:flex flex-row-reverse justify-between items-center p-5  space-y-5">
            <div>
                <img src="../../../public/user.png" alt="" />
            </div>
            <div className="max-w-lg space-y-5">
                <h1 className="text-6xl font-semibold">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;