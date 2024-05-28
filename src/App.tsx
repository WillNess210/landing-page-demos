import React from "react";
import { Route, Routes } from "react-router-dom";
import MushoAI from "./MushoAi";

const ROUTES = {
  "/musho-ai": <MushoAI />,
};

const Home: React.FC<{}> = () => {
  return (
    <div>
      <h1>Home</h1>
      {Object.keys(ROUTES).map((path) => (
        <a key={path} href={`/landing-page-demos/${path}`} className="block">
          {path}
        </a>
      ))}
    </div>
  );
};

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing-page-demos" element={<Home />} />
      {Object.entries(ROUTES).map(([path, element]) => (
        <Route
          key={path}
          path={`/landing-page-demos/${path}`}
          element={element}
        />
      ))}
    </Routes>
  );
};

export default App;
