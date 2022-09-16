import React from "react";
import { AccordionFilter, Filters, ProductCard } from "../../components";
import { Container, Contend, Items, Title } from "./styled";

export const Home = () => {
  return (
    <Container>
      <Contend>
        <Filters>
          <AccordionFilter />
          <AccordionFilter />
          <AccordionFilter />
        </Filters>

        <div>
          <Title> Novos Lançamentos </Title>
          <Items>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Items>
        </div>
      </Contend>
    </Container>
  );
};
