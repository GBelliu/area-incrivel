import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Container,
  ContentFormulario,
  Forms,
  Informacoes,
} from "./styles";
import emailjs from "@emailjs/browser";
import Loader from "../elements/Loader";
import { ArrowRight } from "lucide-react";

export function Contato() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [data, setData] = useState({
    name: "",
    mail: "",
    phone: "",
    empreendimento: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const form = useRef(null);
  // const sendEmail = (e: any) => {
  // e.preventDefault();
  // console.log("aaa");
  // // if (data.acceptData === "Sim") {
  // setLoadingForm(true);
  // emailjs
  //   .send("service_o5gmb8t", "template_1qxtc2p", data, "ouHyZsZNc3k8RmyBc")
  //   .then(
  //     (result) => {
  //       toast.success(
  //         "Dados enviados com sucesso! Entraremos em contato em breve."
  //       );

  //       setLoadingForm(true);
  //       setData({
  //         name: "",
  //         mail: "",
  //         phone: "",
  //         empreendimento: "",
  //       });
  //     },
  //     (error) => {
  //       toast.error(
  //         "Ocorreu um erro ao enviar. Preencha os dados e tente novamente!"
  //       );
  //       setLoadingForm(true);
  //     }
  //   )
  //   .finally(() => {
  //     setLoadingForm(false);
  //     setData({
  //       name: "",
  //       mail: "",
  //       phone: "",
  //       empreendimento: "",
  //     });
  //   });
  // };

  return (
    <Container id="contato">
      <ContentFormulario>
        <Forms>
          <h1>Contato</h1>
          <form action="" onSubmit={() => {}} ref={form}>
            <div className="formItem">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="E-mail"
                value={data.mail}
                onChange={(e) => setData({ ...data, mail: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Celular"
                maxLength={16}
                value={data.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value.replace(
                      /(\d{2})(\d{1})(\d{4})(\d{4})/,
                      "($1) $2 $3-$4"
                    ),
                  })
                }
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="empreendimento"
                id="empreendimento"
                placeholder="Empreendimento"
                value={data.empreendimento}
                onChange={(e) =>
                  setData({ ...data, empreendimento: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit">{loadingForm ? <Loader /> : "Enviar"}</Button>
          </form>
        </Forms>
        <Informacoes>
          <div className="titleInfo">
            <h2>Venha nos visitar</h2>
          </div>
          <div className="infoText">
            <h4>
              <span>Endereço: </span>
              R. Quatorze, 914 - Estádio, Rio Claro - SP, 18051-629
            </h4>
          </div>
          <div className="infoMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14750.377985472096!2d-47.5729214!3d-22.4442834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7da820ebaf8ab%3A0xab8e56ce548e0249!2sCentro%20Logistico%20de%20Rio%20Claro!5e0!3m2!1spt-BR!2sbr!4v1705677829174!5m2!1spt-BR!2sbr"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Informacoes>
      </ContentFormulario>
    </Container>
  );
}
