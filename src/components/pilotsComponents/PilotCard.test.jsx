import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { PilotsCard } from "./PilotsCard";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom"; // Importa MemoryRouter

const mockPilot = {
  name: "Luke Skywalker",
  height: "172",
  url: "https://swapi.dev/api/people/1/",
};

beforeEach(() => {
  vi.spyOn(window, "fetch").mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPilot),
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

const renderWithProviders = (ui, { store }) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        {" "}
        {/* Envuelve tu componente con MemoryRouter */}
        {ui}
      </MemoryRouter>
    </Provider>
  );
};

describe("PilotsCard", () => {
  it("should render PilotsCard", () => {
    renderWithProviders(
      <PilotsCard pilotItemURL="https://swapi.dev/api/people/1/" />,
      { store }
    );
  });

  it("should have an image", async () => {
    renderWithProviders(
      <PilotsCard pilotItemURL="https://swapi.dev/api/people/1/" />,
      { store }
    );
    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    );
  });

  it("should render error message when fetching response is not ok", async () => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.reject(new Error("Network response was not ok")),
      });
    });

    renderWithProviders(
      <PilotsCard pilotItemURL="https://swapi.dev/api/people/1/" />,
      { store }
    );

    const errorMessage = await waitFor(() =>
      screen.getByText(
        /May the force be with you - Error fetching pilot data./i
      )
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render onError image when src image is not found", async () => {
    renderWithProviders(
      <PilotsCard pilotItemURL="https://swapi.dev/api/people/1/" />,
      { store }
    );

    const image = await screen.findByRole("img");

    // Simulate image error
    image.dispatchEvent(new Event("error"));

    expect(image).toHaveAttribute(
      "src",
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1"
    );
  });
  it("should display loading indicator while fetching data", () => {
    renderWithProviders(
      <PilotsCard pilotItemURL="https://swapi.dev/api/people/1/" />,
      { store }
    );
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
