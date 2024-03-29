/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";

//Components
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";
import LoadingOverlay from "../../components/loadingOverlay";
//Constants
import { get_Profile, check_Email } from "../../api/requests/login";
import { roadMap } from "./../../api/constants";
import { insert_Visita } from "../../api/requests/globals";

//Actions
import allActions from "../../actions";

//Helpers
import { setLocalStorage } from "./../../helpers/localStorage";
import { set_Profile } from "./../../api/requests/login";

//Styles
import { Background, LogoBlock, LoginBlock, InputBlock, SubmitBlock } from "./styled";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FloatMessage } from "../../components/floatMessage";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [modal, showModal] = useState(false);
  const [loading, showLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [loginForm, setLoginForm] = useState("login");
  const [recoverCode, setRecoverCode] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [tokenCode, setTokenCode] = useState("");
  const [visitaRegistrada, setVisitaRegistrada] = useState("");
  const dispatch = useDispatch();
  const [messageActive, setMessageActive] = useState({ text: "Texto", state: 0, active: false });

  const loginApp = (token, mock, nombre) => {
    showModal(false);
    showLoading(false);
    dispatch(allActions.globalActions.setLogged(true));
    dispatch(allActions.globalActions.setProfile({ nombre: nombre, mock: mock }));
    setLocalStorage("logged", true);
    setLocalStorage("nombre", nombre);
    setLocalStorage("mock", mock);
    setLocalStorage("token", token);
    const now = new Date();
    setLocalStorage("created", now.getTime());
  };

  const handleLogin = async () => {
    if (user === "" || password === "") {
      setModalText("Datos inválidos");
      showModal(true);
    } else {
      showLoading(true);
      const response = await get_Profile(user, password);
      console.log(response);
      if (response.results.token !== "false") {
        loginApp(response.results.token, response.results.mock, response.results.nombre);
      } else {
        setModalText("Datos inválidos");
        showModal(true);
        showLoading(false);
      }
    }
  };

  const handleRegister = () => {
    let nombre = "Nuevo usuario";
    if (user !== "" && password !== "") {
      set_Profile(nombre, password, user);
      setLoginForm("login");

      //Send floatMessage
      setMessageActive({ text: "Registro enviado, por favor ahora identifícate.", state: 1, activate: true });
      setTimeout(function () {
        setMessageActive({ text: "", state: 0, activate: false });
      }, 4000);
    } else {
      //Send floatMessage
      setMessageActive({ text: "El formulario no se ha completado correctamente.", state: 2, activate: true });
      setTimeout(function () {
        setMessageActive({ text: "", state: 0, activate: false });
      }, 4000);
    }
  };

  const generateRecoverCode = () => {
    let code = Math.floor(Math.random() * (9999 - 1111)) + 1111;
    setRecoverCode(code);
    return code;
  };

  const createForm = (code) => {
    let tagForm = document.createElement("form");
    tagForm.setAttribute("id", "recoverForm");
    let tagInput = document.createElement("input");
    tagInput.setAttribute("name", "email");
    tagInput.setAttribute("value", user);
    let tagTextArea = document.createElement("textarea");
    tagTextArea.name = "message";
    tagTextArea.value = code;

    let element = document.getElementById("recoverBlock");
    element.appendChild(tagForm);
    element = document.getElementById("recoverForm");
    element.appendChild(tagInput);
    element.appendChild(tagTextArea);
  };

  const handleRecover = async () => {
    const response = await check_Email(user);
    if (response.results) {
      setTokenCode(response.token);
      const publicKey = "3aJmfsmUznxwcaIxl";
      const templateId = "template_95p2o2j";
      const serviceId = "service_kkn43gy";
      const code = generateRecoverCode();

      createForm(code);

      var form = document.getElementById("recoverForm");
      console.log(form);
      emailjs.sendForm(serviceId, templateId, form, publicKey).then(
        (result) => {
          console.log(result.text);
          setModalText("Se ha enviado un código de recuperación, recuerda revisar tu bandeja de correo no deseado o spam.");
          showModal(true);
        },
        (error) => {
          console.log(error.text);
          setModalText("Ha ocurrido un error.");
          showModal(true);
        }
      );
      document.getElementById("recoverBlock").innerHTML = "";
    } else {
      setModalText("Ha ocurrido un error.");
      showModal(true);
    }
  };

  const checkRecover = () => {
    setEmailCode("");
    if (recoverCode == emailCode && tokenCode != "") {
      loginApp(tokenCode);
    } else {
      setModalText("El código introducido no es correcto.");
      showModal(true);
    }
  };

  const insertVisita = (referencia) => {
    insert_Visita(referencia);
  };

  useEffect(() => {
    if (!visitaRegistrada) {
      let url = new URL(window.location.href);
      let ref = url.searchParams.get("r");
      insertVisita(ref);
      setVisitaRegistrada(true);
    }
  }, [visitaRegistrada]);

  return (
    <>
      <Background>
        <div classname="row">
          <div className="offset-md-6 col-md-6 offset-sm-8 col-sm-8 offset-xs-12 col-xs-12 text-center">
            <LogoBlock>
              <h2 style={{ fontSize: "2rem", color: "black" }}>Gestion Docente</h2>
            </LogoBlock>
            <div>
              {loginForm === "login" ? <p>Identifícate con tu email y clave para acceder a la plataforma.</p> : ""}
              {loginForm === "register" ? <p>Regístrate con un email y una clave para acceder a la plataforma.</p> : ""}
              {loginForm === "recover" && recoverCode === "" ? <p>Especifica el email con el que te registraste para solicitar un código de acceso de un solo uso.</p> : ""}
              {loginForm === "recover" && recoverCode !== "" ? <p>Escribe el código que has recibido por email para entrar a la plataforma. Acuérdate de actualiza tu clave cuando entres.</p> : ""}
            </div>
            <LoginBlock style={{ backgroundColor: loginForm === "register" ? "#f6f6f6" : "#fff" }}>
              <p style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>
                {loginForm === "register" ? "Registrate" : ""}
                {loginForm === "login" ? "Identifícate" : ""}
                {loginForm === "recover" ? "Recuperación" : ""}
              </p>
              <InputBlock style={{ color: "black" }}>
                <Input placeholder={"Email"} setValue={setUser} type={"text"} idInput={"user"} className={"text-center"} />
                {loginForm !== "recover" ? <Input placeholder={"Clave"} setValue={setPassword} type={"password"} idInput={"password"} className={"text-center"} /> : ""}
                {loginForm === "recover" && recoverCode !== "" ? (
                  <Input placeholder={"Código de recuperación"} setValue={setEmailCode} type={"text"} idInput={"recovercode"} className={"inputCode"} value={emailCode} />
                ) : (
                  ""
                )}
              </InputBlock>
              <SubmitBlock style={{ marginTop: "20px" }}>
                {loginForm === "login" ? <Button text={"Identifícate"} onClick={handleLogin} /> : ""}
                {loginForm === "register" ? <Button text={"Regístrate"} onClick={handleRegister} /> : ""}
                {loginForm === "recover" && recoverCode === "" ? <Button text={"Enviar email"} onClick={handleRecover} /> : ""}
                {loginForm === "recover" && recoverCode !== "" ? <Button text={"Comprobar código"} onClick={checkRecover} /> : ""}
              </SubmitBlock>
              <p style={{ marginTop: "25px" }}>
                {loginForm === "login" ? (
                  <a href="#" onClick={() => setLoginForm("register")} style={{ color: "black" }}>
                    Regístrate
                  </a>
                ) : (
                  ""
                )}
                {loginForm === "register" || loginForm === "recover" ? (
                  <a href="#" onClick={() => setLoginForm("login")} style={{ color: "black" }}>
                    Identifícate
                  </a>
                ) : (
                  ""
                )}

                <a href="#" onClick={() => setLoginForm("recover")} style={{ marginLeft: "75px", color: "black" }}>
                  Recuperar clave
                </a>
              </p>
            </LoginBlock>
            <div className="row">
              <div className="col-12 text-center mt-4 mb-4" style={{ color: "black", textAlign: "center", padding: "10px 25px", fontSize: "13px", color: "black" }}>
                ¡Estamos en continuo desarrollo!
                <br />
                <b>Gestor Docente</b> se encuentra en versión <b>BETA</b>.
                <br />
              </div>
              <p>Estas son las funciones disponibles a día de hoy.</p>
              <hr />
              {roadMap.map((r) => {
                if (r.done)
                  return (
                    <div className="col-md-4 col-sm-6 col-xs-12" style={{ color: "black", textAlign: "center", padding: "25px 25px", fontSize: "13px", color: "black" }}>
                      <div style={{ backgroundColor: "white", width: "80%", padding: "10px", border: "1px lightgrey solid" }}>{r.name}</div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </Background>
      {modal ? <Modal text={modalText}></Modal> : ""}
      {loading && <LoadingOverlay></LoadingOverlay>}
      <div id="recoverBlock"></div>
      {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state} />}
    </>
  );
}
