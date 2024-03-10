// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoding(false);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const dashboardProps = {
    isLoding,
  };

  return (
    <>
      <Dashboard {...dashboardProps} />
    </>
  );
}

export default App;
