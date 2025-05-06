
import JobForm from "../../components/form/JobForm"
import { useContext} from "react";
import JobContext from "../../context/JobsContext";

function AddJob() {
    const { createJob } = useContext(JobContext);
 
  async function registerJob(job){
        const formData = new FormData();
        // Correctly iterate over the FileList
        if (job.images) {
          // Check if images exist
          for (let i = 0; i < job.images.length; i++) {
            formData.append("images", job.images[i]);
          }
        }
        for (const key in job) {
          if (key !== "images") {
            // Avoid re-adding images
            formData.append(key, job[key]);
          }
        }
        // Persisitr os dados no banco
        const token = localStorage.getItem("token");
        await createJob(formData, token);        
    }

  return (
    <div className=" text-zinc-500 px-8 xl:px-32">
      
        <JobForm handleSubmit={registerJob}  btnTxt={"Criar Job"} />
      
    </div>
  )
}

export default AddJob
