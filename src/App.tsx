import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MushoAI from "./MushoAi";
import ShipFast from "./ShipFast";

const ROUTES = {
  "/musho-ai": <MushoAI />,
  "/ship-fast": <ShipFast />,
};

const Home: React.FC<{}> = () => {
  return (
    <div>
      <div className="text-lg">Home</div>
      {Object.keys(ROUTES).map((path) => (
        <Link key={path} to={path}>
          <div className="flex">
            <div className="pr-1">•</div>
            <div className="text-blue-500">{path}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Object.entries(ROUTES).map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default App;
