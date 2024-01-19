import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import CommandHistory from "../components/member/command";
import OfferHistory from "../components/member/offer";
import { getValidationByUser } from "../store/actions/validation";

function Blank() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [title,] = useState("Mes Participations");
  const [orderOfData, setOrderOfData] = useState('UP');
  
  useEffect(() => {
    if (auth.user) dispatch(getValidationByUser(auth.user.hashId));
  }, [dispatch, auth]);

  const validations = useSelector((state) => state.validation);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(validations.reverse());
  }, [validations]);


  function handlechangeOrder() {
    console.log('DATA NORMALEA', data);
    data.sort(
      (a, b) => parseFloat(a.remunerationH) - parseFloat(b.remunerationH)
    );
    console.log('DATA NORMALEA', data);
    if (orderOfData === "UP") {
      setOrderOfData("DOWN");
      setData(
        data.sort(
          (a, b) => parseFloat(a.remunerationH) - parseFloat(b.remunerationH)
        )
      );
    } else {
      setOrderOfData("UP");
      setData(
        data.sort(
          (a, b) => parseFloat(a.remunerationH) + parseFloat(b.remunerationH)
        )
      );
    }
  }

  return (
    <>
      <Layout subTitle=""
        pageTitle={title}
        show_button_order={true}
        handlechangeOrder={handlechangeOrder}
        orderOfData={orderOfData}
      >
        <div className="offer-v1 min-h-[55vh]">
          <div className="row">
            <div className="col-xl-12">
              <div className="card-body">
                <OfferHistory data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </>
  );
}

export default Blank;
