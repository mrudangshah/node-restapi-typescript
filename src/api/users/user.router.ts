import { Router } from "express";
import { UserController } from "./user.controller";
import * as fs from "fs-extra";
import multer from 'multer';

let folderName = "user";
let datenow = Date.now;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dateVar = new Date();
    let current_month = dateVar.getUTCMonth() + 1;
    let current_year = dateVar.getFullYear();

    CreateDirectory('assets/images', folderName);
    let imagePathYear = "assets/users/";

    CreateDirectory(imagePathYear, current_year);
    let imagePathMonth = "assets/images/" + current_year + "/";

    CreateDirectory(imagePathMonth, current_month);
    let UplodaName = folderName + "/" + current_year + "/" + current_month;

    cb(null, `'assets/images'${UplodaName}/`);
  },
  filename: function (req, file, cb) {
    var data = file.originalname.split('.').pop();
    cb(null, `${datenow()}${"." + data}`);
  }
});

export function CreateDirectory(dest: any, directoryName: any, vendorId?: any){
  const path = `${dest}${directoryName}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  if (vendorId) {
    let vendorFolderPath = `${path}/${vendorId}`
    if (!fs.existsSync(vendorFolderPath)) {
      fs.mkdirSync(vendorFolderPath);
    }
  }
}

const upload = multer({ storage: storage })

class UserRoutes {
  private userController: UserController = new UserController;
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.post("/", this.userController.getUser);
    this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
    this.router.post("/update", upload.single('userLogo'), this.userController.updateUser);
    this.router.delete("/:id", this.userController.deleteUser);
  }
}
const userRoutes = new UserRoutes();
userRoutes.init();
export default userRoutes.router; 