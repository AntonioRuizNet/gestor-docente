import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//Demo
import { useSelector } from "react-redux";
import {escritorioDataChart} from './../../api/mock';

export const RenderBarChart = ({data}) => {
    const mock = useSelector((state) => state.globalReducer.mock);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={mock==="true"?escritorioDataChart:data} margin={{top: 5, right: 30, left: 20, bottom: 5,}} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Alumnos" fill="#00b3c5" />
          <Bar dataKey="Faltas" fill="#4e73df" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
