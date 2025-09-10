import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("should first", () => {
    const inputValue = "Dragon Ball";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    const input2 = screen.getByRole("textbox");
    fireEvent.input(input2, { target: { value: inputValue } });
    const form2 = screen.getByRole("form");
    fireEvent.submit(form2);

    const categories = screen.getAllByText(inputValue);
    expect(categories.length).toBe(1);
  });
});
