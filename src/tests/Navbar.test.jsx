import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavBar } from "../components/NavBar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const renderWithProvider = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
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
  it("se muestra starships cuando el usuario está logueado", () => {
    renderWithProvider(<NavBar />, {
      preloadedState: { user: { isLogged: true } },
    });

    const starshipsLink = screen.getByText("Starships");
    expect(starshipsLink).toBeInTheDocument();
  });

  it("no se muestra starships cuando el usuario no está logueado", () => {
    renderWithProvider(<NavBar />, {
      preloadedState: { user: { isLogged: false } },
    });

    const starshipsLink = screen.queryByText("Starships");
    expect(starshipsLink).not.toBeInTheDocument();
  });
});
