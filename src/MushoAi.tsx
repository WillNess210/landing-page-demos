import React, { PropsWithChildren } from "react";

const HeaderButton: React.FC<PropsWithChildren & {}> = ({ children }) => {
  return (
    <div className="relative inline-flex shrink-0 items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-6 text-base font-bold hover:bg-white">
      <span className="flex items-center justify-center w-full">
        {children}
      </span>
    </div>
  );
};

const HEADER_GROUP_BASE_CLASSES =
  "flex flex-row justify-center items-center gap-5";
const HeaderGroup: React.FC<PropsWithChildren & { type: "nav" | "tools" }> = ({
  children,
  type,
}) => {
  if (type === "nav") {
    return (
      <nav className="absolute inset-0 m-auto hidden lg:flex gap-2 w-fit h-fit">
        {children}
      </nav>
    );
  }

  return <div className={HEADER_GROUP_BASE_CLASSES}>{children}</div>;
};

const Logo: React.FC = () => {
  // spinning svg logo of a gear
  return (
    <svg
      className="w-10 h-10 stroke-current text-black animate-spin"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animationDuration: "5s" }}
    >
      <g fill="none" stroke-width="4" transform="rotate(-22.5 32 32)">
        <path d="M 32 4 A 32 32 0 0 1 42 6" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(45 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(90 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(135 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(180 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(225 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(270 32 32)" />
        <path d="M 32 4 A 32 32 0 0 1 42 6" transform="rotate(315 32 32)" />
      </g>
      <circle fill="none" stroke-width="3" cx="32" cy="32" r="24"></circle>
      <circle fill="none" stroke-width="2" cx="32" cy="32" r="10"></circle>
    </svg>
  );
};

const Header: React.FC = () => {
  return (
    <div className="flex w-full fixed h-16 top-0 justify-center items-center py-2 z-50 text-text-default bg-primary-default">
      <div className="flex h-full justify-between items-center w-full max-w-[82rem] px-4">
        <Logo />
        <HeaderGroup type="nav">
          <HeaderButton>Page 1</HeaderButton>
          <HeaderButton>Page 2</HeaderButton>
          <HeaderButton>Page 3</HeaderButton>
          <HeaderButton>Page 4</HeaderButton>
        </HeaderGroup>
        <HeaderGroup type="tools">
          <HeaderButton>Button 1</HeaderButton>
          <HeaderButton>Button 2</HeaderButton>
        </HeaderGroup>
      </div>
    </div>
  );
};

const MushoAI: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-primary-default">
      <Header />
    </div>
  );
};

export default MushoAI;
