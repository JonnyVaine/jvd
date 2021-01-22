import React, {useRef,  useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function RouteWithSubRoutes(props) {
  console.log("props", props);
  console.log(props.slug);
  return (
    <Route
      path={`/${props.slug}`}
      render={props => (
        // pass the sub-routes down to keep nesting
        <props.componentName {...props}  />
      )}
    />
    // <></>
  );
}

export function sortByPos(a, b) {  
  let comparison = 0;
  if (a.pos > b.pos) {
    comparison = 1;
  } else if (a.pos < b.pos) {
    comparison = -1;
  }
  return comparison;
}

export const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
          setStatus('fetching');
          if (cache.current[url]) {
              const data = cache.current[url];
              setData(data);
              setStatus('fetched');
          } else {
              const response = await fetch(url);
              const data = await response.json();
              cache.current[url] = data; // set response in cache;
              setData(data);
              setStatus('fetched');
          }
      };

      fetchData();
  }, [url]);

  return { status, data };
};

export function daysInAYear(year) 
{
  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }
   
  return isLeapYear(year) ? 366 : 365;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertLink(string) {
  const splitString = string.split('<a');

  splitString.map(str => {
    if(str.indexOf('</a>') > 0) {
      const link = str.split('>');
      const linkAtts = link[0].split('"');
      const label = link[1].split('<')[0];
      let classes = '';
      let href='';

      linkAtts.map((atts, i) => {
        if(atts.indexOf('class') > 0){
          classes = linkAtts[i + 1];
        }

        if(atts.indexOf('href') > 0){
          href = linkAtts[i + 1];
        }
        return true;
      });

      // console.log(classes);
      // console.log(href);
      // console.log(label);

      return <Link to={label} className={classes}>{label}</Link>;
    }
  })
}