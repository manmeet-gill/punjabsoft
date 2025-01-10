import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardInner,
  CardFront,
  CardBack,
  JobTitle,
  Description,
} from "./styles";

interface JobCardProps {
  id: number;
  title: string;
  briefDescription: string;
  fullDescription: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  briefDescription,
  fullDescription,
}) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/job/${id}`, { title, fullDescription });
  };

  return (
    <Card onClick={handleCardClick}>
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
  );
};


export default JobCard;
