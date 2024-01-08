import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../components/layout/Layout";
import ChooseCoupon from "../components/modal/coupon";
import {getAllCoupon} from "../store/actions/couponAction";
import convertDate from "../utils/converDate";

function Blank() {
    const dispatch = useDispatch();
    const [valuePage, setValuePage] = useState({start: 0, end: 9});
    const coupon = useSelector((state) => state.coupon);
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(false);
    useEffect(() => {
        dispatch(getAllCoupon());
    }, [dispatch]);

    function showCoupon(coupon) {
        setCurrent(coupon);
        setShow(true);
        setTimeout(() => {
            window.open(coupon.url, "blank");
        }, 4000);
    }

    return (
        <>
            <Layout subTitle="Coupon" pageTitle="Choisir votre coupon">
                <div className="gift_card">
                    <div className="container">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                            {coupon.length > 0 &&
                                coupon.slice(valuePage.start, valuePage.end).map((p) => (
                                    <div key={p.id}>
                                        <div
                                            style={{
                                                height: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            className="rounded-lg shadow-lg"
                                        >
                                            <div className="flex justify-center mb-2">
                                                <img
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        showCoupon(p);
                                                    }}
                                                    className="cursor-pointer h-[152px] w-[289px] object-fill rounded-t-lg"
                                                    src={p.image}
                                                    alt={"Logo de " + p.nom}
                                                />
                                            </div>
                                            <h4 className="px-2 text-capitalize">{p.nom}</h4>
                                            {/* <p className="px-2 text-sm">
                        Expire le {convertDate(p.dateFin)}
                      </p> */}
                                            {/* <div className="text-center px-2 pb-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showCoupon(p);
                          }}
                          type="button"
                          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          En profiter
                        </button>
                      </div> */}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => {
                                    setValuePage({
                                        start: valuePage.start - 9,
                                        end: valuePage.end - 9,
                                    });
                                }}
                                disabled={valuePage.start === 0 ? true : false}
                                className="mr-2 text-white text-sm font-extrabold rounded btn btn-primary "
                            >
                                Précédent
                            </button>

                            <button
                                onClick={() => {
                                    setValuePage({
                                        start: valuePage.start + 9,
                                        end: valuePage.end + 9,
                                    });
                                }}
                                className="px-4 text-white text-sm font-extrabold rounded btn btn-primary "
                                disabled={valuePage.end >= coupon?.length ? true : false}
                            >
                                Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
            <ChooseCoupon coupon={current} setShow={setShow} show={show}/>
        </>
    );
}

export default Blank;
