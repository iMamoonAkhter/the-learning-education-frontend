import { Link } from "react-router-dom";
import shoot from "../assets/images/shoot.png";

const US_International_Details = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          {/* Fee Structure for Year Group 1-4 */}
          <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-4">
            Fee Structure for <span className="text-gray-900 dark:text-white">Year Group 1-4</span>
          </h2>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 2 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]" >
              <h3 className="mb-4 text-2xl font-semibold">2 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$100</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$80</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 20%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 2 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 8 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 3 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">3 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$150</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$110</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 25%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 3 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 12 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 5 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">5 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$275</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$165</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 40%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Monday-Friday</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 22 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>
          </div>

          {/* Fee Structure for Year Group 5-8 */}
          <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-4" style={{ marginTop: '4rem' }}>
            Fee Structure for <span className="text-gray-900 dark:text-white">Year Group 5-8</span>
          </h2>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 2 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">2 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$110</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$90</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 20%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 2 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 8 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 3 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">3 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$170</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$125</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 25%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 3 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 12 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 5 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">5 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$310</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$185</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 40%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Monday-Friday</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 22 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>
          </div>

          {/* Fee Structure for Year Group 9-10 */}
          <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-4" style={{ marginTop: '4rem' }}>
            Fee Structure for <span className="text-gray-900 dark:text-white">Year Group 9-10</span>
          </h2>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 2 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">2 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$130</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$105</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 20%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 2 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 8 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 3 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">3 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$190</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$140</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 25%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 3 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 12 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 5 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">5 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$350</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$210</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 40%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Monday-Friday</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 22 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>
          </div>

          {/* Fee Structure for Year Group 11-12 */}
          <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-4" style={{ marginTop: '4rem' }}>
            Fee Structure for <span className="text-gray-900 dark:text-white">Year Group 11-12</span>
          </h2>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 2 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">2 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$150</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$130</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 20%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 2 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 8 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 3 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">3 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$215</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$160</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 25%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Any 3 Weekdays*</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 12 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>

            {/* 5 Days / Week */}
            <div className="flex flex-col mx-auto custom-card text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-[105%]">
              <h3 className="mb-4 text-2xl font-semibold">5 Days / Week</h3>
              <del className="font-bold text-red-500" style={{ textAlign: 'left', fontSize: '2.5rem' }}>$390</del>
              <div className="flex justify-center items-baseline" style={{ marginTop: '1.5rem' }}>
                <span className="mr-2 text-5xl font-extrabold">$230</span>
                <span className="text-gray-500 dark:text-gray-400">/Month</span>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="font-bold text-red-500" style={{ fontSize: '1.35rem' }}>SAVE 40%</p>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> One-to-One Live Session</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 1 Hour Class Each Day</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> Monday-Friday</li>
                <li className="list-item d-flex"><img src={shoot} style={{marginRight: "5px"}} alt="Checkmark icon" width="30" /> 22 Classes per-month</li>
              </ul>
              <Link style={{textDecoration: "none"}} to="/free-trial" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5">
                Get Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default US_International_Details;