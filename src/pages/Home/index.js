import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Grid } from "components/Grid";
import { Line } from "components/Line";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/tourlist");
  const handleNavigate2 = () => navigate("/tourlist");
  const handleNavigate3 = () => navigate("/tourlist");

  return (
    <Column className="bg-blue_400 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[148px] 3xl:mt-[40px] justify-start lg:mb-[96px] lg:mt-[26px] mb-[124px] mt-[34px] self-stretch w-[100%] xl:mb-[110px] xl:mt-[30px]">
        <Column className="items-end self-stretch w-[100%]">
          <Row className="3xl:mx-[54px] font-montserrat justify-end lg:mx-[35px] mx-[45px] w-[53%] xl:mx-[40px]">
            <Stack className="2xl:h-[151px] 3xl:h-[181px] bg-white_A700 h-[150px] lg:h-[117px] lg:mt-[2px] mt-[3px] rounded-radius75 w-[20%] xl:h-[134px] xl:mt-[2px]">
              <Image
                src="img_logo.png"
                className="2xl:h-[138px] 3xl:bottom-[7px] 3xl:h-[165px] 3xl:left-[7px] 3xl:right-[8px] 3xl:top-[8px] absolute bottom-[6px] h-[137px] left-[6px] lg:bottom-[4px] lg:h-[107px] lg:left-[4px] lg:right-[5px] lg:top-[5px] right-[7px] top-[7px] w-[auto] xl:bottom-[5px] xl:h-[122px] xl:left-[5px] xl:right-[6px] xl:top-[6px]"
                alt="logo"
              />
            </Stack>
            <Text className="3xl:mb-[159px] 3xl:ml-[474px] 3xl:text-fs19 font-normal lg:mb-[103px] lg:ml-[307px] lg:text-fs12 mb-[133px] ml-[395px] text-fs16 text-left text-white_A700 xl:mb-[118px] xl:ml-[351px] xl:text-fs14">{`Vineeth Viswanathan`}</Text>
            <Image
              src="img_polygon1.png"
              className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[160px] 3xl:ml-[19px] h-[18px] lg:h-[14px] lg:mb-[104px] lg:ml-[12px] mb-[134px] ml-[16px] mt-[1px] w-[auto] xl:h-[17px] xl:mb-[119px] xl:ml-[14px]"
              alt="Polygon1"
            />
          </Row>
        </Column>
        <Column className="3xl:mt-[114px] items-center lg:mt-[73px] mt-[95px] mx-[auto] self-stretch w-[100%] xl:mt-[84px]">
          <Grid className="3xl:gap-[40px] gap-[34px] grid grid-cols-2 lg:gap-[26px] mx-[auto] w-[84%] xl:gap-[30px]">
            <Column
              className="common-pointer bg-red_700 font-montserrat justify-start rounded-radius8 w-[100%]"
              onClick={handleNavigate1}
              onClick={handleNavigate2}
              onClick={handleNavigate3}
            >
              <Text className="3xl:mt-[96px] 3xl:mx-[50px] 3xl:text-fs55 font-bold lg:mt-[62px] lg:mx-[32px] lg:text-fs35 mt-[80px] mx-[42px] text-fs46 text-left text-white_A700 xl:mt-[71px] xl:mx-[37px] xl:text-fs40">{`My Tours`}</Text>
              <Column className="3xl:mb-[32px] 3xl:mt-[99px] items-center lg:mb-[21px] lg:mt-[64px] mb-[27px] mt-[83px] mx-[auto] self-stretch w-[100%] xl:mb-[24px] xl:mt-[73px]">
                <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                <Row className="3xl:ml-[50px] 3xl:mr-[40px] 3xl:mt-[27px] font-montserrat items-center justify-between lg:ml-[32px] lg:mr-[26px] lg:mt-[17px] ml-[42px] mr-[34px] mt-[23px] px-[0] w-[88%] xl:ml-[37px] xl:mr-[30px] xl:mt-[20px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Manage your tours and scenes`}</Text>
                  <Image
                    src="img_viewmore.png"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] my-[1px] w-[auto] xl:h-[17px]"
                    alt="viewmore"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="bg-bluegray_800 font-montserrat justify-start rounded-radius8 w-[100%]">
              <Text className="3xl:mt-[96px] 3xl:mx-[50px] 3xl:text-fs55 font-bold lg:mt-[62px] lg:mx-[32px] lg:text-fs35 mt-[80px] mx-[42px] text-fs46 text-left text-white_A700 xl:mt-[71px] xl:mx-[37px] xl:text-fs40">{`View Tours`}</Text>
              <Column className="3xl:mb-[32px] 3xl:mt-[99px] items-center lg:mb-[21px] lg:mt-[64px] mb-[27px] mt-[83px] mx-[auto] self-stretch w-[100%] xl:mb-[24px] xl:mt-[73px]">
                <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                <Row className="3xl:ml-[50px] 3xl:mr-[40px] 3xl:mt-[27px] font-montserrat items-center justify-between lg:ml-[32px] lg:mr-[26px] lg:mt-[17px] ml-[42px] mr-[34px] mt-[23px] px-[0] w-[88%] xl:ml-[37px] xl:mr-[30px] xl:mt-[20px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Manage your tours and scenes`}</Text>
                  <Image
                    src="img_viewmore.png"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] my-[1px] w-[auto] xl:h-[17px]"
                    alt="viewmore"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="bg-yellow_800 font-montserrat justify-end rounded-radius8 w-[100%]">
              <Text className="3xl:mt-[96px] 3xl:mx-[50px] 3xl:text-fs55 font-bold lg:mt-[62px] lg:mx-[32px] lg:text-fs35 mt-[80px] mx-[42px] text-fs46 text-left text-white_A700 xl:mt-[71px] xl:mx-[37px] xl:text-fs40">{`Manage Users`}</Text>
              <Column className="3xl:mb-[32px] 3xl:mt-[99px] items-center lg:mb-[21px] lg:mt-[64px] mb-[27px] mt-[83px] mx-[auto] self-stretch w-[100%] xl:mb-[24px] xl:mt-[73px]">
                <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                <Row className="3xl:ml-[50px] 3xl:mr-[40px] 3xl:mt-[27px] font-montserrat items-center justify-between lg:ml-[32px] lg:mr-[26px] lg:mt-[17px] ml-[42px] mr-[34px] mt-[23px] px-[0] w-[88%] xl:ml-[37px] xl:mr-[30px] xl:mt-[20px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Manage users, teams, and roles`}</Text>
                  <Image
                    src="img_viewmore.png"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] my-[1px] w-[auto] xl:h-[17px]"
                    alt="viewmore"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="bg-gray_600 font-montserrat justify-end rounded-radius8 w-[100%]">
              <Text className="3xl:mt-[96px] 3xl:mx-[50px] 3xl:text-fs55 font-bold lg:mt-[62px] lg:mx-[32px] lg:text-fs35 mt-[80px] mx-[42px] text-fs46 text-left text-white_A700 xl:mt-[71px] xl:mx-[37px] xl:text-fs40">{`Reports`}</Text>
              <Column className="3xl:mb-[32px] 3xl:mt-[99px] items-center lg:mb-[21px] lg:mt-[64px] mb-[27px] mt-[83px] mx-[auto] self-stretch w-[100%] xl:mb-[24px] xl:mt-[73px]">
                <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                <Row className="3xl:ml-[50px] 3xl:mr-[40px] 3xl:mt-[27px] font-montserrat items-center justify-between lg:ml-[32px] lg:mr-[26px] lg:mt-[17px] ml-[42px] mr-[34px] mt-[23px] px-[0] w-[88%] xl:ml-[37px] xl:mr-[30px] xl:mt-[20px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`View analytics , usage and reports`}</Text>
                  <Image
                    src="img_viewmore.png"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] my-[1px] w-[auto] xl:h-[17px]"
                    alt="viewmore"
                  />
                </Row>
              </Column>
            </Column>
          </Grid>
        </Column>
      </Column>
    </Column>
  );
};

export default HomePage;
