import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  JobPageWrapper,
  JobTitle,
  SectionHeading,
  SectionContent,
  ListItem,
  ApplyButton,
  ApplySection,
  Instructions,
} from "./styles";
import jobData from "../../content/JobData.json";

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showApplySection, setShowApplySection] = useState(false);
  const applySectionRef = useRef<HTMLDivElement>(null);

  const job = jobData.find((job) => job.id === id);

  if (!job) {
    return <p>Job not found!</p>;
  }

  const handleApplyClick = () => {
    setShowApplySection(true);
    setTimeout(() => {
      applySectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <JobPageWrapper>
      <JobTitle>{job.title}</JobTitle>

      <SectionHeading>Overview</SectionHeading>
      <SectionContent>
        <p><strong>Location:</strong> {job.overview.location}</p>
        <p><strong>Employment Type:</strong> {job.overview.employmentType}</p>
        <p><strong>Department:</strong> {job.overview.department}</p>
      </SectionContent>

      <SectionHeading>Role Summary</SectionHeading>
      <SectionContent>{job.roleSummary}</SectionContent>

      <SectionHeading>Key Responsibilities</SectionHeading>
      <SectionContent>
        {job.responsibilities.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </SectionContent>

      <SectionHeading>Required Skills</SectionHeading>
      <SectionContent>
        {job.requiredSkills.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </SectionContent>

      <SectionHeading>Preferred Skills</SectionHeading>
      <SectionContent>
        {job.preferredSkills.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </SectionContent>

      <SectionHeading>Why Join Us?</SectionHeading>
      <SectionContent>
        {job.whyJoinUs.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </SectionContent>

      <ApplyButton onClick={handleApplyClick}>Apply Now</ApplyButton>

      {showApplySection && (
        <ApplySection ref={applySectionRef}>
          <SectionHeading>How to Apply</SectionHeading>
          <SectionContent>{job.howToApply}</SectionContent>
          <Instructions>
            <a href="mailto:sidhu.j@gmail.com">sidhu.j@gmail.com</a>
          </Instructions>
        </ApplySection>
      )}
    </JobPageWrapper>
  );
};

export default JobDetails;
