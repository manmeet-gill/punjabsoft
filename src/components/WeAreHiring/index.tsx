import React from "react";
import { SectionWrapper, Title, CardsWrapper } from "./styles";
import JobCard from "../JobCard";
import HiringContent from "../../content/HiringContent.json";

const WeAreHiring: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>{HiringContent.title}</Title>
      <CardsWrapper>
        {HiringContent.positions.map((position, index) => (
          <JobCard key={index} {...position} />
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

export default WeAreHiring;
