import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pilots } from "./Pilots";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";    
import userReducer from "../../redux/slices/userSlice";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import starshipReducer from "../../redux/slices/starshipDataSlice";

const starship = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
  manufacturer: "Corellian Engineering Corporation",
  cost_in_credits: "100000",
  length: "34.37",
  max_atmosphering_speed: "1050",
  crew: "4",
  passengers: "6",
  cargo_capacity: "100000",
  consumables: "2 months",
  hyperdrive_rating: "0.5",
  MGLT: "75",
  starship_class: "Light freighter",
  pilots: [
    "https://swapi.dev/api/people/13/",
    "https://swapi.dev/api/people/14/",
    "https://swapi.dev/api/people/25/",
    "https://swapi.dev/api/people/31/",
  ],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
  ],
  created: "2014-12-10T16:59:45.094000Z",
  edited: "2014-12-20T21:23:49.880000Z",
  url: "https://swapi.dev/api/starships/10/",
};

const renderWithProvider = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userReducer, starshipData: starshipReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe("Navbar", () => {
  it("pilots as subtitle", () => {
    renderWithProvider(<Pilots starship={starship} />, {
      preloadedState: { user: { isLogged: true } },
    });

    const pilotAsTitle = screen.getByRole("heading", { level: 2 });
    expect(pilotAsTitle).toBeInTheDocument();
  });
});
