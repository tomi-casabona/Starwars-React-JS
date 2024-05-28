import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Films } from "./Films";
import { ListFilms } from "./ListFilms";

const starshipFilms = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/3/",
  "https://swapi.dev/api/films/6/",
];

describe("Films", () => {
  let mockFn = vi.fn();

  beforeEach(() => {
    render(<Films starship={mockFn} />);
  });

  it("should render h2 with text Films", () => {
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe("Films");
  });
});
