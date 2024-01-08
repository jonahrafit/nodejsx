import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { converDateAndHours } from "../../utils/converDateAndHours";
import { getValidationByUser } from "../../store/actions/validation";

function OfferHistory() {
  const dispatch = useDispatch();
  const validations = useSelector((state) => state.validation);
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const auth = useSelector((state) => state.auth);
  const [valuePage, setValuePage] = useState({ start: 0, end: 8 });
  useEffect(() => {
    if (auth.user) dispatch(getValidationByUser(auth.user.hashId));
  }, [dispatch, auth]);

  useEffect(() => {
    setData(validations.reverse());
  }, [validations]);
  // function changeState() {
  //   if (state === 'UP') {
  //     setState('DOWN');
  //     setData(
  //       data.sort(
  //         (a, b) => parseFloat(a.remuneration) - parseFloat(b.remuneration)
  //       )
  //     );
  //   } else {
  //     setState('UP');
  //     setData(
  //       data.sort(
  //         (a, b) => parseFloat(a.remuneration) + parseFloat(b.remuneration)
  //       )
  //     );
  //   }
  // }
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="bg-white shadow-md rounded ">
          <table className="min-w-max w-full max-h-screen table-auto">
            <thead>
              <tr className=" text-gray-600 border-b-2 border-yellow-500 text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Nom de l'offre</th>
                <th className="py-3 px-6 text-left">Rémunération</th>
                <th className="py-3 px-6 text-end">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 text-sm font-light">
              {data.length > 0 &&
                data
                  .slice(valuePage.start, valuePage.end)
                  .map((validation, i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center max-w-[150px]">
                            {isNaN(validation.idt)
                              ? validation.dateH
                              : validation.dateO}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center cursor-pointer max-w-[400px]">
                            <span className="font-medium">
                              {isNaN(validation.idt)
                                ? validation.idt
                                : validation.nom}
                            </span>
                            <span className="text-xs text-blue-500 ml-2">
                              ({validation.offerwall})
                            </span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center ">
                            {isNaN(validation.idt)
                              ? validation.renumerationH
                              : validation.renumerationO}
                            €
                          </div>
                        </td>
                        <td className="py-3 px-6 text-end">
                          <div>
                            <div>
                              <div>
                                {validation.etat === "PENDING_VALIDATION" ? (
                                  <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                    Pré validation
                                  </button>
                                ) : validation.etat === "PENDING" ? (
                                  <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                    En attente
                                  </button>
                                ) : validation.etat === "REFUSED" ? (
                                  <button className="bg-red-500 text-white py-1 px-3 rounded-full text-xs">
                                    Refusé
                                  </button>
                                ) : (
                                  <button className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">
                                    Accepté
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            setValuePage({
              start: valuePage.start - 8,
              end: valuePage.end - 8,
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
              start: valuePage.start + 8,
              end: valuePage.end + 8,
            });
          }}
          className="px-4 text-white text-sm font-extrabold rounded btn btn-primary "
          disabled={valuePage.end >= data?.length ? true : false}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default OfferHistory;
