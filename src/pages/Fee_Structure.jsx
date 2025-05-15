import PageHeader from "../components/PageHeader";
import UK_Details from "../components/UK_Details";
import { useLocation } from "react-router-dom";
import US_International_Details from "../components/US_Internation_Details";

const UK_Fee_Structure = () => {
  const nav = useLocation();
  console.log(nav.pathname);
  return (
    <>
      {nav.pathname == "/uk-fee-structure" && (
        <div>
          <PageHeader title={"UK Fee Structure"} />
          <UK_Details />
        </div>
      )}

      {nav.pathname == "/us-international-fee-structure" && (
        <div>
          <PageHeader title={"US & International Fee Structure"} />
          <US_International_Details />
        </div>
      )}
    </>
  );
};

export default UK_Fee_Structure;
