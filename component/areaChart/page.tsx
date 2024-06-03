"use client"

import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>

      </div>
    )
  }
}

const AreaChartComponent = () => {
  const data = [
    {
      "name": "Dec",
      "uv": 400,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Jan",
      "uv": 300,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    }
  ]

  return (
    <AreaChart width={1096} height={400} style={{ overflow: "visible" }} data={data}
      margin={{
        top: 10,
        right: 0,
        left: 10,
        bottom: 0,
      }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="8%" stopColor="#80FF0014" stopOpacity={0} />
          <stop offset="95%" stopColor="#FFFEFD26" stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis axisLine={false} />
      <Tooltip />
      <Area dataKey="amt" stroke="#1CCB00" fill="url(#colorUv)" />
    </AreaChart>
  )
}

export default AreaChartComponent