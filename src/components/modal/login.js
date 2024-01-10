import React from "react";
// import Link from "next/link";
import { Fragment, useRef, useState, useEffect } from "react";
// import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
// import ReCAPTCHA from "react-google-recaptcha";
// import config from "../../utils/config";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
// import {useDispatch, useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { bake_cookie } from "sfcookies";

import { Dialog, Transition } from "@headlessui/react";
import SentConfirmation from "./confirmEmail";
import ResetPassword from "../modal/resetPassword";
import Swal from "sweetalert2";
import { getUserAuth } from "../../store/actions/userAction";

// import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
// import Captcha from '../captcha';
function Login({ showLogin, setShowLogin, setShowRegister }) {
  const cancelButtonRef = useRef(null);
  // const recaptchaRef = React.createRef();
  const [showResetPass, setShowResetPass] = useState(false);
  const [error, setError] = useState(false);
  const [notActive, setNotActive] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [activeCountry, setActiveCountry] = useState(null);
  const [data, setData] = useState({
    email: "",
    mdp: "",
  });
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const [captcha, setCaptcha] = useState("");
  const [captchaCalculation, setCaptchaCalculation] = useState([]);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => resetCaptcha(), []);

  const resetCaptcha = () => {
    const captchaCalculation = [
      Math.floor(Math.random() * 10) + 1,
      ["+"],
      Math.floor(Math.random() * 10) + 1,
    ];

    setCaptchaCalculation(captchaCalculation);
  };

  async function onSignIn(e) {
    e.preventDefault();
    setError(false);
    const captchaResponse = captchaCalculation.reduce((acc, curr) => {
      // 1 + 2 = 3  // 1 - 2 = -1
      if (typeof curr === "number") {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);

    if (!data || !data.email || !data.mdp || !captcha) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: "Veuillez remplir tous les champs requis",
      });
      // setError(true);
      // setNotActive(true);
      // setTitle("Erreur");
      // setContent("Veuillez remplir tous les champs requis");
      return;
    }

    let _errorMessage = null;
    if (captcha.toString() === captchaResponse.toString()) {
      setLoadingLogin(true);
      if (!activeCountry) {
        await axios
          .get("https://ipinfo.io/json?token=0567502d77f05a")
          .then((res) => {
            setActiveCountry(res.data?.country);
          })
          .catch((err) => {
            if (err?.code === "ERR_NETWORK") {
              _errorMessage =
                "Un problème réseau est survenue, veuillez réessayer plus tard et pensez à désactiver votre VPN.";
            } else {
              _errorMessage = "Ce site n'est pas disponible dans votre pays.";
            }
          })
          .finally(() => {
            setLoadingLogin(false);
          })
      }

      if (!_errorMessage) {
        setLoadingLogin(true);
        let country = null;
        const _data = await axios.get("/api/country/list");
        if (_data?.data?.length) {
          country = _data.data[0] ?? null;
        }
        let _code = country?.code ?? "";
        if (_code.length >= 0) {
          _code = _code !== "" ? JSON.parse(_code) : [];
          const isExist = _code.find((c) => c === activeCountry);

          if (isExist) {
            _errorMessage = "Ce site n'est pas disponible dans votre pays.";
          } else {
            await axios
              .post(`/api/auth/login`, data)
              .then((res) => {
                setShowLogin(false);
                bake_cookie("token", res.data?.token);
                localStorage.setItem("token", res.data?.token);
                dispatch(getUserAuth());
                if (res.data.user?.level === 99) {
                  router.push("/admin/ticket");
                }
              })
              .catch((err) => {
                _errorMessage = err.response.data?.active
                  ? "Verifier votre email pour confirmer l'inscription!"
                  : err.response?.data?.message ?? "Erreur inattendue.";
              })
              .finally(() => {
                setLoadingLogin(false);
                //    setShowLogin(false);
              });
          }
        }
      }
    } else {
      _errorMessage = "Erreur de code captcha, veuillez réessayer.";
      setCaptcha("");
      resetCaptcha();
    }

    if (_errorMessage) {
      // setTitle("Erreur");
      Swal.fire({
        icon: 'info',
        title: 'Erreur!',
        text: _errorMessage,
      });
      // setContent(_errorMessage);
      // setNotActive(true);
      // setError(true);
    }
  }

  /*
    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }

        setCaptcha(true);
        recaptchaRef.current.reset();
    };
//*/

  const endAlert = (closed) => {
    if (!closed) {
      setShowLogin(true);
    }

    setNotActive(closed);
  };

  return (
    <>
      <Transition.Root show={showLogin} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowLogin}
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="flex">
                    {/* <div className="hidden relative lg:flex w-2/5 bg-indigo-600 overflow-hidden px-5 py-12 border-r border-gray-300">
                      <div className="flex items-center justify-center w-full">
                        <div className="text-center space-y-2">
                          <span className="text-4xl font-bold text-gray-100">
                            Connectez-vous à votre compte
                          </span>
                          <p className="text-indigo-200 text-base">
                            Entrez maintenant sur multi-cadeau et commencez à
                            gagner de l'argent!
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="flex flex-col px-5 py-12 w-full ">
                      <div>
                        <div className="text-2xl  font-bold sm:text-center">
                          Connexion
                        </div>
                        <div className="text-gray-600 mt-3 text-base sm:text-center">
                          Vous n'avez pas du compte ?
                          <button
                            onClick={() => {
                              setShowRegister(true);
                              setShowLogin(false);
                            }}
                            type="button"
                            className="inline-flex items-center justify-center gap-0.5 font-medium hover:underline focus:outline-none focus:underline filament-link text-indigo-600 hover:text-indigo-500"
                          >
                            <span className="text-indigo-600 px-2">
                              Inscription
                            </span>
                          </button>
                        </div>
                      </div>
                      <form
                        onSubmit={(e) => onSignIn(e)}
                        className="space-y-5 mt-8"
                      >
                        <div>
                          <div className="grid grid-cols-1 gap-3 filament-forms-component-container">
                            <div className=" col-span-1     ">
                              <div className="filament-forms-field-wrapper">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                    <label
                                      className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                      htmlFor="email"
                                    >
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        Email
                                        <sup className="font-medium text-danger-700">
                                          *
                                        </sup>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                      <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="24"
                                          cy="12"
                                          r="8"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></circle>
                                        <path
                                          d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <input
                                        type="email"
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            email: e.target.value,
                                          })
                                        }
                                        value={data.email}
                                        placeholder="Entrez votre adresse e-mail"
                                        required=""
                                        className="block w-full pl-10 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className=" col-span-1   mt-2  ">
                              <div className="filament-forms-field-wrapper">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                    <label
                                      className="inline-flex items-center space-x-3 rtl:space-x-reverse filament-forms-field-wrapper-label"
                                      htmlFor="password"
                                    >
                                      <span className="text-base font-medium leading-4 text-gray-700">
                                        Mot de passe
                                        <sup className="font-medium text-danger-700">
                                          *
                                        </sup>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                      <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          width="48"
                                          height="48"
                                          fill="white"
                                          fillOpacity="0.01"
                                        ></rect>
                                        <rect
                                          x="6"
                                          y="22"
                                          width="36"
                                          height="22"
                                          rx="2"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinejoin="round"
                                        ></rect>
                                        <path
                                          d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M24 30V36"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <input
                                        type="password"
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            mdp: e.target.value,
                                          })
                                        }
                                        value={data.mdp}
                                        placeholder="Entrez votre mot de passe"
                                        required=""
                                        className="block w-full py-2 text-sm border-1 transition duration-75 pl-10 rounded-lg focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-span-1 ">
                              {/* <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={config.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={onReCAPTCHAChange}
                              /> */}
                              <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                  <p className="mt-3 ">
                                    {captchaCalculation?.join(" ")}
                                  </p>
                                </div>
                                <div className="flex-1">
                                  <input
                                    type="number"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                    placeholder="Enter Captcha"
                                    required=""
                                    className="block w-full pl-16 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className={`inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-sm text-white focus:ring-white border-transparent ${loadingLogin
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700"
                                  } w-full`}
                                disabled={loadingLogin}
                              >
                                {loadingLogin ? "En cours de traitement ..." : "Se connecter"}
                              </button>
                              {/* <input
                                type="submit"
                                value="Login"
                                className="inline-flex p-0 items-center cursor-pointer text-base justify-center gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button h-9 px-4 text-white focus:ring-white border-transparent bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 focus:ring-offset-indigo-700 w-full"
                              /> */}
                            </div>
                          </div>
                        </div>
                      </form>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowResetPass(true);
                          setShowLogin(false);
                        }}
                        className="underline inline-flex my-2 items-center justify-center text-gray-600 rounded-xl border border-transparent  font-bold "
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <SentConfirmation
        setConfirm={endAlert}
        confirm={notActive}
        content={content}
        title={title}
        isError={error}
      />
      <ResetPassword
        setShowResetPass={setShowResetPass}
        showResetPass={showResetPass}
      />
    </>
  );
}

export default Login;
