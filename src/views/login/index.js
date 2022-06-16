/* eslint-disable no-undef */
import React, { useState, useRef } from "react";
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
  const dispatch = useDispatch();
  const [messageActive, setMessageActive] = useState({ text: "Texto", state: 0, active: false });

  const loginApp = (token, mock, nombre) => {
    showModal(false);
    showLoading(false);
    dispatch(allActions.globalActions.setLogged(true));
    dispatch(allActions.globalActions.setProfile({ nombre: nombre, mock: mock }));
    setLocalStorage("logged", true);
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
    //console.log(nombre, password, user);
    set_Profile(nombre, password, user);
    setLoginForm("login");

    //Send floatMessage
    setMessageActive({ text: "Registro enviado, por favor ahora identifícate.", state: 1, activate: true });
    setTimeout(function () {
      setMessageActive({ text: "", state: 0, activate: false });
    }, 4000);
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

  return (
    <>
      <Background>
        <LogoBlock>
          <h2 style={{ fontSize: "1.5rem", color: "whitesmoke" }}>
            <FaChalkboardTeacher /> Gestion Docente
          </h2>
          <hr />
        </LogoBlock>
        <div style={{ color: "whitesmoke" }}>
          {loginForm === "login" ? <p>Identifícate con tu email y clave para acceder a la plataforma.</p> : ""}
          {loginForm === "register" ? <p>Regístrate con un email y una clave para acceder a la plataforma.</p> : ""}
          {loginForm === "recover" && recoverCode === "" ? <p>Especifica el email con el que te registraste para solicitar un código de acceso de un solo uso.</p> : ""}
          {loginForm === "recover" && recoverCode !== "" ? <p>Escribe el código que has recibido por email para entrar a la plataforma. Acuérdate de actualiza tu clave cuando entres.</p> : ""}
        </div>
        <LoginBlock>
          <InputBlock style={{ color: "white" }}>
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
              <a href="#" onClick={() => setLoginForm("register")}>
                Regístrate
              </a>
            ) : (
              ""
            )}
            {loginForm === "register" || loginForm === "recover" ? (
              <a href="#" onClick={() => setLoginForm("login")}>
                Identifícate
              </a>
            ) : (
              ""
            )}

            <a href="#" onClick={() => setLoginForm("recover")} style={{ marginLeft: "75px" }}>
              Recuperar clave
            </a>
          </p>
        </LoginBlock>
        <hr />
        <div className="row">
          <div className="col-12 text-center mt-4" style={{ color: "white", textAlign: "center", padding: "10px 25px", fontSize: "13px", color: "whitesmoke" }}>
            <b>Version BETA | Funciones disponibles actualmente. Estamos en continuo desarrollo.</b>
          </div>
          {roadMap.map((r) => {
            if (r.done)
              return (
                <div className="col-md-4 col-sm-3 col-xs-2" style={{ color: "white", textAlign: "center", padding: "10px 25px", fontSize: "13px", color: "whitesmoke" }}>
                  {r.name}
                </div>
              );
          })}
        </div>
      </Background>
      {modal ? <Modal text={modalText}></Modal> : ""}
      {loading && <LoadingOverlay></LoadingOverlay>}
      <div id="recoverBlock"></div>
      {messageActive.activate && <FloatMessage text={messageActive.text} state={messageActive.state} />}
    </>
  );
}
