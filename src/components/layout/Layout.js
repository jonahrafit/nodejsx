import React, { useEffect, useRef, useState } from "react";
import { useDetectAdBlock } from "adblock-detect-react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { io } from "socket.io-client";

import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Header from "./Header";
import Side from "../home/side";
import Alert from "../modal/alert";
import AlertActiveAddBlock from "../modal/alertActiveAddBlock";
import AlertAvertissement from "../modal/alertAvertissement";
import AlertBanni from "../modal/alertBanni";
import Chat from "../modal/chat";
import TicketDetails from "../modal/ticketDetails";

import { newMessageAction } from "../../store/actions/messageAction";
import { getUserAuth } from "../../store/actions/userAction";

import "react-toastify/dist/ReactToastify.css";

let socket;

function Layout({
  children,
  pageTitle,
  subTitle,
  show_button_order,
  handlechangeOrder,
  orderOfData,
  show_search_bar,
  text_search,
  handlechangeTextSearch
}) {
  const [isChat, setIsChat] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [isSpam, setIsSpam] = useState(false);
  const [isAvertissement, setIsAvertissement] = useState(false);
  const [activeAddBlock, setActiveAddBlock] = useState(false);
  const [activeBanni, setActiveBanni] = useState(0);
  const [count, setCount] = useState(0);
  const [newMessage, setNewMessage] = useState({
    time: new Date().getTime(),
    idUser: "",
    message: "",
    date: new Date(),
  });
  const router = useRouter();
  const [showReplyTicket, setShowReplyTicket] = useState(false);
  const adBlockDetected = useDetectAdBlock();
  const [avert, setAvert] = useState();
  const [dataTicket, setDataTicket] = useState([]);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isMounted = useRef(true);
  const [showAlertActiveAddBlock, setShowAlertActiveAddBlock] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchData = () => {
    if (isMounted.current) {
      Promise.all([
        async () => {
          dispatch(getUserAuth()).then();
          checkAvertissement(auth.user?.id);
          socketInitializer().then();

          if (adBlockDetected) {
            setActiveAddBlock(adBlockDetected);
            setShowAlertActiveAddBlock(true);
          }

          getTicket().then();

          if (auth.user?.banni === 1) {
            setActiveBanni(auth.user?.banni);
          }
        },
      ]).then();
    }
  };

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  useEffect(() => {
    checkAvertissement(auth.user?.id);
  }, [auth]);

  useEffect(() => {
    socketInitializer();
  }, []);

  useEffect(() => {
    if (adBlockDetected) {
      setShowAlertActiveAddBlock(true);
      setActiveAddBlock(adBlockDetected);
    }
    getTicket();
    auth.user?.banni == 1 && setActiveBanni(auth.user?.banni);
  }, [count]);

  function checkAvertissement(id) {
    axios
      .post("/api/user/check-avertissement", { idUser: id })
      .then(async (res) => {
        setAvert(res.data.data);
        const lengthData = await res.data.data.length;
        if (lengthData) {
          setIsAvertissement(true);
        } else {
          setIsAvertissement(false);
        }
      });
  }

  async function showModalTicketResponse() {
    toast.dismiss();
    await axios.post("/api/ticket/vuTicket", { hashId: dataTicket.hashId });
    setShowReplyTicket(true);
    getTicket().then();
  }

  async function getTicket() {
    await axios
      .post(`/api/ticket/findTicket`, { email: auth.user?.email })
      .then((res) => {
        let value = [];
        if (res?.data?.length) {
          value = res.data.filter((e) => {
            return e.vu === 0;
          });
        }

        if (value?.length > 0) {
          const { response } = value[0];
          setDataTicket(value[0]);
          const rep =
            response?.length > 35
              ? response?.substring(0, 35) + "..."
              : response;
          if (
            value[0].status.toString() === "OK" &&
            value[0].vu?.toString() === "0"
          ) {
            toast.info("Admin: " + rep);
          }
        }
      })
      .catch((err) => console.log(err));
  }

  const socketInitializer = async () => {
    await fetch("/api/auth/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("messageSent", (msg) => {
      dispatch(newMessageAction(msg));
    });
  };

  function sendMessage() {
    if (
      new RegExp(
        "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
      ).test(newMessage.message)
    ) {
      setIsUrl(true);
    } else {
      if (
        messages.length > 0 &&
        messages[messages.length - 1].hashId === auth.user.hashId
      ) {
        setIsSpam(true);
      } else {
        console.log(messages);
        console.log("-----------------");
        console.log(newMessage);
        alert('eto misy');
        socket.emit(
          "sendMessage",
          {
            ...newMessage,
            time: new Date().getTime(),
            idUser: auth.user.hashId,
            date: new Date(),
          },
          () => {
            setNewMessage({
              ...newMessage,
              message: "",
            });
          }
        );
      }
    }
  }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
      >
        <Head>
          <title>Maxcadeaux</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
          />
        </Head>
        <div id="main-wrapper">
          <Header />
          <div className="mt-[100px]"></div>
          <Side>
            <PageTitle
              pageTitle={pageTitle}
              show_button_order={show_button_order}
              handlechangeOrder={handlechangeOrder}
              orderOfData={orderOfData}
              show_search_bar={show_search_bar}
              text_search={text_search}
              handlechangeTextSearch={handlechangeTextSearch}
            // subTitle={subTitle}
            />
            {children}
          </Side>
          <Footer />
        </div>
        {auth.isAuth && (
          <button
            onClick={() => setIsChat(!isChat)}
            className={
              "fixed bottom-5 z-10 cursor-pointer right-10 inline-flex items-center text-sm font-medium text-white  rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2 " +
              (isChat
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#2a4d9c] hover:bg-[#2a4d9c]")
            }
          >
            <svg
              className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2"
              viewBox="0 0 12 12"
            >
              <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
            </svg>
            <span>{!isChat ? "Chat" : "Close"}</span>
          </button>
        )}
        {isChat && (
          <Chat
            sendMessage={sendMessage}
            setNewMessage={setNewMessage}
            newMessage={newMessage}
          />
        )}

        {isUrl && (
          <Alert
            content={"Interdit d'envoyer un url"}
            setShow={setIsUrl}
            show={isUrl}
            title={"Erreur url"}
            isSuccess={false}
          />
        )}

        {isSpam && (
          <Alert
            content={"Interdit d'envoyer un message qui suit"}
            setShow={setIsSpam}
            show={isSpam}
            title={"Erreur spam"}
            isSuccess={false}
          />
        )}
        {isAvertissement && (
          <AlertAvertissement
            content={avert[0]?.raison}
            setShow={setIsSpam}
            show={true}
            title={"Avertissement"}
            idAvert={avert}
          />
        )}
        {activeAddBlock && (
          <AlertActiveAddBlock
            content={"Veuillez désactiver votre AdBlock!"}
            setShow={setShowAlertActiveAddBlock}
            show={showAlertActiveAddBlock}
            title={"AdBlock detecté"}
          />
        )}
        {activeBanni && (
          <AlertBanni
            content={"Vous êtes Banni!"}
            setShow={() => console.log("Désactivez le bloqueur de Pub")}
            show={true}
            title={"Vous êtes Banni"}
          />
        )}

        <TicketDetails
          setShowReplyTicket={setShowReplyTicket}
          showReplyTicket={showReplyTicket}
          dataTicket={dataTicket}
        />
        <ToastContainer
          limit={1}
          position="bottom-right"
          autoClose={false}
          newestOnTop={true}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          className="xl:min-w-[450px] my-1"
          onClick={() => {
            if (!(router.pathname === "/contact")) {
              showModalTicketResponse().then();
            }
          }}
        />
      </div>
    </>
  );
}

export default Layout;
