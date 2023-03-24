import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/react';
import {replaceCamelWithSpaces} from "./App"

test('button has correct initital color and update when Click', () => {
  render(<App />);

  //find Element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" })
  
  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed"})
  
  // Click Button 
  fireEvent.click(colorButton)

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" })
  
  // Expect the button have text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed")
});


test("initial conditions", () => {
  render(<App />)
  
  // Check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" })
  expect(colorButton).toBeEnabled()

  // check that checkbox that not checked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked()

})

test("Checkbox disables button on first click and enalbles on second click", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox", {name : "Disable button"})
  const button = screen.getByRole("button", { name: "Change to MidnightBlue" })
  
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
})

test("Disbled the button and button turn gray", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" })
  const button = screen.getByRole("button", { name: "Change to MidnightBlue" })
  
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: "MeidumVioletRed"})

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({ backgroundColor: "gray" })
  
  fireEvent.click(checkbox)
  
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: "MediumVioletRed"})

  fireEvent.click(button)

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" })
  expect(button).toHaveTextContent("Change to MediumVioletRed")

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({ backgroundColor: "gray" })
  
  fireEvent.click(checkbox)

  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({ backgroundColor: "MidngihtBlue" })
  expect(button).toHaveTextContent("Change to MediumVioletRed")
  
}) 

describe("Spaces before camel-case capital letters", () => {
  test("work for no inner capital letters", () => {
     expect(replaceCamelWithSpaces("Red")).toBe("Red")
  })
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })
  test("Works for multiple innter capital letters", () => {
     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red")
  })
})