import bg from "../../../assets/hn-east-xmas-market-2.jpg";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-3xl font-bold text-center p-4 text-white">
        Millions of cheap flights. One simple search.
      </h1>
    </div>
  );
};

export default Banner;
