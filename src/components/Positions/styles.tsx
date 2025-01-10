import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 80px 20px;
  background: #f7f9fc;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid layout */
  gap: 30px; /* More spacing between cards */
  justify-content: center; /* Center the cards horizontally */
  align-items: center; /* Ensure vertical alignment */
  max-width: 1200px;
  margin: 0 auto; /* Centers the grid within the container */
`;
