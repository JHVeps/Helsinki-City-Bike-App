import multer from "multer";
import express, { Request, Response } from "express";
import JourneyModel from "../models/journey.model";
import csv from "csvtojson";
import type { Journey } from "../types";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", (_req, res) => {
  JourneyModel.find({}, (error: Error, items: any) => {
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
        const journeys = [];

        for (let i = 0; i < jsonObj.length; i++) {
          const journeyObj = {} as Journey;

          const durationToParse = (journeyObj.Duration =
            jsonObj[i]["Duration (sec"]);

          const extractedDuration = durationToParse[")"];

          journeyObj.Departure = jsonObj[i]["Departure"];
          journeyObj.Return = jsonObj[i]["Return"];
          journeyObj.DepartureStationId = jsonObj[i]["Departure station id"];
          journeyObj.DepartureStationName =
            jsonObj[i]["Departure station name"];
          journeyObj.ReturnStationId = jsonObj[i]["Return station id"];
          journeyObj.ReturnStationName = jsonObj[i]["Return station name"];
          journeyObj.CoveredDistance = jsonObj[i]["Covered distance (m)"];
          journeyObj.Duration = extractedDuration;

          if (journeyObj.CoveredDistance > 10 && journeyObj.Duration > 10) {
            journeys.push(journeyObj);
          }
        }
        JourneyModel.insertMany(journeys)
          .then(function () {
            res.status(200).send({
              message: "Successfully Uploaded!",
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
