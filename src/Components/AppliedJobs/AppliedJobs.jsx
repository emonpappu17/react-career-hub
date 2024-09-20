import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(Array.isArray(jobs));
    
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (Array.isArray(jobs) && jobs.length > 0) { // jobs.length diya hoise jodi jobs er bitor data thake tailei bitore dukbe. ar length 0  ekti falsy tai bitore dukbe na data thakle truthy hoy.

            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // dui niyomei kora jay

            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if (job) {
            //         jobsApplied.push(job)
            //     }
            // }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied); // akhane sob set kora mani default a jano sob job dekhay
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <h1 className="text-center text-4xl md:my-14 my-7">Applied Jobs</h1>
            <details className="dropdown mb-28">
                <summary className="btn m-1 btn-primary">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div className="space-y-5">
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;