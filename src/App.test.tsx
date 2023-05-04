import React from "react";
import App from "./App";
import {render, screen} from "@testing-library/react";

(global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{}])
    })
);

describe("App.tsx", () => {
    it("should render the application", async () => {
        render(<App />);

        const chargingPointId = await screen.getByText("Charging Point Id");
        const status = await screen.getByText("Status");

        expect(chargingPointId).toBeTruthy();
        expect(status).toBeTruthy();
    });
});
