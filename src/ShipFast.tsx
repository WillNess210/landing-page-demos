const ShipFast: React.FC<{}> = () => {
  return (
    <main className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16 px-8 py-8 mx-auto max-w-7xl bg-base-100 lg:flex-row lg:gap-20 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-10 text-center lg:gap-14 lg:text-left lg:items-start">
          <div className="text-4xl font-extrabold tracking-tight lg:text-6xl md:-mb-4">
            A <span className="text-blue-700">cool</span> new way to eat
            <span className="text-blue-700"> chickens</span> and{" "}
            <span className="text-red-500">cows</span>.
          </div>
          <div className="text-lg font-bold leading-relaxed opacity-80">
            It's called a <span className="text-blue-700">metal fork</span>, and
            its available{" "}
            <span className="text-red-500 font-extrabold">now.</span>
          </div>
          <button className="btn">Buy now</button>
        </div>
        <div className="lg:w-full">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9x9VbOAm0tY?si=_bfkHpIlZcL1xD9G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default ShipFast;
