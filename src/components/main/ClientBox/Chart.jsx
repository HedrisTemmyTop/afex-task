import { AreaChart, Area } from "recharts";
const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
];
const SimpleLineChart = ({ type }) => {
  return (
    <AreaChart
      width={150}
      height={69}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <Area
        type="basis"
        dataKey="uv"
        stroke={type === "Decline" ? "#e05549" : "#459850"}
        fill={type === "Decline" ? "#fde3e1" : "#f0faf0"}
      />
    </AreaChart>
  );
};

export default SimpleLineChart;
