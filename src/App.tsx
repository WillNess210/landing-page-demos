import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MushoAI from "./MushoAi";

const ROUTES = {
  "/musho-ai": <MushoAI />,
};

const Home: React.FC<{}> = () => {
  return (
    <div>
      <h1>Home</h1>
      {Object.keys(ROUTES).map((path) => (
        <Link key={path} to={path}>
          {path}
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
