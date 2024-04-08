import { ReactNode } from "react";

import {
  Container,
  Content,
  DataContainer,
  DataContent,
  GraphicContainer,
  ProgressContent,
} from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "../../ThemeContext";
import ProgressBar from "@ramonak/react-progress-bar";
interface Items {
  name: string;
  value: number;
}

interface EstagioProps {
  percentageTotal: number;
  listItems: Array<Items>;
}

export function Estagio({ percentageTotal, listItems }: EstagioProps) {
  const theme = useTheme();

  listItems.sort((a, b) => b.value - a.value);
  return (
    <Container>
      <Content>
        <h1>Estágio da Obra - Condomínio</h1>
        <DataContainer>
          <GraphicContainer>
            <CircularProgressbar
              value={percentageTotal}
              text={`${percentageTotal}%`}
              styles={buildStyles({
                pathColor: theme.primaryColor,
                textColor: "#333333",
              })}
            />
          </GraphicContainer>
          <DataContent>
            {listItems.map((item: any, key: any) => (
              <ProgressContent key={key}>
                <span>{item.name}</span>
                <ProgressBar
                  completed={item.value}
                  bgColor={`linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`}
                />
              </ProgressContent>
            ))}
          </DataContent>
        </DataContainer>
      </Content>
    </Container>
  );
}
