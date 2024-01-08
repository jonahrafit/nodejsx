import React from "react";

function PageTitle({pageTitle, subTitle}) {
    return (
        <>
            <div className="page_title">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div>
                                <div className="text-sm ">{subTitle}</div>
                                <h5 className="text-2xl underline underline-offset-1 decoration-[10px] decoration-yellow-200">{pageTitle}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="ani-3">
          <img src="./images/svg/brown_circle.svg" alt="" />
        </div>
        <div className="ani-4">
          <img src="./images/svg/line.svg" alt="" />
        </div>
        <div className="ani-6">
          <img src="./images/svg/circle2.svg" alt="" />
        </div>
        <div className="ani-7">
          <img src="./images/svg/circleline.svg" alt="" />
        </div>
        <div className="ani-8">
          <img src="./images/svg/polygon.svg" alt="" />
        </div> */}
            </div>
        </>
    );
}

export default PageTitle;
