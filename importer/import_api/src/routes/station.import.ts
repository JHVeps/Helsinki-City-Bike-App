import multer from "multer";
import express, { Request, Response } from "express";
import StationModel from "../models/station.model";
import csv from "csvtojson";
import { Station } from "../types";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  StationModel.find({}, (error: Error, items: any) => {
    if (error) {
      console.log(error);
    } else {
      res.json({ items: items });
    }
  });
});

router.post("/", upload.single("file"), (req: Request, res: Response) => {
  if (req.file) {
    csv()
      .fromFile(req.file.path)
      .then((jsonObj: any[]) => {
        let stations = [];

        for (let i = 0; i < jsonObj.length; i++) {
          let obj = {} as Station;

          obj.FID = jsonObj[i]["FID"];
          obj.ID = jsonObj[i]["ID"];
          obj.Nimi = jsonObj[i]["Nimi"];
          obj.Namn = jsonObj[i]["Namn"];
          obj.Name = jsonObj[i]["Name"];
          obj.Osoite = jsonObj[i]["Osoite"];
          obj.Adress = jsonObj[i]["Adress"];
          obj.Kaupunki = jsonObj[i]["Kaupunki"];
          obj.Operaattor = jsonObj[i]["Operaattor"];
          obj.Kapasiteet = jsonObj[i]["Kapasiteet"];
          obj.x = jsonObj[i]["x"];
          obj.y = jsonObj[i]["y"];

          stations.push(obj);
        }
        StationModel.insertMany(stations)
          .then(function () {
            res.status(200).send({
              message: "Successfully Uploaded!",
            });
          })
          .catch(function (error: Error) {
            res.status(500).send({
              message: "failure",
              error,
            });
          })
          .catch((error: Error) => {
            res.status(500).send({
              message: "failure",
              error,
            });
          });
      });
  }
});

export { router };
