import { useAppDispatch } from "redux/hooks";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Navigation from "../../navigation/HomeNavigation";
import { Formik, Form, Field } from "formik";
import { addNewStation } from "services/station.services";

import "./NewStation.css";

const NewStation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4">ADD NEW STATION</Typography>
      <Navigation />
      <Box className="addstation">
        <Formik
          initialValues={{
            FID: 0,
            ID: 0,
            Nimi: "",
            Namn: "",
            Name: "",
            Osoite: "",
            Adress: "",
            Kaupunki: "",
            Stad: "",
            Operaattor: "",
            Kapasiteet: 0,
            x: 0,
            y: 0,
          }}
          onSubmit={(values) => {
            dispatch(addNewStation(values));
            navigate("/stations");
          }}
        >
          <Form>
            <Field name="FID" type="text" placeholder="FID" required />
            <Field name="ID" type="text" placeholder="ID" required />
            <Field name="Nimi" type="text" placeholder="NIMI" required />
            <Field name="Namn" type="text" placeholder="NAMN" required />
            <Field name="Name" type="text" placeholder="NAME" required />
            <Field name="Osoite" type="text" placeholder="OSOITE" required />
            <Field name="Adress" type="text" placeholder="ADRESS" required />
            <Field
              name="Kaupunki"
              type="string"
              placeholder="KAUPUNKI"
              required
            />
            <Field name="Stad" type="text" placeholder="STAD" required />
            <Field name="Operaattor" type="string" placeholder="OPERAATTOR" />
            <Field name="Kapasiteet" type="string" placeholder="KAPASITEET" />
            <Field name="x" type="string" placeholder="LONGITUDE" />
            <Field name="y" type="string" placeholder="LATITUDE" />
            <Button
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
