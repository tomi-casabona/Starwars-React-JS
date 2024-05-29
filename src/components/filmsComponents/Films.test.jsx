import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Films } from "./Films";
import { ListFilms } from "./ListFilms";
import { FilmCard } from "./FilmCard";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const starshipMock = {
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
  ],
};
const starshipFilmsMock = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/2/",
  "https://swapi.dev/api/films/3/",
];
const filmUrlMock = "https://swapi.dev/api/films/1/";
const mockFilm = {
  title: "A New Hope",
  episode_id: 4,
  url: "https://swapi.dev/api/films/1/",
};

const renderWithProviders = (ui, { store }) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

beforeEach(() => {
  vi.spyOn(window, "fetch").mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilm),
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Films", () => {
  it("should render with h2 and text 'Films'", () => {
    renderWithProviders(<Films starship={starshipMock} />, { store });
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe("Films");
  });
});

describe("ListFilms Component", () => {
  it("should render 3 list items", () => {
    renderWithProviders(<ListFilms films={starshipFilmsMock} />, { store });
    const childrenListItem = screen.getAllByRole("listitem");
    expect(childrenListItem.length).toBe(3);
  });
});

describe("FilmCard Component", () => {
  it("should render FilmCard", () => {
    renderWithProviders(<FilmCard filmItemURL={filmUrlMock} />, { store });
  });

  it("should have an image", async () => {
    renderWithProviders(<FilmCard filmItemURL={filmUrlMock} />, { store });
    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "https://starwars-visualguide.com/assets/img/films/1.jpg"
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

    renderWithProviders(<FilmCard filmItemURL={filmUrlMock} />, { store });

    const errorMessage = await waitFor(() => screen.getByText(/Error/i));
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render onError image when src image is not found", async () => {
    renderWithProviders(<FilmCard filmItemURL={filmUrlMock} />, { store });

    const image = await screen.findByRole("img");

    // Simulate image error
    image.dispatchEvent(new Event("error"));

    expect(image).toHaveAttribute(
      "src",
      "https://i0.wp.com/teamsbackground.net/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg?w=1920&ssl=1"
    );
  });

  it("should display loading indicator while fetching data", () => {
    renderWithProviders(<FilmCard filmItemURL={filmUrlMock} />, { store });
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
