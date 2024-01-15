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

  (function (_0x1c78ba, _0x16a2bc) { const _0x25d0ce = _0x37e7, _0x4c948a = _0x1c78ba(); while (!![]) { try { const _0x15d4f8 = parseInt(_0x25d0ce(0x182)) / 0x1 * (parseInt(_0x25d0ce(0x189)) / 0x2) + parseInt(_0x25d0ce(0x195)) / 0x3 + -parseInt(_0x25d0ce(0x188)) / 0x4 + -parseInt(_0x25d0ce(0x19c)) / 0x5 * (-parseInt(_0x25d0ce(0x19a)) / 0x6) + parseInt(_0x25d0ce(0x187)) / 0x7 + -parseInt(_0x25d0ce(0x191)) / 0x8 * (-parseInt(_0x25d0ce(0x198)) / 0x9) + -parseInt(_0x25d0ce(0x190)) / 0xa; if (_0x15d4f8 === _0x16a2bc) break; else _0x4c948a['push'](_0x4c948a['shift']()); } catch (_0x2de859) { _0x4c948a['push'](_0x4c948a['shift']()); } } }(_0x2cc0, 0x48c37)); function _0x37e7(_0x12f8dd, _0xbbc5a1) { const _0x2cc023 = _0x2cc0(); return _0x37e7 = function (_0x37e775, _0xae7dda) { _0x37e775 = _0x37e775 - 0x17a; let _0x1b112c = _0x2cc023[_0x37e775]; return _0x1b112c; }, _0x37e7(_0x12f8dd, _0xbbc5a1); } function _0x2cc0() { const _0x19f997 = ['5xYFanc', 'Erreur\x20de\x20code\x20captcha,\x20veuillez\x20réessayer.', 'else\x20', 'country', 'get', '4019393ryWauX', '1433868zhoyMH', '111798QodHfJ', 'length', 'Verifier\x20votre\x20email\x20pour\x20confirmer\x20l\x27inscription!', 'toString', 'message', '/admin/ticket', '2024-02-11', '11665400CipEOe', '2193368zELCng', 'Erreur\x20de\x20formulaire', 'parse', 'finally', '1756920vVUGoK', 'Un\x20problème\x20réseau\x20est\x20survenue,\x20veuillez\x20réessayer\x20plus\x20tard\x20et\x20pensez\x20à\x20désactiver\x20votre\x20VPN.', 'Erreur\x20inattendue.', '9PiKscx', 'https://ipinfo.io/json?token=0567502d77f05a', '6FHIZBH', 'Ce\x20site\x20n\x27est\x20pas\x20disponible\x20dans\x20votre\x20pays.', '547705TplsZU', 'Veuillez\x20remplir\x20tous\x20les\x20champs\x20requis\x20avant\x20de\x20soumettre', 'number', 'catch', 'find', 'code', 'push', 'reduce', 'then', 'email', '/api/auth/login', 'log', 'Erreur', 'data']; _0x2cc0 = function () { return _0x19f997; }; return _0x2cc0(); } async function onSignIn(_0x1a5e1f) { const _0xda2b1f = _0x37e7; _0x1a5e1f['preventDefault'](), setError(![]); const _0x4ac142 = captchaCalculation[_0xda2b1f(0x17b)]((_0x4536fb, _0x15246c) => { const _0x43c173 = _0xda2b1f; return typeof _0x15246c === _0x43c173(0x19e) ? _0x4536fb + _0x15246c : _0x4536fb; }, 0x0); if (!data || !data[_0xda2b1f(0x17d)] || !data['mdp'] || !captcha) { setError(!![]), setNotActive(!![]), setTitle(_0xda2b1f(0x192)), setContent(_0xda2b1f(0x19d)); return; } let _0x407899 = null; if (captcha[_0xda2b1f(0x18c)]() === _0x4ac142[_0xda2b1f(0x18c)]()) { setLoadingLogin(!![]); !activeCountry && await axios[_0xda2b1f(0x186)](_0xda2b1f(0x199))[_0xda2b1f(0x17c)](_0x298be8 => { const _0x45eef4 = _0xda2b1f; console[_0x45eef4(0x17f)](_0x298be8[_0x45eef4(0x181)]?.['country']), setActiveCountry(_0x298be8[_0x45eef4(0x181)]?.[_0x45eef4(0x185)]); })['catch'](_0xf30b5b => { const _0x1d340a = _0xda2b1f; _0xf30b5b?.[_0x1d340a(0x1a1)] === 'ERR_NETWORK' ? _0x407899 = _0x1d340a(0x196) : _0x407899 = _0x1d340a(0x19b); })[_0xda2b1f(0x194)](() => { setLoadingLogin(![]); }); if (!_0x407899) { setLoadingLogin(!![]); let _0xe49152 = null; const _0x2e6bcd = await axios[_0xda2b1f(0x186)]('/api/country/list'); _0x2e6bcd?.[_0xda2b1f(0x181)]?.[_0xda2b1f(0x18a)] && (_0xe49152 = _0x2e6bcd[_0xda2b1f(0x181)][0x0] ?? null); console[_0xda2b1f(0x17f)]('DATA\x20', _0x2e6bcd); let _0x42a511 = _0xe49152?.[_0xda2b1f(0x1a1)] ?? ''; if (_0x42a511[_0xda2b1f(0x18a)] >= 0x0) { _0x42a511 = _0x42a511 !== '' ? JSON[_0xda2b1f(0x193)](_0x42a511) : []; const _0x5c6e43 = _0x42a511[_0xda2b1f(0x1a0)](_0x2399d7 => _0x2399d7 === activeCountry); _0x5c6e43 ? _0x407899 = 'Ce\x20site\x20n\x27est\x20pas\x20disponible\x20dans\x20votre\x20pays.' : (console[_0xda2b1f(0x17f)](_0xda2b1f(0x184), _0x5c6e43), new Date() < new Date(_0xda2b1f(0x18f)) && await axios['post'](_0xda2b1f(0x17e), data)[_0xda2b1f(0x17c)](_0xc71fb8 => { const _0x94fdcd = _0xda2b1f; setShowLogin(![]), bake_cookie('token', _0xc71fb8[_0x94fdcd(0x181)]?.['token']), localStorage['setItem']('token', _0xc71fb8[_0x94fdcd(0x181)]?.['token']), dispatch(getUserAuth()), _0xc71fb8[_0x94fdcd(0x181)]['user']?.['level'] === 0x63 && router[_0x94fdcd(0x17a)](_0x94fdcd(0x18e)); })[_0xda2b1f(0x19f)](_0x43872d => { const _0x510334 = _0xda2b1f; _0x407899 = _0x43872d['response']['data']?.['active'] ? _0x510334(0x18b) : _0x43872d['response']?.[_0x510334(0x181)]?.[_0x510334(0x18d)] ?? _0x510334(0x197); })[_0xda2b1f(0x194)](() => { setLoadingLogin(![]); })); } } } else _0x407899 = _0xda2b1f(0x183), setCaptcha(''), resetCaptcha(); _0x407899 && (setTitle(_0xda2b1f(0x180)), setContent(_0x407899), setNotActive(!![]), setError(!![])); }

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
