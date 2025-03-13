const Preloader = () => {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          {/* Use the image path instead of import */}
          <img src="/images/preloader.png" alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
