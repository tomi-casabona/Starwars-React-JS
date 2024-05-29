import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Films } from "./Films";
import { ListFilms } from "./ListFilms";
import { FilmCard } from "./FilmCard";

describe("Films", () => {
  const starshipMock = {
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

  it("should render with h2 and text 'Films'", () => {
    render(<Films starship={starshipMock} />);
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe("Films");
  });

  describe("ListFilms Component", () => {
    const filmsMock = [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ];

    it("should render 3 list items", () => {
      render(<ListFilms films={filmsMock} />);
      const childrenListItem = screen.getAllByRole("listitem");
      expect(childrenListItem.length).toBe(3);
    });

    describe("FilmCard Component", () => {
      const filmUrlMock = "https://swapi.dev/api/films/1/";

      beforeEach(() => {
        render(<FilmCard filmItemURL={filmUrlMock} />);
      });

      it("should render loading before fetch", () => {
        const loadingText = screen.getByText(/Loading.../i);
        expect(loadingText).toBeInTheDocument();
      });

      it("renders img after fetch", async () => {
        const imgMock = await waitFor(() => screen.getByRole("img"));
        expect(imgMock).toBeInTheDocument();
      });
    });
  });
});
