import React, { FunctionComponent, useState, useEffect, Fragment } from "react";
import PokemonStat from "../../../interfaces/PokemonStat";
import StyledStatsContainer from "../../../styled/StyledPokemonCard";
import { Bar, Polar } from "react-chartjs-2";

interface StatsContainerProps {
  stats: PokemonStat[];
}
const StatsContainer: FunctionComponent<StatsContainerProps> = ({ stats }) => {
  const data = {
    labels: stats.map(stat => stat.stat.name),
    datasets: [
      {
        label: "Stats",
        data: stats.map(stat => stat.base_stat),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 45, 0.2)"
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <StyledStatsContainer>
      <Polar
        data={data}
        width={200}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </StyledStatsContainer>
  );
};

export default StatsContainer;
