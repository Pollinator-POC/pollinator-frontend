import React from "react";

const getChargePoints = async (setChargePoints: React.Dispatch<React.SetStateAction<[]>>) =>
    await fetch("http://localhost:8080/charge_point_live_status")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setChargePoints(data);
        })
        .catch((err) => {
            console.error(err.message);
        });

export {getChargePoints};
