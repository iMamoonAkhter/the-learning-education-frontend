import preloaderImage from "../../public/images/preloader.png"; // Adjust path as needed

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img src={preloaderImage} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
