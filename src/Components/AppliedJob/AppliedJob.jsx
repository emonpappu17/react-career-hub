import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, location, salary, remote_or_onsite, job_type, id } = job
    return (
        <div className="flex items-center justify-between border p-5 rounded-2xl">
            <div className="flex items-center gap-6">
                <figure className="rounded-2xl w-64 flex items-center justify-center px-3 py-20 bg-[#F4F4F4]">
                    <img src={logo} />
                </figure>
                <div className="space-y-3">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className=" flex">
                        <h2 className="flex items-center mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}</h2>
                        <h2 className="flex items-center"><AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}</h2>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <button className="btn btn-primary">View Details</button>
            </div> */}
            <div>
                <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
};


export default AppliedJob;