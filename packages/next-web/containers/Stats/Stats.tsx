import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { ResponsivePie } from "@nivo/pie";
import { IPageTrackingState } from "pages/tracking/tracking.reducer";
import { StatsWrapper } from "./Stats.style";
import { Bounce } from "react-awesome-reveal";

type StatsProps = {
  weekNo: string;
};

const Stats: React.FC<StatsProps> = ({ weekNo }) => {
  const total: number = useSelector(
    (state: IPageTrackingState) => state?.total
  );
  const completed: number = useSelector(
    (state: IPageTrackingState) => state?.completed
  );
  const data = [
    {
      id: "Doing",
      label: "Not completed",
      value: total - completed,
      color: "#f4f4f4",
    },
    {
      id: "Done",
      label: "Completed",
      value: completed,
      color: "#2270a1",
    },
  ];
  return (
    <>
      <h2>Stats - Week #{weekNo.split("2020")[1]}</h2>
      <p>
        Progress: {completed} / {total}
      </p>
      <Bounce>
        <StatsWrapper>
          {total === 0 && <h3>No data</h3>}
          {total !== 0 && (
            <ResponsivePie
              data={data}
              margin={{ top: 10, right: 5, bottom: 10, left: 5 }}
              innerRadius={0.6}
              padAngle={0.7}
              cornerRadius={5}
              colors={{ scheme: "nivo" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: "color" }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                { match: { id: "total" }, id: "dots" },
                { match: { id: "total" }, id: "dots" },
              ]}
            />
          )}
        </StatsWrapper>
      </Bounce>
    </>
  );
};

export default Stats;
