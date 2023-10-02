import React, { useEffect, useState } from "react";

const Yotpo = () => {
  const options = {
    method: "GET",
    headers: { accept: "application/json", "Content-Type": "application/json" },
  };

  fetch(
    "https://api.yotpo.com/v1/apps/WL65tlcepYBNsReGzZSWW0aLUoT38JAe9tvpOqWH/reviews?utoken=hlz9LsW50ooR1LxA97duPlMEoj58itEEUZpg5Ygv",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return <div>Yotpo</div>;
};

export default Yotpo;
