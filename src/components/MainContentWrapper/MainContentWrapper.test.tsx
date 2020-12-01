import React from "react";
import { render, screen } from "@testing-library/react";
import { MainContentWrapper } from "./MainContentWrapper";

describe("The MainContentWrapper component", () => {
  it("renders with children elements", () => {
    render(
      <MainContentWrapper>
        <h1>Hello World!</h1>
      </MainContentWrapper>
    );

    expect(screen.getByText(/^hello world$/i)).toBeInTheDocument();
  });
});
