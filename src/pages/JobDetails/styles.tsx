import styled from "styled-components";

export const JobPageWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #f7f9fc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const JobTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SectionContent = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
`;

export const ApplyButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export const ApplySection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Instructions = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
