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
    LONGITUDE: "GOOGLE MAP LONGITUDE",
    LATITUDE: "GOOGLE MAP LATITUDE",
  };

  const formOptions: addStationFormOptions = {
    selectCity: "SELECT CITY",
    helsinki: "Helsinki",
    espoo: "Espoo",
    selectOperator: "SELECT OPERATOR",
    cityBikeFin: "City Bike Finland",
  };

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
            <Field name="FID" type="text" placeholder="FID" required />
            <FormLabel sx={{ color: "white" }}>{formLabels.ID}</FormLabel>
            <Field name="ID" type="text" placeholder="ID" required />
            <Field
              data-testid="station_nimi_value"
              name="Nimi"
              type="text"
              placeholder="NIMI"
              required
            />
            <Field name="Namn" type="text" placeholder="NAMN" required />
            <Field name="Name" type="text" placeholder="NAME" required />
            <Field name="Osoite" type="text" placeholder="OSOITE" required />
            <Field name="Adress" type="text" placeholder="ADRESS" required />
            <Field name="Kaupunki" type="text" as="select" required>
              <option value="select">{formOptions.selectCity}</option>
              <option value="Helsinki">{formOptions.helsinki}</option>
              <option value="Espoo">{formOptions.espoo}</option>
            </Field>
            <Field
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
            <Field name="Kapasiteet" type="text" placeholder="KAPASITEET" />
            <FormLabel sx={{ color: "white" }}>
              {formLabels.LONGITUDE}
            </FormLabel>
            <Field name="x" type="text" placeholder="LONGITUDE" />
            <FormLabel sx={{ color: "white" }}>{formLabels.LATITUDE}</FormLabel>
            <Field name="y" type="text" placeholder="LATITUDE" />
            <Button
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
              ADD STATION
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default NewStation;
