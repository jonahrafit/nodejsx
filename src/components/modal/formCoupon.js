import React, {useEffect} from "react";
import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useDispatch} from "react-redux";
import {
    getAllCoupon,
    newCoupon,
    updateCoupon,
} from "../../store/actions/couponAction";

function FormCoupon({current = null, edit, setEdit}) {
    const cancelButtonRef = useRef(null);
    const [coupon, setCoupon] = useState({
        idcoupon: 0,
        actif: 0,
        code: "",
        dateDebut: "",
        dateFin: "",
        description: "",
        description2: "",
        id: 6,
        idcoupon: "",
        image: "",
        nom: "",
        pays: "",
        typecoupon: "",
        url: "",
        valid: 0,
    });

    const dispatch = useDispatch();

    useEffect(() => {

        if (current) {

            setCoupon(current);

        }


    }, []);

    function editCoupon() {
        dispatch(updateCoupon(coupon, coupon.id)).then();
        setEdit(false);
        dispatch(getAllCoupon());
        setCoupon(null);
    }

    function addCoupon() {
        dispatch(newCoupon(coupon))

        setEdit(false);
        dispatch(getAllCoupon());
        setCoupon(null);

        //});
    }

    return (

        <Transition.Root show={edit} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setEdit}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative min-w-[400px] maw-w-[600px] text-black transform overflow-hidden rounded-lg bg-transparent text-left transition-all sm:my-8 ">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="credit">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{coupon.nom}</h4>
                                                <div className="credit-content">
                                                    <div className="form-group mb-4 ">
                                                        <label htmlFor="">Nom</label>
                                                        <input
                                                            onChange={(e) =>
                                                                setCoupon({...coupon, nom: e.target.value})
                                                            }
                                                            type="text"
                                                            className="form-control min-w-[600px]"
                                                            placeholder="Entrez le nom"
                                                            value={coupon.nom}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4 ">
                                                        <label htmlFor="">ID Coupon</label>
                                                        <input
                                                            onChange={(e) =>
                                                                setCoupon({
                                                                    ...coupon,
                                                                    idcoupon: e.target.value,
                                                                })
                                                            }
                                                            type="text"
                                                            className="form-control border-yellow-400 border-2"
                                                            placeholder="Entrez l'ID Coupon"
                                                            value={coupon.idcoupon}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Pays</label>
                                                        <input
                                                            type="text"
                                                            className="form-control border-yellow-400 border-2"
                                                            onChange={(e) =>
                                                                setCoupon({...coupon, pays: e.target.value})
                                                            }
                                                            value={coupon.pays}
                                                            placeholder="Entrez le pays"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Type</label>
                                                        <input
                                                            type="text"
                                                            className="form-control border-yellow-400 border-2"
                                                            onChange={(e) =>
                                                                setCoupon({
                                                                    ...coupon,
                                                                    typecoupon: e.target.value,
                                                                })
                                                            }
                                                            value={coupon.typecoupon}
                                                            placeholder="Entrer le type"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Code</label>
                                                        <input
                                                            type="text"
                                                            className="form-control border-yellow-400 border-2"
                                                            onChange={(e) =>
                                                                setCoupon({...coupon, code: e.target.value})
                                                            }
                                                            value={coupon.code}
                                                            placeholder="Entrez le code"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Url</label>
                                                        <input
                                                            type="text"
                                                            className="form-control border-yellow-400 border-2"
                                                            onChange={(e) =>
                                                                setCoupon({...coupon, url: e.target.value})
                                                            }
                                                            value={coupon.url}
                                                            placeholder="Entrez l'url"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Date début</label>
                                                        <input
                                                            type="date"
                                                            className="form-control border-yellow-400 border-2"
                                                            onChange={(e) =>
                                                                setCoupon({
                                                                    ...coupon,
                                                                    dateDebut: e.target.value,
                                                                })
                                                            }
                                                            value={coupon.dateDebut}
                                                            placeholder="Entrez la date de début"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="">Date fin</label>
                                                        <input
                                                            type="date"
                                                            onChange={(e) =>
                                                                setCoupon({
                                                                    ...coupon,
                                                                    dateFin: e.target.value,
                                                                })
                                                            }
                                                            value={coupon.dateFin}
                                                            className="form-control border-yellow-400 border-2"
                                                            placeholder="Entrez la date de fin"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="">Description</label>
                                                        <textarea
                                                            style={{
                                                                minHeight: "100px",
                                                                padding: "20px",
                                                            }}
                                                            onChange={(e) =>
                                                                setCoupon({
                                                                    ...coupon,
                                                                    description: e.target.value,
                                                                })
                                                            }
                                                            value={coupon.description}
                                                            name=""
                                                            id=""
                                                            rows="10"
                                                            className="form-control border-yellow-400 border-2"
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    {current ? (
                                                        <button
                                                            onClick={() => editCoupon()}
                                                            className="btn btn-primary"
                                                        >
                                                            Save
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => addCoupon()}
                                                            className="btn btn-primary"
                                                        >
                                                            Add
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

    );
}

export default FormCoupon;
