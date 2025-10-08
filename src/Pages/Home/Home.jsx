import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import States from '../../Components/States/States'
import Apps from '../../Components/Apps/Apps'
import { useLoaderData } from 'react-router'

export const Home = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <States></States>
      <Apps apps={apps}></Apps>
    </div>
  );
}

