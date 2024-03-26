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
  const [data, setData] = useState({
    name: "",
    mail: "",
    phone: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log("aaa");
    setLoadingForm(true);
    emailjs
      .send("service_54yw65s", "template_7i7kl6i", data, "ouHyZsZNc3k8RmyBc")
      .then(
        (result) => {
          console.log(result);

          toast.success(
            "Dados enviados com sucesso! Entraremos em contato em breve."
          );

          setLoadingForm(true);
          setData({
            name: "",
            mail: "",
            phone: "",
          });
        },
        (error) => {
          console.log(error);
          toast.error(
            "Ocorreu um erro ao enviar. Preencha os dados e tente novamente!"
          );
          setLoadingForm(true);
        }
      )
      .finally(() => {
        setLoadingForm(false);
        setData({
          name: "",
          mail: "",
          phone: "",
        });
      });
  };

  return (
    <Container id="contato">
      <ContentFormulario>
        <Forms>
          <h1>Contato</h1>
          <form action="" onSubmit={sendEmail} ref={form}>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14753.530420263805!2d-47.569245!3d-22.4146208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7db90c8793a41%3A0xec99218804b19b3a!2s%C3%81rea%20Incr%C3%ADvel%20-%20Incorporadora!5e0!3m2!1spt-BR!2sbr!4v1711057968720!5m2!1spt-BR!2sbr"
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
