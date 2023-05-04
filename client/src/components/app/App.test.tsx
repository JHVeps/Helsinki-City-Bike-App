import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import App from "./App";

test("<App /> renders HELSINKI CITY BIKE APP", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const content = screen.getByText(/HELSINKI CITY BIKE APP/i);
  expect(content).toBeInTheDocument();
});
