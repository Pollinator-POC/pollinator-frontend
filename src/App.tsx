import React from "react";
import {useState, useEffect} from "react";
import getChargePoints from "./api";
import {Table} from "./components/Table";
import {ColumnDefinitionType} from "./components/types";

const columns: ColumnDefinitionType<any, any>[] = [
    {
        key: "chargePointId",
        header: "Charging Point Id"
    },
    {
        key: "status",
        header: "Status"
    }
];

const App: React.FC = () => {
    const [chargePoints, setChargePoints] = useState([]);

    useEffect(() => {
        const interval = setInterval(async () => getChargePoints(setChargePoints), 3000);
        return () => clearInterval(interval);
    }, []);

    return <Table data={chargePoints} columns={columns} />;
};

export default App;
