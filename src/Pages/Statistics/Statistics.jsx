import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const Options = {
  is3D: false,
  legend: "bottom",
};

const Statistics = () => {
  const [yourDonationPercentage, setYourDonationPercentage] = useState(0);

  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("donation")) || [];

    const yourDonation = dataFromLocalStorage?.length;
    let percentage = 0;

    percentage = (yourDonation / 12) * 100;

    setYourDonationPercentage(percentage);
  }, []);

  const chartData = [
    ["Task", "Percentage"],
    ["Your donation", yourDonationPercentage],
    ["Total donation", 100 - yourDonationPercentage],
  ];
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={chartData}
        options={Options}
      />
    </div>
  );
};

export default Statistics;