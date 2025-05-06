import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Title from "../../components/Title";
import { useState} from "react";



function JobForm({ handleSubmit, jobData, btnTxt }) {
  
  const [job, setJob] = useState(jobData || {});
  const [preview, setPreview] = useState([]);
  const options = ["editorial", "web", "brand"];
  

  function onHandleChange(e) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setPreview(Array.from(e.target.files));
    setJob({ ...job, images: [...e.target.files] });
  }
  function onHandleSelect(e){
    setJob({...job, jobType: e.target.options[e.target.selectedIndex].text})
  }
  async function onHandleSubmit(e) {
    e.preventDefault();
    handleSubmit(job)
  }

  console.log(job.images);
  console.log(preview)
  
  return (
    <div>
      <div className="container py-32 flex flex-col mx-auto ">
        <Title titulo={btnTxt} />
        
        <form onSubmit={onHandleSubmit} className="max-w-[300px]">
          <div className="flex w-[100px] bg-green-500">
            {preview.length > 0
              ? preview.map((image, index) => (
                  <img
                    src={URL.createObjectURL(image)}
                    alt={job.client}
                    key={`${job.client} + ${index}`}
                  />
                ))
              : job.images &&
                job.images.map((image, index) => (
                  <img
                    src={`${
                      import.meta.env.VITE_REACT_APP_API
                    }/images/jobs/${image}`}
                    alt={job.client}
                    key={job.client + index}
                  />
                ))}
          </div>
          <Select
            texto={"Selecione o tipo de trabalho"}
            options={options}
            name={"jobType"}
            onHandleChange={onHandleSelect}
            value={job.jobType || ""}
          />
          <Input
            texto={"Cliente"}
            type={"text"}
            name={"client"}
            placeholder={"Nome do Cliente"}
            onHandleChange={onHandleChange}
            value={job.client || ""}
          />
          <Input
            texto={"Nome do Projeto"}
            type={"text"}
            name={"projectName"}
            placeholder={"Nome do Projeto"}
            onHandleChange={onHandleChange}
            value={job.projectName || ""}
          />
          <Input
            texto={"Descrição do projeto"}
            type={"text"}
            name={"description"}
            placeholder={"Nome do Projeto"}
            onHandleChange={onHandleChange}
            value={job.description || ""}
          />

          <Input
            type={"file"}
            texto={"Selecione imagens"}
            name={"images"}
            multiple={"multiple"}
            onHandleChange={handleImageChange}
          />
          <input
            type="submit"
            value={btnTxt}
            className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-sm mt-8"
          />
        </form>
        
      </div>
    </div>
  );
}

export default JobForm;
