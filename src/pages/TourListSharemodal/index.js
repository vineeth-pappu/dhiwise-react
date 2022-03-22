import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Button } from "components/Button";

const TourListSharemodalPage = () => {
  const navigate = useNavigate();

  const handleNavigate4 = () => navigate("/tourlist");
  const handleBackNavigation1 = () => navigate(-1);

  return (
    <Column className="bg-blue_400 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="bg-white_A700 justify-center rounded-radius8 self-stretch shadow-bs w-[100%]">
        <Column
          className="common-pointer font-montserrat items-end self-stretch w-[100%]"
          onClick={handleBackNavigation1}
        >
          <Text
            className="common-pointer 3xl:text-fs24 font-bold lg:text-fs15 text-black_900 text-fs20 text-left xl:text-fs17"
            onClick={handleNavigate4}
          >{`X`}</Text>
        </Column>
        <Column className="items-center mx-[auto] self-stretch w-[100%]">
          <Column className="font-montserrat justify-start self-stretch w-[100%]">
            <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-bluegray_800 text-fs20 text-left xl:text-fs17">{`Share Tour`}</Text>
            <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-bluegray_800 text-fs18 text-left xl:text-fs16">{`Share tour link or embed to your website`}</Text>
            <Text className="3xl:text-fs21 font-bold lg:text-fs14 text-bluegray_800 text-fs18 text-left xl:text-fs16">{`Copy Link`}</Text>
            <Column className="items-center mx-[auto] self-stretch w-[100%]">
              <Row className="bg-gray_100 font-montserrat items-center justify-center mx-[auto] rounded-radius8 w-[50%]">
                <Text className="3xl:ml-[30px] 3xl:my-[12px] 3xl:text-fs21 font-normal lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[25px] my-[10px] text-black_900 text-fs18 text-left xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`https://www.myhometowntour.com/dxxyyoo1231`}</Text>
                <Text className="3xl:ml-[208px] 3xl:mr-[38px] 3xl:my-[13px] 3xl:text-fs19 font-bold lg:ml-[135px] lg:mr-[24px] lg:my-[8px] lg:text-fs12 ml-[174px] mr-[32px] my-[11px] text-blue_400 text-fs16 text-left xl:ml-[154px] xl:mr-[28px] xl:my-[9px] xl:text-fs14">{`Copy`}</Text>
              </Row>
            </Column>
            <Text className="3xl:text-fs21 font-bold lg:text-fs14 text-bluegray_800 text-fs18 text-left xl:text-fs16">{`Embed Code`}</Text>
            <Column className="items-center mx-[auto] self-stretch w-[100%]">
              <Row className="bg-gray_100 font-montserrat items-center justify-center mx-[auto] rounded-radius8 w-[50%]">
                <Text className="3xl:mb-[22px] 3xl:ml-[30px] 3xl:mt-[24px] 3xl:text-fs21 font-normal leading-lh lg:mb-[14px] lg:ml-[19px] lg:mt-[15px] lg:text-fs14 mb-[19px] ml-[25px] mt-[20px] text-black_900 text-fs18 text-left w-[71%] xl:mb-[16px] xl:ml-[22px] xl:mt-[17px] xl:text-fs16">
                  {
                    <>
                      {`<iframe `}
                      <br />
                      {`   src=”https://www.myhometowntour.com/dxxyyoo1231”`}
                      <br />
                      {`   width=”100%” height=”100%” `}
                      <br />
                      {`   border=”none” allowfullscreen ></iframe`}
                    </>
                  }
                </Text>
                <Text className="3xl:mb-[63px] 3xl:ml-[132px] 3xl:mr-[38px] 3xl:mt-[64px] 3xl:text-fs19 font-bold lg:mb-[41px] lg:ml-[85px] lg:mr-[24px] lg:mt-[42px] lg:text-fs12 mb-[53px] ml-[110px] mr-[32px] mt-[54px] text-blue_400 text-fs16 text-left xl:mb-[47px] xl:ml-[97px] xl:mr-[28px] xl:mt-[48px] xl:text-fs14">{`Copy`}</Text>
              </Row>
              <Row className="font-montserrat justify-start mx-[auto] self-stretch w-[100%]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_800 text-fs16 text-left xl:text-fs14">{`Width`}</Text>
                <Button className="2xl:pb-[4px] 2xl:pt-[5px] 3xl:pb-[5px] 3xl:pt-[6px] 3xl:px-[19px] 3xl:text-fs19 bg-transparent border border-bluegray_800 border-solid font-normal lg:pb-[3px] lg:pt-[4px] lg:px-[12px] lg:text-fs12 pb-[4.375px] pt-[5.375px] px-[16px] rounded-radius8 text-black_900 text-center text-fs16 w-[5%] xl:pb-[3px] xl:pt-[4px] xl:px-[14px] xl:text-fs14">{`100`}</Button>
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_800 text-fs16 text-left xl:text-fs14">{`Height`}</Text>
                <Button className="2xl:pb-[4px] 2xl:pt-[5px] 3xl:pb-[5px] 3xl:pt-[6px] 3xl:px-[19px] 3xl:text-fs19 bg-transparent border border-bluegray_800 border-solid font-normal lg:pb-[3px] lg:pt-[4px] lg:px-[12px] lg:text-fs12 pb-[4.375px] pt-[5.375px] px-[16px] rounded-radius8 text-black_900 text-center text-fs16 w-[5%] xl:pb-[3px] xl:pt-[4px] xl:px-[14px] xl:text-fs14">{`100`}</Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
};

export default TourListSharemodalPage;
