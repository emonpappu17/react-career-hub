// local storage ase kina dekhlam ba thakle mangula nilam
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

// local storage a man set korlam
const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }
}

export { getStoredJobApplication, saveJobApplication };