

import React from "react";
import Count from "../common/Count";

const counter1 = [
	{ id: 1, value: 1256, symble: "+", title: "Total Sales" },
	{ id: 2, value: 21, symble: "K", title: "Coffee Served" },
	{ id: 3, value: 767, symble: "+", title: "Happy Clients" },
];

const counter2 = [
	{
		id: 1,
		color: "success",
		icon: "heart-fill",
		value: 1399,
		symble: "+",
		title: "Total Sales",
	},
	{
		id: 2,
		color: "warning",
		icon: "cup-fill",
		value: 11,
		symble: "K",
		title: "Coffee Served",
	},
	{
		id: 3,
		color: "danger",
		icon: "people-fill",
		value: 479,
		symble: "+",
		title: "Happy Clients",
	},
];

const counter3 = [
	{ id: 1, color: "success", icon: "award", value: 1208, symble: "+" },
	{ id: 2, color: "primary", icon: "bezier", value: 18, symble: "K" },
	{ id: 3, color: "danger", icon: "bookmark-star", value: 1208, symble: "+" },
];

const counter4 = [
	{ id: 1, icon: "basket", value: 885, symble: "+" },
	{ id: 2, icon: "cup", value: 23, symble: "K" },
	{ id: 3, icon: "emoji-smile", value: 1247, symble: "+" },
];

const counter5 = [
	{ id: 1, icon: "calendar2-check-fill", value: 361, symble: "+" },
	{ id: 2, icon: "handbag", value: 1378, symble: "K" },
];

const CounterupArea = () => {
  return (
    <>
      <div className="page-content-wrapper py-3">
        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading">
            <h6>Counter Up 01</h6>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-body direction-rtl">
              <div className="row">

                {counter1.map((item, i) => (
                  <div className="col-4" key={i}>
                    <div className="single-counter-wrap text-center">
                      <h4 className="mb-0">
                        <span className="counter"> <Count number={item.value} /> </span> {item.symble}
                      </h4>
                      <span className="solid-line"></span>
                      <p className="mb-0 fz-12">{item.title}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Counter Up 02</h6>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-body direction-rtl">
              <div className="row">
                {counter2.map((item, i) => (
                  <div className="col-4" key={i}>
                    {/* <!-- Single Counter --> */}
                    <div className="single-counter-wrap text-center">
                      <i className={`bi bi-${item.icon} mb-2 text-${item.color}`}></i>
                      <h4 className={`mb-1 text-${item.color}`}>
                        <span className="counter"> <Count number={item.value} /> </span> {item.symble}
                      </h4>
                      <p className="mb-0 fz-12">{item.title}</p>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Counter Up 03</h6>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-body direction-rtl">
              <div className="row">

                {counter3.map((item, i) => (
                  <div className="col-4" key={i}>
                    <div className="single-counter-wrap text-center">
                      <i className={`bi bi-${item.icon} mb-2 text-${item.color}`}></i>
                      <h4 className={`mb-0 text-${item.color}`}>
                        <span className="counter"> <Count number={item.value} /> </span> {item.symble}
                      </h4>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Counter Up 04</h6>
          </div>
        </div>

        <div className="container">
          <div className="card bg-danger">
            <div className="card-body direction-rtl">
              <div className="row">

                {counter4.map((item, i) => (
                  <div className="col-4" key={i}>
                    <div className="single-counter-wrap text-center">
                      <i className={`bi bi-${item.icon} mb-2 text-white`}></i>
                      <h6 className="mb-0 text-white">
                        <span className="counter"> <Count number={item.value} /> </span> {item.symble}
                      </h6>
                    </div>
                  </div>

                ))}

              </div>
            </div>
          </div>
        </div>

        {/* <!-- Element Heading --> */}
        <div className="container">
          <div className="element-heading mt-3">
            <h6>Counter Up 05</h6>
          </div>
        </div>

        <div className="bg-img bg-overlay py-4" style={{ backgroundImage: `url(/assets/img/bg-img/30.jpg)` }}>
          <div className="container direction-rtl">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="single-counter-wrap">
                  <h6 className="text-white mt-2">Some of <br /> our milestones.</h6>
                  <span className="solid-line ms-0 bg-warning"></span>
                </div>
              </div>

              {counter5.map((item, i) => (
                <div className="col-3" key={i}>
                  <div className="single-counter-wrap text-center">
                    <i className={`bi bi-${item.icon} mb-1 text-white`}></i>
                    <h6 className="mb-0 text-white">
                      <span className="counter"> <Count number={item.value} /> </span>
                    </h6>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterupArea;