import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "../../theme/typography";
import Button from "@/components/button";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const MiddleBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 130px;
`;

export const RightWrapper = styled.div`
  height: auto;
  width: 95%;
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  background-color: var(--va-white);
  margin-bottom: 70px;
  border-radius: 5px;
`;

export const PhotoWrapper = styled.div`
  margin-top: -115px;
  margin-left: 40px;
  cursor: pointer;
  position: relative;
  :hover {
    filter: brightness(70%);
    .plus {
      display: block;
    }
  }
  img {
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
    width: 170px;
  }
  span {
    display: none;
    position: absolute;
    font-size: 30px;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const statusProps = {
  active: Boolean,
};

export const Status = styled("div", statusProps)`
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    !props.active ? `var(--va-errorMain)` : `var(--va-green600)`};
  border-radius: 30px;
`;

export const NameWrapper = styled.div`
  margin-top: -100px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: ${fontSizes.large};
    color: var(--va-grey500);
    padding-left: 8px;
    font-weight: 600;
  }
  padding-left: 10px;
  ${fontFamily.poppinsMedium}
  span {
    font-size: ${fontSizes.small};
    color: var(--va-grey400);
    padding-left: 5px;
    ${fontFamily.poppinsItalic};
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DataField = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  margin-top: 40px;
  p {
    color: var(--va-grey600);
    font-size: 16px;
    font-weight: 600 !important;
    margin: 0;
    white-space: nowrap;
    font-size: ${fontSizes.default};
    ${fontFamily.poppinsMedium}
  }
  span {
    color: var(--va-grey400);
    font-size: 15px;
    font-weight: 500 !important;
    ${fontFamily.poppinsRegular};
    padding-left: 7px;
  }
`;

export const ContainerColumn = styled.div`
  width: 31%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
`;
export const EditWrapper = styled.div`
  width: 60px;
  position: absolute;
  right: 0;
  margin-top: 90px;
  color: var(--va-green500);
  i {
    color: var(--va-green600);
    cursor: pointer;
    font-size: 25px;
  }
  i:hover {
    color: var(--va-green500);
  }
`;

export const SubmitButton = styled(Button)`
  width: 150px;
  height: 50px;
  float: right;
  margin: 20px 70px;
  font-size: 15px;
  color: var(--va-white);
  background-color: var(--va-primaryMain);
  border-color: #00bfa6;
  border-radius: 10px;
`;
