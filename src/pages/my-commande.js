import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import CommandHistory from "../components/member/command";
import OfferHistory from "../components/member/offer";

import { getValidationByUser } from "../store/actions/validation";

function Blank() {
  const dispatch = useDispatch();
  const validations = useSelector((state) => state.validation);
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [title, setTitle] = useState("Mes Commandes");
  const [current, setCurrent] = useState("COMMAND");
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    return () => {
      if (auth.user) dispatch(getValidationByUser(auth.user.hashId));
    };
  }, [dispatch, auth]);
  // console.log(validations);
  useEffect(() => {
    return () => {
      setData(validations);
    };
  }, [validations]);

  function changeState() {
    if (state === "UP") {
      setState("DOWN");
      setData(
        data.sort(
          (a, b) => parseFloat(a.remuneration) - parseFloat(b.remuneration)
        )
      );
    } else {
      setState("UP");
      setData(
        data.sort(
          (a, b) => parseFloat(a.remuneration) + parseFloat(b.remuneration)
        )
      );
    }
  }

  function view() {
    switch (current) {
      // case "OFFER":
      //   return <OfferHistory />;
      //   break;
      case "COMMAND":
        return <CommandHistory />;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Layout subTitle="" pageTitle={title}>
        <div className="offer-v1 min-h-[55vh]">
          <div className="">
            <div className="row">
              <div className="col-xl-12">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12 d-flex justify-content-end">
                      <div className="revenue_universe card">
                        <div className="card-header">
                          <div className="option-btn">
                            <div className="dropdown">
                              <button
                                onClick={() => changeState()}
                                className="btn btn-option px-2 py-1"
                                data-bs-toggle="dropdown"
                              >
                                {state === "UP" ? "Croissant" : "Décroissant"}
                                <span>
                                  <i
                                    className={
                                      "la la-angle-" + (state === "UP" ? "up" : "down")
                                    }
                                    title="Tri par date"
                                  ></i>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">{view()}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {/* <div className="revenue_universe card">
                  <div className="card-header">
                    <h4 className="card-title">Revenue Universe</h4>
                    <div className="option-btn">
                      <div className="dropdown">
                        <button
                          className="btn btn-option"
                          data-bs-toggle="dropdown"
                        >
                          Options
                          <span>
                            <i className="la la-angle-down"></i>
                          </span>
                        </button>
                        <div className="dropdown-menu">
                          <h6>Quick Actions</h6>
                          <a href="#">
                            <span>
                              <i className="la la-refresh"></i>
                            </span>{" "}
                            Reload
                          </a>
                          <a href="#">
                            <span>
                              <i className="la la-plus-square-o"></i>Open New Tab
                            </span>
                          </a>
                          <a href="#">
                            <span>
                              <i className="la la-question"></i>
                            </span>{" "}
                            FAQ
                          </a>
                        </div>
                      </div>

                      <button className="btn btn-missing">Missing Points</button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="adgate">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="adcend">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="offertoro">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="newtag">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="easytag">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="adgem">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="peanut">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="revenue">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="kiwiwall">
                        <div className="iframe-redirect">
                          <img src="./images/brand/sayso.png" alt="" />
                          <a href="#" className="redirect-btn wave-effect">
                            Continue
                          </a>
                          <p>
                            You will be redirected to sayso rewards to Complete
                            this survey
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pointclicktrack">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="personally">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ayet">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="superrewards">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="offerdaddy">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="radiumone">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="adwork">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="figure">
                        <div className="social_task-table table-responsive">
                          <table className="table" style={{ minWidth: "600px" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="social_icon twitter">
                                    <img
                                      src="./images/svg/twitter.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span>
                                    <img
                                      src="./images/svg/checked.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon instagram">
                                    <img
                                      src="./images/svg/instagram.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="social_icon facebook">
                                    <img
                                      src="./images/svg/facebook.svg"
                                      alt=""
                                    />
                                  </span>
                                </td>
                                <td>
                                  <p>
                                    <strong>Board Kings - iOS</strong>
                                  </p>
                                  <span>
                                    Open the game and complete level 50 within
                                    10 days.
                                  </span>
                                </td>
                                <td>
                                  <span className="earn_gem">
                                    Earn 250{" "}
                                    <img src="./images/svg/gem.svg" alt="" />
                                  </span>
                                </td>
                                <td className="text-center">
                                  <button className="btn btn-primary">
                                    Complete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
    </>
  );
}

export default Blank;
