import { ReactNode, useEffect, useState } from "react";

import {
  CardsContent,
  Container,
  Content,
  LeftImg,
  OptionsContent,
  Option,
  RightImg,
} from "./styles";
import { useTheme } from "../../ThemeContext";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";
import { List, ListItem } from "../elements/CardEmpreendimento/styles";
import { empreendimentos } from "./empreendimentos";

interface OfertasProps {
  empreendimento: string;
}

interface EmpreendimentoItem {
  title: string;
  preco: string;
  list: string[];
}

interface Empreendimentos {
  casas: EmpreendimentoItem[];
  lotes: EmpreendimentoItem[];
  apartamentos: EmpreendimentoItem[];
}

export function Ofertas({ empreendimento }: OfertasProps) {
  const theme = useTheme();
  const [tipoSelecionado, setTipoSelecionado] = useState<any>(
    String(Object.keys(empreendimentos?.[empreendimento])[0])
  );

  useEffect(() => {
    setTipoSelecionado(
      String(Object.keys(empreendimentos?.[empreendimento])[0])
    );
  }, [empreendimento]);

  console.log(String(Object.keys(empreendimentos?.[empreendimento])[0]));

  return (
    <Container>
      <Content theme={theme}>
        <h1>
          Confira nossas <span>ofertas</span>!
        </h1>
        <OptionsContent>
          {Object.keys(empreendimentos?.[empreendimento])?.map((key) => {
            return (
              <Option
                onClick={() => {
                  setTipoSelecionado(key);
                }}
                theme={theme}
                selected={key === tipoSelecionado}
              >
                {key}
              </Option>
            );
          })}
        </OptionsContent>
        <CardsContent>
          {empreendimentos?.[empreendimento]?.[tipoSelecionado].map(
            (item: any) => {
              return (
                <CardEmpreendimento
                  key={item}
                  title={item.title}
                  preco={item.preco}
                  list={
                    <List>
                      {item.list.map((itemList: any) => {
                        return (
                          <ListItem theme={theme}>
                            <span>•</span> {itemList}
                          </ListItem>
                        );
                      })}
                    </List>
                  }
                />
              );
            }
          )}
        </CardsContent>
      </Content>
      <LeftImg>
        <svg
          width="285"
          height="384"
          viewBox="0 0 285 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M101.845 190.136L108.55 128.602L119.167 85.3711L99.3933 79.2485L88.9704 127.899L92.4159 187.759C90.5943 188.381 89.0225 189.576 87.9351 191.164C86.8477 192.752 86.3029 194.649 86.3819 196.573C86.4608 198.496 87.1595 200.342 88.3735 201.836C89.5875 203.33 91.2518 204.391 93.1183 204.862C94.9848 205.332 96.9534 205.187 98.7305 204.447C100.508 203.707 101.998 202.413 102.979 200.757C103.961 199.101 104.38 197.172 104.176 195.258C103.971 193.344 103.154 191.548 101.845 190.136Z"
            fill="#A0616A"
          />
          <path
            d="M85.2438 196.915C86.6311 176.511 96.4282 156.837 113.727 137.812L160.013 140.66L160.725 176.265L197.753 372.8L184.936 373.512L124.408 246.049L95.9251 372.8L83.1075 373.512L85.2438 196.915Z"
            fill="#2F2E41"
          />
          <path
            d="M132.241 54.3724C144.433 54.3724 154.316 44.4892 154.316 32.2978C154.316 20.1063 144.433 10.2231 132.241 10.2231C120.05 10.2231 110.167 20.1063 110.167 32.2978C110.167 44.4892 120.05 54.3724 132.241 54.3724Z"
            fill="#A0616A"
          />
          <path
            d="M105.066 121.487C98.0539 107.943 95.2913 92.5997 97.1389 77.4613C97.5844 73.857 99.0458 70.4536 101.353 67.6486C103.659 64.8435 106.716 62.7523 110.167 61.6191L135.802 62.3312L154.316 82.9816C163.18 93.824 168.708 104.998 164.285 117.162L160.013 144.221L112.303 141.373L105.066 121.487Z"
            fill={theme.primaryColor}
          />
          <path
            d="M73.9925 91.9382C84.3247 87.4771 84.516 78.1974 80.5104 66.9234C75.2038 56.2741 79.0641 46.2314 88.4239 36.5527C93.3128 32.2584 95.1427 27.1373 94.4609 21.3372C94.1176 18.7523 94.3762 16.1231 95.2166 13.6548C96.057 11.1864 97.4564 8.94559 99.3056 7.10724C102.953 3.59931 119.942 1.42628 125.258 1.23291L132.207 0.980246C132.56 0.967406 132.913 0.963436 133.266 0.968343C136.033 1.00678 138.766 1.58992 141.308 2.68448C143.85 3.77904 146.151 5.36357 148.081 7.34762C150.011 9.33166 151.531 11.6764 152.554 14.2478C153.578 16.8193 154.085 19.5672 154.046 22.3347C142.924 19.6444 141.568 22.8214 135.478 29.9353C131.072 35.2724 128.848 42.0794 129.253 48.9889C129.639 58.3339 123.25 73.4395 117.519 87.9856C124.276 99.6952 115.909 109.048 106.28 117.392H105.769C92.461 117.392 70.6369 104.816 73.9925 91.9382Z"
            fill="#2F2E41"
          />
          <path
            d="M131.885 41.9109C133.458 41.9109 134.734 39.5198 134.734 36.5702C134.734 33.6207 133.458 31.2296 131.885 31.2296C130.312 31.2296 129.037 33.6207 129.037 36.5702C129.037 39.5198 130.312 41.9109 131.885 41.9109Z"
            fill="#A0616A"
          />
          <path
            d="M173.825 200.469L157.876 140.661L152.18 96.5113L131.529 97.9355L139.362 147.069L164.174 201.654C162.699 202.892 161.664 204.573 161.223 206.446C160.782 208.32 160.959 210.286 161.726 212.051C162.494 213.816 163.812 215.286 165.483 216.241C167.154 217.196 169.089 217.586 171 217.351C172.91 217.117 174.694 216.271 176.084 214.94C177.475 213.609 178.398 211.864 178.715 209.965C179.033 208.067 178.729 206.116 177.847 204.405C176.966 202.694 175.555 201.313 173.825 200.469Z"
            fill="#A0616A"
          />
          <path
            d="M123.958 77.2956C123.953 76.9806 123.958 76.6658 123.972 76.3513C124.064 74.4228 124.535 72.5312 125.358 70.7846C126.181 69.038 127.34 67.4706 128.768 66.1718C130.197 64.8731 131.867 63.8684 133.684 63.2153C135.501 62.5621 137.429 62.2731 139.357 62.365C143.175 62.5468 146.772 64.2081 149.386 66.9969C151.999 69.7856 153.424 73.4825 153.358 77.304L155.74 104.344C147.017 97.7603 138.232 98.2944 129.393 105.056L123.958 77.2956Z"
            fill={theme.primaryColor}
          />
          <path
            d="M183.913 371.963L201.866 371.962C204.9 371.962 207.811 373.167 209.956 375.313C212.102 377.459 213.307 380.369 213.308 383.403V383.775L183.913 383.776L183.913 371.963Z"
            fill="#2F2E41"
          />
          <path
            d="M82.7853 371.963L100.738 371.962C103.773 371.962 106.683 373.167 108.829 375.313C110.975 377.459 112.18 380.369 112.18 383.403V383.775L82.7858 383.776L82.7853 371.963Z"
            fill="#2F2E41"
          />
          <path
            d="M57.8633 355.403L60.5866 348.695C63.895 347.802 67.2512 347.096 70.6391 346.582L70.4153 349.843L71.8096 346.409C76.0051 345.814 78.8213 345.685 78.8213 345.685C78.8213 345.685 73.1633 359.277 63.894 368.986L54.609 369.325L61.5111 371.314C60.3693 372.356 59.1632 373.326 57.8997 374.217C45.1312 383.158 31.8602 386.236 28.2581 381.092C24.656 375.948 32.0868 364.529 44.8553 355.588C48.9852 352.84 53.5119 350.741 58.2779 349.365L57.8633 355.403Z"
            fill={theme.primaryColor}
          />
          <path
            d="M33.773 324.624L30.3185 314.713C33.0669 310.575 36.0466 306.595 39.2433 302.792L42.1208 306.558L40.3521 301.484C44.3516 296.821 47.2953 293.986 47.2953 293.986C47.2953 293.986 54.1412 314.202 53.3376 333.644L43.5522 342.899L52.9708 338.459C52.7251 340.687 52.3395 342.897 51.8163 345.076C46.4682 367.031 34.9624 383.083 26.1173 380.928C17.2721 378.774 14.4371 359.229 19.7851 337.274C21.6524 330.329 24.5733 323.712 28.4459 317.652L33.773 324.624Z"
            fill={theme.primaryColor}
          />
          <path
            d="M284.049 383.966H0.743584C0.546373 383.966 0.357239 383.888 0.21779 383.748C0.0783411 383.609 0 383.42 0 383.223C0 383.025 0.0783411 382.836 0.21779 382.697C0.357239 382.557 0.546373 382.479 0.743584 382.479H284.049C284.246 382.479 284.436 382.557 284.575 382.697C284.714 382.836 284.793 383.025 284.793 383.223C284.793 383.42 284.714 383.609 284.575 383.748C284.436 383.888 284.246 383.966 284.049 383.966Z"
            fill="#282828"
          />
        </svg>
      </LeftImg>
      <RightImg>
        <svg
          width="200"
          height="384"
          viewBox="0 0 200 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.817 206.154C62.6535 205.068 63.2416 203.812 63.5401 202.474C63.8386 201.136 63.8402 199.749 63.5447 198.411C63.2491 197.072 62.6637 195.815 61.8296 194.727C60.9955 193.639 59.933 192.747 58.717 192.114L60.57 170.766L47.87 166.476L45.676 196.66C44.7489 198.773 44.6289 201.153 45.339 203.349C46.049 205.545 47.5397 207.404 49.5286 208.574C51.5175 209.744 53.8666 210.144 56.1308 209.699C58.395 209.253 60.4171 207.992 61.814 206.155L61.817 206.154Z"
            fill="#FFB8B8"
          />
          <path
            d="M125.18 372.128H113.753L108.316 328.028H125.189L125.18 372.128Z"
            fill="#FFB8B8"
          />
          <path
            d="M105.587 368.86H127.635V382.742H91.705C91.705 379.061 93.1676 375.53 95.7709 372.926C98.3743 370.323 101.905 368.86 105.587 368.86Z"
            fill="#2F2E41"
          />
          <path
            d="M99.235 342.866L88.135 345.594L72.329 304.071L88.714 300.044L99.235 342.866Z"
            fill="#FFB8B8"
          />
          <path
            d="M79.5811 343.976L100.99 338.707L104.308 352.186L69.4195 360.773C68.5396 357.198 69.1158 353.42 71.0215 350.27C72.9271 347.12 76.0061 344.856 79.5811 343.976Z"
            fill="#2F2E41"
          />
          <path
            d="M111.805 358.066C110.761 358.069 109.753 357.684 108.977 356.986C108.201 356.288 107.712 355.326 107.605 354.287L94.453 231.737L83.006 269.213L99.219 327.746C99.498 328.75 99.3965 329.821 98.9342 330.754C98.4719 331.687 97.6812 332.416 96.714 332.802L83.824 337.958C83.2933 338.171 82.7251 338.273 82.1537 338.259C81.5823 338.246 81.0196 338.117 80.4994 337.88C79.9793 337.643 79.5126 337.303 79.1276 336.88C78.7425 336.458 78.447 335.962 78.259 335.422L58.39 278.414C56.2148 272.19 55.2524 265.606 55.555 259.019L58.328 197.496L131.371 200.589L130.231 352.804C130.217 353.864 129.809 354.88 129.085 355.655C128.362 356.429 127.375 356.905 126.319 356.99L112.134 358.059C112.023 358.064 111.914 358.066 111.805 358.066Z"
            fill="#2F2E41"
          />
          <path
            d="M99.708 61.3403C113.273 61.3403 124.269 50.3439 124.269 36.7793C124.269 23.2146 113.273 12.2183 99.708 12.2183C86.1434 12.2183 75.147 23.2146 75.147 36.7793C75.147 50.3439 86.1434 61.3403 99.708 61.3403Z"
            fill="#FFB8B8"
          />
          <path
            d="M117.77 204.591C111.302 204.591 103.27 204.062 94.953 203.515C83.593 202.767 71.847 201.994 63.078 202.502C61.8939 202.62 60.6994 202.432 59.6085 201.957C58.5175 201.482 57.5665 200.735 56.846 199.788C47.807 188.214 61.746 143.08 62.346 141.165L73.69 90.6972C76.19 79.5972 84.161 71.4093 94.503 69.3293C104.183 67.3853 113.546 71.2603 119.551 79.7043C119.87 80.1523 120.188 80.6119 120.506 81.0833C140.058 110.04 128.999 181.983 128.258 186.622C129.291 187.859 134.876 194.854 133.341 199.713C132.716 201.69 131.02 203.037 128.299 203.713C124.832 204.4 121.299 204.693 117.767 204.588L117.77 204.591Z"
            fill={theme.primaryColor}
          />
          <path
            d="M63.474 204.613C61.249 204.613 58.248 203.792 54.202 202.113C52.463 201.389 47.171 199.188 53.596 143.041C56.752 115.461 61.273 88.0733 61.318 87.8003L61.361 87.5363L61.605 87.4263C61.721 87.3733 73.267 82.0813 75.275 75.2803C75.3417 75.0449 75.4196 74.8166 75.509 74.5953C76.0614 73.0835 77.1764 71.8435 78.6212 71.1339C80.0659 70.4244 81.7289 70.3003 83.263 70.7873C84.8836 71.1746 86.2961 72.1639 87.2139 73.5546C88.1317 74.9452 88.486 76.6329 88.205 78.2753C87.5059 82.7112 86.1613 87.0208 84.214 91.0673C78.781 102.277 75.1 131.995 75.064 132.294C74.856 134.832 69.926 194.966 68.976 199.529C68.644 201.123 68.034 203.073 66.243 204.019C65.3838 204.443 64.4336 204.649 63.476 204.619L63.474 204.613Z"
            fill="#2F2E41"
          />
          <path
            d="M90.305 202.309C89.8562 202.309 89.4202 202.16 89.0659 201.884C81.8399 196.393 93.534 129.833 100.466 106.868C101.855 102.268 103.091 98.3313 104.142 95.1623C106.057 89.4758 107.393 83.6108 108.131 77.6563C108.513 74.4303 109.342 72.5883 110.668 72.0233C111.589 71.6303 112.668 71.8973 113.888 72.8163C120.295 72.5003 126.52 75.1163 132.288 77.9973L137.48 80.5873L143.306 183.736C143.141 190.319 130.165 194.966 124.506 195.263C115.417 195.74 99.096 197.22 91.906 201.772C91.4348 202.1 90.8796 202.286 90.306 202.308L90.305 202.309Z"
            fill="#2F2E41"
          />
          <path
            d="M57.849 182.955C57.763 182.955 57.677 182.955 57.59 182.947L45.822 182.223C45.2361 182.187 44.6641 182.03 44.1424 181.761C43.6207 181.492 43.1607 181.117 42.7917 180.661C42.4227 180.204 42.1528 179.676 41.9991 179.109C41.8454 178.543 41.8113 177.951 41.899 177.37L47.224 142.091L57.248 92.5913C57.4949 91.372 57.9953 90.2182 58.7167 89.2047C59.4381 88.1911 60.3645 87.3406 61.4358 86.708C62.507 86.0755 63.6993 85.6751 64.9352 85.5328C66.1711 85.3906 67.423 85.5096 68.61 85.8823C70.6391 86.5297 72.3699 87.8812 73.49 89.6928C74.6101 91.5044 75.0456 93.6568 74.718 95.7613L66.754 145.361L62.039 179.308C61.8941 180.318 61.3911 181.242 60.6217 181.911C59.8523 182.581 58.8689 182.951 57.849 182.955Z"
            fill="#2F2E41"
          />
          <path
            d="M98.05 144.34C98.7677 143.172 99.7328 142.176 100.877 141.421C102.022 140.667 103.318 140.172 104.674 139.973C106.03 139.773 107.414 139.874 108.727 140.267C110.04 140.659 111.251 141.336 112.275 142.247L131.57 132.927L140.094 143.271L112.661 156.05C111.015 157.668 108.833 158.627 106.528 158.744C104.223 158.861 101.956 158.128 100.155 156.685C98.3536 155.241 97.1447 153.187 96.7568 150.912C96.3689 148.637 96.829 146.299 98.05 144.34Z"
            fill="#FFB8B8"
          />
          <path
            d="M124.854 154.349C123.904 154.349 122.982 154.029 122.235 153.442C121.489 152.854 120.962 152.032 120.74 151.108L117.94 139.458C117.726 138.582 117.799 137.66 118.148 136.829C118.498 135.997 119.105 135.3 119.88 134.839L136.78 124.723L128.14 93.0892C127.393 90.3802 127.735 87.4863 129.095 85.0269C130.454 82.5675 132.723 80.738 135.414 79.9301C138.106 79.1223 141.007 79.4002 143.496 80.7044C145.985 82.0086 147.865 84.2354 148.733 86.9082L158.272 116.033C159.444 119.583 159.453 123.415 158.298 126.971C157.144 130.527 154.885 133.622 151.851 135.806L127.331 153.546C126.61 154.068 125.744 154.349 124.854 154.349Z"
            fill="#2F2E41"
          />
          <path
            d="M199 383.966H1C0.734784 383.966 0.480444 383.861 0.292908 383.673C0.105371 383.486 0 383.232 0 382.966C0 382.701 0.105371 382.447 0.292908 382.259C0.480444 382.072 0.734784 381.966 1 381.966H199C199.265 381.966 199.52 382.072 199.707 382.259C199.895 382.447 200 382.701 200 382.966C200 383.232 199.895 383.486 199.707 383.673C199.52 383.861 199.265 383.966 199 383.966Z"
            fill="#282828"
          />
          <path
            d="M108.737 43.3261C108.737 43.3261 105.749 26.7999 98.9473 28.7744C92.1462 30.7489 74.6428 32.7691 74.6103 24.9862C74.5779 17.2032 91.0863 10.3239 100.819 11.255C110.552 12.1861 127.102 15.0345 126.191 29.6314C125.461 38.8247 122.62 47.7257 117.888 55.6413L108.737 43.3261Z"
            fill="#2F2E41"
          />
        </svg>
      </RightImg>
    </Container>
  );
}
