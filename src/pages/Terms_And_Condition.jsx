import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import TermsDetails from '../components/Terms_Details'

const Terms_And_Condition = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Mathedemic Tutoring</title>
        <meta name="description" content="Read Mathedemic's terms and conditions for our online tutoring services, payment policies, cancellation policy, and more." />
        <link rel="canonical" href="https://www.mathedemic.com/terms-and-condition" />
      </Helmet>
        <PageHeader title="Terms & Conditions" />
        <TermsDetails />
    </>
  )
}

export default Terms_And_Condition