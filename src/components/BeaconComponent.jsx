import React, { useEffect, useState } from "react";

const BeaconComponent = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (bubbles.length <= 0) {
      fetchBeacons();
    }
    const intervalCall = setInterval(() => {
      fetchBeacons();
    }, 60000);
  }, []);

  const fetchBeacons = async () => {
    try {
      const response = await fetch(
        "https://api-beacon.adcm.co.th/api/overview/user"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch beacons");
      }
      const data = await response.json();
      console.log(data.response_data.data[(0, 10)]);

      setBubbles(data.response_data.data.slice(0, 20));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {bubbles.map((bubble, index) => {
        return (
          <div
            key={index}
            className={`bubble bubble-${index + 1}`}
            style={{ backgroundImage: `url("${bubble.picture_url}")` }}
          ></div>
        );
      })}
    </div>
  );
};

export default BeaconComponent;
