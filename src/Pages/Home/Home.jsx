import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import States from '../../Components/States/States'
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { useLoaderData } from 'react-router'

export const Home = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps apps={apps}></TrendingApps>
    </div>
  );
}

