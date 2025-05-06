import Job from "../models/JobModel.js";
import { ObjectId } from "mongodb";
class JobController {
  createJob = async (req, res) => {
    const { client, projectName, jobType, description } = req.body;
       
    const jobimages = [];
    req.files.map((file) => {
      jobimages.push(file.filename);
    });
    // Algorítimo para inserir imagens aqui.

    if (!client) {
      res.status(422).json({ message: "Nome do cliente é obrigatório" });
      return;
    }
    if (!projectName) {
      res.status(422).json({ message: "Nome do projeto é obrigatório" });
      return;
    }
    if (!jobType) {
      res.status(422).json({ message: "Selecione um tipo de job" });
      return;
    }

    if (!description) {
      res
        .status(422)
        .json({ message: "É obrigatório uma discriminação do trabalho!" });
      return;
    }
    // Criar o objeto para ser persistido no banco
    const newJob = new Job({
      client,
      projectName,
      images: jobimages,
      jobType,
      description,
    });
    // console.log(newJob);

    // Persistir Job no Banco de dados fazer um try catch
    try {
      newJob.save();
      res.status(201).json({ message: "Job criado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro do servidor!" });
    }
  };
  getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json({ status: "ok", jobs });
    } catch (error) {
      res.status(500).json({ status: "fail", message: error });
    }
  };

  editJob = async (req, res) => {
    // Receber o id do job
    const { id } = req.params;

    // Checar se o id é valido
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "Este id não é válido!" });
      return;
    }
    const job = await Job.findOne({ _id: id });
    if (!job) {
      res.status(422).json({ message: "Não existe este job!" });
      return;
    }
    // Receber os dados do corpo da Requisição
    const { client, projectName, jobType, description } = req.body;
    // Atualizar os dados no objeto job
    if (!client) {
      res.status(422).json({ message: "Nome do cliente é obrigatório" });
      return;
    } else {
      job.client = client;
    }
    if (!projectName) {
      res.status(422).json({ message: "Nome do projeto é obrigatório" });
      return;
    } else {
      job.projectName = projectName;
    }
    if (!jobType) {
      res.status(422).json({ message: "Selecione um tipo de job" });
      return;
    } else {
      job.jobType = jobType;
    }

    if (!description) {
      res
        .status(422)
        .json({ message: "É obrigatório uma discriminação do trabalho!" });
      return;
    } else {
      job.description = description;
    }

    if (!req.files.length === 0) {
      job.images = [];
      // Pegar as images com o req.files
      req.files.map((img) => {
        job.images.push(img.filename);
      });
    } else {
      job.images = job.images;
    }

    // Atualizar os dados o job no banco
    try {
      await Job.findByIdAndUpdate(id, job);
      res.status(200).json({ message: "Job atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `Erro interno do servidor: ${error}` });
    }
  };
  deleteById = async (req, res) => {
    const { id } = req.params;
    // Checar se o id é valido
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "Este id não é válido!" });
      return;
    }
    // Verificar se o job existe
    const job = Job.findById(id);
    if (!job) {
      res.status(422).json({ message: "Job não encontrado!" });
    }
    // Apagar o job do banco
    try {
      await Job.findByIdAndDelete(id);
      res.status(200).json({ message: "Job deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: `Erro: ${error}` });
    }
  };
  getJobById = async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "Este id é inválido!" });
      return;
    }
    const job = await Job.findById(id);

    res.status(200).json({ message: "ok", job });
  };
}

export default new JobController();
