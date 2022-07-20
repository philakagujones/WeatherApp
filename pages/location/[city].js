import React from 'react'
import moment from 'moment-timezone';
import Head from 'next/head';
import cities from "../../lib/city.list.json"
import Today from '../../comps/today';
import Hourly from '../../comps/hourly';
import Weekly from '../../comps/weekly';

export async function getServerSideProps(context) {
  const city = getCity(context.params.city);

  if (!city) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&exlude=minutely&units=metric`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      city: city,
      timezone: data.timezone,
      currentWeather: data.current,
      dailyWeather: data.daily,
      hourlyWeather: getHourlyWeather(data.hourly, data.timezone),
    },
  }
}

const getCity = param => {
  const cityParam = param.trim();
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length -1];

  if (!id) {
    return null;
  }

  const city = cities.find(city => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
}

const getHourlyWeather = (hourlyData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf('day').valueOf();
  const eodTimeStamp = Math.floor(endOfDay/1000);
  const todayData = hourlyData.filter(data => data.dt < eodTimeStamp);
  return todayData;
}

export default function City({ hourlyWeather, currentWeather, dailyWeather, city, timezone }) {
  return (
    <div>
      <Head>
        <title>{city.name} | Weather Watch</title>
      </Head>
      
      <div className='page-wrapper'>
        <div className='container'>
          <Today city={city} weather={dailyWeather[0]} timezone={timezone}/>
          <Hourly hourlyWeather={hourlyWeather} timezone={timezone}/>
          <Weekly weeklyWeather={dailyWeather} timezone={timezone}/>
        </div>
      </div>
    </div>
  )
}