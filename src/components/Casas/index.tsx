import { ReactNode } from "react";

import { Container, Content, ContentCards } from "./styles";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";

import { List, ListItem } from "../elements/CardEmpreendimento/styles";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Casas() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <Container>
      <Content>
        <h1>
          Casas in<span>críveis</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento
            title="casas tipo 1"
            preco="R$ 200.000"
            list={
              <List>
                <ListItem>
                  <span>•</span> Item 1
                </ListItem>
                <ListItem>
                  <span>•</span> Item 2
                </ListItem>
                <ListItem>
                  <span>•</span> Item 3
                </ListItem>
                <ListItem>
                  <span>•</span> Item 4
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas tipo 1"
            preco="R$ 200.000"
            list={
              <List>
                <ListItem>
                  <span>•</span> Item 1
                </ListItem>
                <ListItem>
                  <span>•</span> Item 2
                </ListItem>
                <ListItem>
                  <span>•</span> Item 3
                </ListItem>
                <ListItem>
                  <span>•</span> Item 4
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas tipo 1"
            preco="R$ 200.000"
            list={
              <List>
                <ListItem>
                  <span>•</span> Item 1
                </ListItem>
                <ListItem>
                  <span>•</span> Item 2
                </ListItem>
                <ListItem>
                  <span>•</span> Item 3
                </ListItem>
                <ListItem>
                  <span>•</span> Item 4
                </ListItem>
              </List>
            }
          />
        </ContentCards>
      </Content>
    </Container>
  );
}
