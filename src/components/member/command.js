import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function CommandHistory() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [valuePage, setValuePage] = useState({ start: 0, end: 8 });
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.user) {
      axios
        .post("/api/command/user", {
          userID: auth.user.hashId,
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, [dispatch, auth]);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="bg-white shadow-md rounded ">
          <table className="min-w-max w-full max-h-screen table-auto">
            <thead>
              <tr className=" text-gray-600 border-b-2 border-yellow-500 text-sm leading-normal">
                <th className="py-3 px-6 text-left">Boutique</th>
                <th className="py-3 px-6 text-left">Catégorie</th>
                <th className="py-3 px-6 text-left">Montant</th>
                <th className="py-3 px-6 text-left">Code Promo</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 text-sm font-light">
              {data.length > 0 &&
                data.slice(valuePage.start, valuePage.end).map((command, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center cursor-pointer max-w-[200px]">
                        <span className="font-medium hover:text-yellow-500">
                          {command.bnom}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center max-w-[150px]">
                        {command.cnom}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center ">
                        {command.amount} €
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center font-semibold text-lg">
                        {command.code_promo}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-end">
                      <div>
                        <div>
                          <div>
                            {command.status === "PENDING" ? (
                              <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                En attente
                              </button>
                            ) : command.status === "REFUSED" ? (
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
                ))}
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

export default CommandHistory;
