import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Home } from "../pages/Home";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/slices/userSlice";
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

describe("Home Component", () => {
  it("no se muestra botón cuando el usuario está logueado", () => {
    renderWithProvider(<Home />, {
      preloadedState: { user: { isLogged: true } },
    });

    const logInButtons = screen.queryByRole("button");
    expect(logInButtons).not.toBeInTheDocument();
  });

  it("se muestra botón cuando el usuario está logueado", () => {
    renderWithProvider(<Home />, {
      preloadedState: { user: { isLogged: false } },
    });

    const logInButtons = screen.getByRole("button");
    expect(logInButtons).toBeInTheDocument();
  });
})