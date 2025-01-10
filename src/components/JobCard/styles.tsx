import styled from "styled-components";

export const Card = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin: auto;
  cursor: pointer;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const CardBack = styled.div`
  backface-visibility: hidden;
  background: #f1f3f5;
  color: #333;
  transform: rotateY(180deg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
`;
