import {getChargePoints} from "./ChargePoint";

const chargePoints = [
    {
        charge_point_id: "9",
        status: "SuspendedEVSE"
    },
    {
        charge_point_id: "1",
        status: "Available"
    }
];
describe("ChargePoint", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    })

    it("should retrieve charge points", () => {
        global.fetch = jest.fn().mockImplementationOnce(() => {
            return new Promise((resolve) => {
                resolve({
                    json: () => {
                        return chargePoints;
                    }
                });
            });
        });
        getChargePoints(() => []);

        expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/charge_point_live_status");
    });

    it("should not retrieve charge points", () => {
        global.fetch = jest.fn().mockImplementationOnce(() => {
            return new Promise((resolve, reject) => {
                reject(new Error('Some error'));
            });
        });

        getChargePoints(() => []);

        expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/charge_point_live_status");
    });
});
