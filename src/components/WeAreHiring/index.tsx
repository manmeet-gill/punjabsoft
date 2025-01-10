import React from "react";
import { Row, Col } from "antd";
import JobCard from "../JobCard";
import {SectionWrapper, Title, CardsWrapper} from "./styles"
import HiringContent from "../../content/HiringContent.json";

const WeAreHiring: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>{HiringContent.title}</Title>
      <Row justify="center">
        <CardsWrapper>
          {HiringContent.positions.map((position, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <JobCard {...position} />
            </Col>
          ))}
        </CardsWrapper>
      </Row>
    </SectionWrapper>
  );
};

export default WeAreHiring;
