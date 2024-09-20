import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { PiSubtitlesLight } from "react-icons/pi";
import { LiaPhoneSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const [handleToast, setHandleToast] = useState(false);
    // console.log(id, jobs);
    // console.log(useParams()); // {id: '1'}
    const idInt = parseInt(id)
    // const job = jobs.find(job => job.id == id); //akhne kintu id string akare ase ar jobs er bitor id number akare ase/ string number match korate chile == dileo hoy but niche sting k number a convert  kore kora hoise
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const handleApplyJOb = () => {
        saveJobApplication(idInt)
        if(!handleToast){
            toast.success('You have applied successfully');
            setHandleToast(true)
        }
        else{
            toast.info('You have applied already');
        }
    }

    return (
        <div>
            <h1 className="text-center text-4xl md:my-14 my-7">Job Details</h1>
            <div className="grid gap-4 md:grid-cols-4 p-5">
                <div className=" md:col-span-3">
                    <p><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <br />
                    <p><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <br />
                    <p><span className="font-bold">Educational Requirements:</span><br />{job.educational_requirements}</p>
                    <br />
                    <p><span className="font-bold">Experiences:</span><br />
                        {job.experiences}</p>
                </div>
                <div className="space-y-5">
                    <div className="p-4 space-y-3 border rounded-3xl">
                        <h3 className="font-bold">Job Details</h3>
                        <hr />
                        <h3 className="flex items-center"><AiOutlineDollar className="mr-2 text-[#7E90FE]"></AiOutlineDollar><span className="font-semibold mr-1">Salary:</span> <span> {job.salary}</span></h3>
                        <h3 className="flex items-center md:items-start"><PiSubtitlesLight className=" text-[#7E90FE] mr-2 h-fit w-fit md:text-2xl"></PiSubtitlesLight><span className="font-semibold mr-1 text-nowrap">Job Title:</span> <span> {job.job_title}</span></h3>
                        <h3 className="font-bold">Contact Information</h3>
                        <hr />
                        <h3 className="flex items-center"><LiaPhoneSolid className="mr-2 h-fit text-[#7E90FE]"></LiaPhoneSolid><span className="flex items-start"><span className="font-semibold mr-1">Phone:</span> <span> {job.contact_information.phone}</span></span></h3>
                        <h3 className="flex items-center"><AiOutlineMail className="mr-2 text-[#7E90FE]"></AiOutlineMail><span className="font-semibold mr-1">Email:</span> <span> {job.contact_information.email}</span></h3>
                        <h3 className="flex items-center md:items-start"><CiLocationOn className="mr-2 md:text-5xl h-fit text-[#7E90FE]"></CiLocationOn><span className="font-semibold mr-1">Address:</span> <span> {job.contact_information.address}</span></h3>
                    </div>
                    <div>
                        <button onClick={handleApplyJOb} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;