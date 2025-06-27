// write a function to toggle active class for sources in dark/light mode

const Body = () => {
  return (
    <>
      <div className="top-container body-pg">
        <div className="home-bg">{/* <img src={homeImg} alt="" /> */}</div>

        <div className="source light active">
          Photo by{" "}
          <a href="https://unsplash.com/@virussinside?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Artiom Vallat
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/thick-fogs-hovering-over-snow-covered-pine-trees-tYoMpP0tyEk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </div>
        <div className="source dark">
          Photo by{" "}
          <a href="https://unsplash.com/@darkcatimages?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Scott Lord
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/a-beautiful-spiral-galaxy-surrounded-by-stars-NFFPYaWYQQk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
};

export default Body;
