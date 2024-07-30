import { render } from "@/tests/test-utils";
import { screen } from "@testing-library/react";
import App from "./app";

test("Home page renders Marvel Search title", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Marvel Search",
    })
  ).toBeVisible();
});
