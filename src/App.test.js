import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

test('button has correct initital color and update when Click', () => {
  render(<App />);

  //find Element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  
  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" })
  
  // Click Button 
  fireEvent.click(colorButton)

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" })
  
  // Expect the button have text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to red")
});


test("initial conditions", () => {
  render(<App />)
  
  // Check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toBeEnabled()

  // check that checkbox that not checked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked()

})

test("Checkbox disables button on first click and enalbles on second click", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox", {name : "Disable button"})
  const button = screen.getByRole("button", { name: "Change to blue" })
  
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
})
