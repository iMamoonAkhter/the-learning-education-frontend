import { Link } from "react-router-dom";
import shape1 from "../../public/images/shape/1.svg";
import shape2 from "../../public/images/shape/2.svg";
import shape3 from "../../public/images/shape/3.svg";
import shape4 from "../../public/images/shape/4.svg";

const PageHeader = ({ title }) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{title}</h2>
              <ol>
                <li><Link to="/" >Home</Link></li>
                <li>{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1"><img src={shape1} alt="Shape 1" /></div>
      <div className="shape-2"><img src={shape2} alt="Shape 2" /></div>
      <div className="shape-3"><img src={shape3} alt="Shape 3" /></div>
      <div className="shape-4"><img src={shape4} alt="Shape 4" /></div>
    </section>
  );
};

export default PageHeader;
