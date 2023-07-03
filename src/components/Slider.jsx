import { Prev, Next } from "../assets/icons/icons";

export default function Button({ data, setCurrentIndex }) {
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <button className="btn translate-x-[0.05rem]" onClick={handlePrevClick}>
        <img src={Prev} alt="" className="max-w-[0.6rem] xl:max-w-[1rem]" />
      </button>
      <button className="btn" onClick={handleNextClick}>
        <img src={Next} alt="" className="max-w-[0.6rem] xl:max-w-[1rem]" />
      </button>
    </>
  );
}
