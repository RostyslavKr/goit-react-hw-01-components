import styled from '@emotion/styled';
import getRandomHexColor from 'getRandomColor';
export const Container = styled.section`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 100px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;

  &:first-child {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(2) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(3) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(4) {
    background-color: ${getRandomHexColor()};
  }
  &:last-child {
    background-color: ${getRandomHexColor()};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 20px;
`;
