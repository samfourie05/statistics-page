import styled from "@emotion/styled";
import chartsHeaderImage from "../../../data/images/charts-header.png";

type colorTheme = {
  theme: any;
};

export const CustomerRelatedContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const FilterHeaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

`;

export const FilterHeaderDiv = styled.div<colorTheme>`
  height: 176px;
  border-radius: 12px;
  width: 100%;
  padding: 32px;
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  background-image: url(${chartsHeaderImage});
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: ${(props) => props.theme.transition};
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const HeaderSubtitle = styled.p`


`;

export const HeaderTitle = styled.p`
  font-size: 30px;
  line-height: 36px;
  font-weight: 800;
`;

//Charts
export const StatisticsBaseContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 0px 12px;
`;

export const HalfStatisticsContainer = styled.div<colorTheme>`
  width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  padding: 20px 0;
  transition: ${(props) => props.theme.transition};
`;

export const StatisticsTitle = styled.h2<colorTheme>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  transition: ${(props) => props.theme.transition};
`;

export const SpinnerDiv = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
