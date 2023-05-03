import React from "react";
import App from "./App";
import { render, screen} from "@testing-library/react";

describe('App.tsx',  () => {
    it('should render the application',  async () => {
        render(<App/>);
        const helloWorldText = await screen.getByText("Hello World");
        expect(helloWorldText).toBeTruthy();
    });
});