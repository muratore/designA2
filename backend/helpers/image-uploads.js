import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder;
    // Fazer uma logica de bifurcação para distinguir a past adms e jobs
    if (req.baseUrl.includes("admin")) {
      folder = "adms";
    } else if (req.baseUrl.includes("jobs")) {
      folder = "jobs";
    }

    cb(null, `public/images/${folder}`);
  },
  filename: function (req, file, cb) {
    const filename =
      Date.now() +
      String(Math.floor(Math.random() * 100)) +
      path.extname(file.originalname);

    cb(null, filename);
  },
});

const imageUpload = multer({
  storage: storage,
  //   Propriedade para filtrar os arquivos que desejo receber
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|webp)$/)) {
      return cb(new Error("Somente arquivos jpg, png e webp são aceitos"));
    }
    cb(undefined, true);
  },
});

export default imageUpload;
