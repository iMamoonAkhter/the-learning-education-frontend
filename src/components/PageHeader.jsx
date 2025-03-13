import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{title}</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Directly use images from public folder */}
      <div className="shape-1"><img src="/images/shape/1.svg" alt="Shape 1" /></div>
      <div className="shape-2"><img src="/images/shape/2.svg" alt="Shape 2" /></div>
      <div className="shape-3"><img src="/images/shape/3.svg" alt="Shape 3" /></div>
      <div className="shape-4"><img src="/images/shape/4.svg" alt="Shape 4" /></div>
    </section>
  );
};

export default PageHeader;
