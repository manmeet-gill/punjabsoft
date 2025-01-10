import React from "react";
import { Card, CardInner, CardFront, CardBack, JobTitle, Description } from "./styles";

interface JobCardProps {
  id: string;
  title: string;
  briefDescription: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, title, briefDescription }) => {
  return (
    <a href={`/job/${id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardInner>
          <CardFront>
            <JobTitle>{title}</JobTitle>
            <Description>{briefDescription}</Description>
          </CardFront>
          <CardBack>
            <JobTitle>{title}</JobTitle>
            <Description>Click to Learn More</Description>
          </CardBack>
        </CardInner>
      </Card>
    </a>
  );
};

export default JobCard;
