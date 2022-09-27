import { render } from "@testing-library/react";
import App from "./App";

test("Componente foi renderizado", () => {
  const component = render(<App />).container;
  expect(component).toBeTruthy();
});
