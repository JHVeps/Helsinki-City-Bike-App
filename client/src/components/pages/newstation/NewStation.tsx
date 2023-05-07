import { useAppDispatch } from "redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  Station,
  addStationFormOptions,
  addStationFormlabels,
} from "types/station.types";
import { Box, Button, FormLabel, Typography } from "@mui/material";
import Navigation from "../../navigation/HomeNavigation";
import { Formik, Form, Field } from "formik";
import { addNewStation } from "services/station.services";

import "./NewStation.css";

const NewStation = () => {
  const title: string = "ADD NEW STATION";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialValues: Station = {
    FID: 0,
    ID: 0,
    Nimi: "",
    Namn: "",
    Name: "",
    Osoite: "",
    Adress: "",
    Kaupunki: "",
    Operaattor: "",
    Kapasiteet: 0,
    x: 0,
    y: 0,
  };

  const formLabels: addStationFormlabels = {
    FID: "FID",
    ID: "ID",
    CAPACITY: "CAPACITY",
    LONGITUDE: "GOOGLE MAPS LONGITUDE",
    LATITUDE: "GOOGLE MAPS LATITUDE",
  };

  const formOptions: addStationFormOptions = {
    selectCity: "SELECT CITY",
    helsinki: "Helsinki",
    espoo: "Espoo",
    selectOperator: "SELECT OPERATOR",
    cityBikeFin: "City Bike Finland",
  };

  const addStationBtnTitle: string = "ADD STATION";

  return (
    <Box>
      <Typography sx={{ padding: "20px" }} variant="h4">
        {title}
      </Typography>
      <Navigation />
      <Box className="addstation">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            dispatch(addNewStation(values));
            navigate("/stations");
          }}
        >
          <Form>
            <FormLabel sx={{ color: "white" }}>{formLabels.FID}</FormLabel>
            <Field
              data-cy="station-FID-input"
              data-testid="station_FID_input"
              name="FID"
              type="text"
              placeholder="FID"
              required
            />
            <FormLabel sx={{ color: "white" }}>{formLabels.ID}</FormLabel>
            <Field
              data-cy="station-ID-input"
              data-testid="station_ID_input"
              name="ID"
              type="text"
              placeholder="ID"
              required
            />
            <Field
              data-cy="station-Nimi-input"
              name="Nimi"
              type="text"
              placeholder="NIMI"
              required
            />
            <Field
              data-cy="station-Namn-input"
              name="Namn"
              type="text"
              placeholder="NAMN"
            />
            <Field
              data-cy="station-Name-input"
              name="Name"
              type="text"
              placeholder="NAME"
            />
            <Field
              data-cy="station-Osoite-input"
              name="Osoite"
              type="text"
              placeholder="OSOITE"
              required
            />
            <Field
              data-cy="station-Adress-input"
              name="Adress"
              type="text"
              placeholder="ADRESS"
            />
            <Field
              data-cy="station-Kaupunki-input"
              name="Kaupunki"
              type="text"
              as="select"
            >
              <option value="select">{formOptions.selectCity}</option>
              <option value="Helsinki">{formOptions.helsinki}</option>
              <option value="Espoo">{formOptions.espoo}</option>
            </Field>
            <Field
              data-cy="station-Operaattor-input"
              name="Operaattor"
              type="tetx"
              as="select"
              placeholder="OPERAATTOR"
            >
              <option value="select">{formOptions.selectOperator}</option>
              <option value="CityBike Finland">
                {formOptions.cityBikeFin}
              </option>
            </Field>
            <FormLabel sx={{ color: "white" }}>{formLabels.CAPACITY}</FormLabel>
            <Field name="Kapasiteet" type="text" placeholder="CAPACITY" />
            <FormLabel sx={{ color: "white" }}>
              {formLabels.LONGITUDE}
            </FormLabel>
            <Field name="x" type="text" placeholder="LONGITUDE" />
            <FormLabel sx={{ color: "white" }}>{formLabels.LATITUDE}</FormLabel>
            <Field name="y" type="text" placeholder="LATITUDE" />
            <Button
              data-cy="add-station-button"
              data-testid="add_station_button"
              sx={{
                padding: "15px 20px",
                fontSize: "1.3rem",
                fontWeight: 600,
                border: "none",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#e50914",
                },
              }}
              type="submit"
            >
              {addStationBtnTitle}
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default NewStation;
