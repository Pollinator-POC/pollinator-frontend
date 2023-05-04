import React from "react";
import {useState, useEffect} from "react";

const styles: {[key: string]: React.CSSProperties} = {
    table: {
        borderCollapse: "collapse",
        border: "1px solid",
        width: "50%",
        padding: "8px"
    },
    th: {
        border: "1px solid",
        padding: "8px"
    }
};

const App = () => {
    const [chargePoints, setChargePoints] = useState([]);
    const getChargePoints = async () =>
        await fetch("http://localhost:8080/charge_point_live_status")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setChargePoints(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    useEffect(() => {
        const interval = setInterval(async () => getChargePoints(), 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.th}>Charging Point Id</th>
                    <th style={styles.th}>Status</th>
                </tr>
            </thead>
            <tbody>
                {chargePoints.map((cp) => (
                    <tr key={cp.charge_point_id}>
                        <th style={styles.th}>{cp.charge_point_id}</th>
                        <th style={styles.th}>{cp.status}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default App;
