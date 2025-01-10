import React from "react";
import { SectionWrapper, Title, CardsWrapper } from "./styles";
import JobCard from "../JobCard";
import jobData from "../../content/JobData.json"; // Import job data

const Positions: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>Positions Available</Title>
      <CardsWrapper>
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            briefDescription={job.briefDescription} // Only use briefDescription
          />
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

export default Positions;
