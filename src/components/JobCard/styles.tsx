import styled from "styled-components";

export const Card = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center; /* Ensure text is properly centered */
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #f9f9f9;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center; /* Ensure text is properly centered */
`;

export const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  padding: 0 10px; /* Adds padding for better text spacing */
`;
