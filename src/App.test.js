import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/react';

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


test("button turns blue when clicked", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", {name : "Change to blue"})
})
