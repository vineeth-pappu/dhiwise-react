import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Grid } from "components/Grid";
import { Line } from "components/Line";

const TourListPage = () => {
  return (
    <Column className="bg-blue_400 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mt-[40px] justify-end lg:mt-[26px] mt-[34px] self-stretch w-[100%] xl:mt-[30px]">
        <Column className="items-end self-stretch w-[100%]">
          <Row className="3xl:mx-[54px] font-montserrat justify-end lg:mx-[35px] mx-[45px] w-[90%] xl:mx-[40px]">
            <Stack className="2xl:h-[101px] 3xl:h-[121px] bg-white_A700 h-[100px] lg:h-[78px] rounded-radius50 w-[8%] xl:h-[89px]">
              <Image
                src="img_logo_1.png"
                className="2xl:h-[92px] 3xl:bottom-[6px] 3xl:h-[110px] 3xl:left-[6px] absolute bottom-[5px] h-[91px] left-[5px] lg:bottom-[3px] lg:h-[71px] lg:left-[3px] lg:right-[3px] lg:top-[3px] right-[4px] top-[4px] w-[auto] xl:bottom-[4px] xl:h-[81px] xl:left-[4px] xl:right-[3px] xl:top-[3px]"
                alt="logo"
              />
            </Stack>
            <Text className="3xl:mb-[96px] 3xl:ml-[1177px] 3xl:text-fs19 font-normal lg:mb-[62px] lg:ml-[763px] lg:text-fs12 mb-[80px] ml-[981px] text-fs16 text-left text-white_A700 xl:mb-[71px] xl:ml-[872px] xl:text-fs14">{`Vineeth Viswanathan`}</Text>
            <Image
              src="img_polygon1.png"
              className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[97px] 3xl:ml-[19px] h-[18px] lg:h-[14px] lg:mb-[63px] lg:ml-[12px] mb-[81px] ml-[16px] mt-[1px] w-[auto] xl:h-[17px] xl:mb-[72px] xl:ml-[14px]"
              alt="Polygon1"
            />
          </Row>
        </Column>
        <Column className="3xl:mt-[50px] items-center lg:mt-[32px] mt-[42px] mx-[auto] self-stretch w-[100%] xl:mt-[37px]">
          <Row className="font-montserrat justify-between mx-[auto] px-[0] self-stretch w-[100%]">
            <Column className="3xl:ml-[141px] justify-start lg:ml-[91px] ml-[118px] w-[48%] xl:ml-[104px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs40 font-bold lg:mr-[7px] lg:text-fs26 mr-[10px] text-fs34 text-left text-white_A700 xl:mr-[8px] xl:text-fs30">{`My Tours`}</Text>
              <Text className="3xl:mt-[31px] 3xl:text-fs24 font-normal lg:mt-[20px] lg:text-fs15 mt-[26px] self-stretch text-fs20 text-left text-white_A700 xl:mt-[23px] xl:text-fs17">{`Manage your tours, create scenes, narate your tour, and share them.`}</Text>
            </Column>
            <Button className="2xl:py-[26px] 3xl:mb-[15px] 3xl:mr-[153px] 3xl:px-[36px] 3xl:py-[32px] 3xl:text-fs24 bg-yellow_800 border-bw font-bold lg:mb-[10px] lg:mr-[99px] lg:mt-[3px] lg:px-[23px] lg:py-[20px] lg:text-fs15 mb-[13px] mr-[128px] mt-[4px] px-[30px] py-[26.720001px] rounded-radius8 text-center text-fs20 text-white_A700 w-[15%] xl:mb-[11px] xl:mr-[113px] xl:mt-[3px] xl:px-[26px] xl:py-[23px] xl:text-fs17">{`Create Tour`}</Button>
          </Row>
        </Column>
        <Row className="3xl:mt-[44px] 3xl:mx-[141px] font-montserrat items-center justify-start lg:mt-[28px] lg:mx-[91px] max-w-[481px] mt-[37px] mx-[118px] w-[34%] xl:mt-[32px] xl:mx-[104px]">
          <Input
            className="2xl:py-[17px] 3xl:pl-[28px] 3xl:py-[20px] 3xl:text-fs19 bg-bluegray_800 border border-bluegray_800 border-solid font-normal lg:pl-[18px] lg:py-[13px] lg:text-fs12 pl-[24px] placeholder:text-white_A700 py-[17.375px] rounded-radius8 text-fs16 text-left text-white_A700 w-[69%] xl:pl-[21px] xl:py-[15px] xl:text-fs14"
            name="Searchinputgr"
            placeholder="Search users, tours, etc"
          ></Input>
          <Row className="3xl:ml-[24px] bg-bluegray_800 border border-bluegray_800 border-solid font-montserrat items-center justify-center lg:ml-[15px] ml-[20px] rounded-radius8 w-[28%] xl:ml-[17px]">
            <Text className="3xl:ml-[28px] 3xl:my-[19px] 3xl:text-fs19 font-normal lg:ml-[18px] lg:my-[12px] lg:text-fs12 ml-[24px] my-[16px] text-fs16 text-left text-white_A700 xl:ml-[21px] xl:my-[14px] xl:text-fs14">{`Sort by`}</Text>
            <Image
              src="img_polygon1_1.png"
              className="2xl:h-[13px] 3xl:h-[15px] 3xl:mb-[25px] 3xl:ml-[18px] 3xl:mr-[26px] 3xl:mt-[22px] h-[12px] lg:h-[10px] lg:mb-[16px] lg:ml-[11px] lg:mr-[17px] lg:mt-[14px] mb-[21px] ml-[15px] mr-[22px] mt-[19px] w-[auto] xl:h-[11px] xl:mb-[18px] xl:ml-[13px] xl:mr-[19px] xl:mt-[16px]"
              alt="Polygon1"
            />
          </Row>
        </Row>
        <Column className="3xl:mt-[44px] items-center lg:mt-[28px] mt-[37px] mx-[auto] self-stretch w-[100%] xl:mt-[32px]">
          <Grid className="3xl:gap-[28px] gap-[24px] grid grid-cols-2 lg:gap-[18px] mx-[auto] w-[84%] xl:gap-[21px]">
            <Stack className="2xl:h-[392px] 3xl:h-[470px] bg-red_700 h-[391px] lg:h-[305px] rounded-radius8 w-[100%] xl:h-[348px]">
              <Stack className="2xl:h-[392px] 3xl:h-[470px] absolute bottom-[0] h-[391px] left-[0] lg:h-[305px] right-[0] self-stretch top-[0] w-[100%] xl:h-[348px]">
                <Image
                  src="img_dubaiskyline1.png"
                  className="2xl:h-[392px] 3xl:h-[470px] absolute bottom-[0] h-[391px] left-[0] lg:h-[305px] right-[0] self-stretch top-[0] w-[100%] xl:h-[348px]"
                  alt="Dubaiskyline1"
                />
                <Line className="3xl:bottom-[86px] absolute bg-gray_300 bottom-[72px] h-[1px] lg:bottom-[56px] self-stretch w-[100%] xl:bottom-[64px]" />
              </Stack>
              <Column className="3xl:bottom-[30px] 3xl:left-[39px] 3xl:right-[32px] 3xl:top-[33px] absolute bottom-[25px] font-montserrat justify-start left-[33px] lg:bottom-[19px] lg:left-[25px] lg:right-[21px] lg:top-[21px] right-[27px] top-[28px] w-[90%] xl:bottom-[22px] xl:left-[29px] xl:right-[24px] xl:top-[24px]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] h-[32px] lg:h-[25px] self-stretch w-[100%] xl:h-[29px]">
                  <Image
                    src="img_share.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] 3xl:left-[12px] absolute h-[32px] left-[10px] lg:h-[25px] lg:left-[7px] object-contain w-[auto] xl:h-[29px] xl:left-[8px]"
                    alt="share"
                  />
                </Stack>
                <Text className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:mt-[16px] 3xl:text-fs43 font-bold lg:mt-[10px] lg:mx-[7px] lg:text-fs28 ml-[9px] mr-[10px] mt-[14px] text-fs36 text-left text-white_A700 xl:mt-[12px] xl:mx-[8px] xl:text-fs32">{`Tour Name`}</Text>
                <Text className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:mt-[44px] 3xl:text-fs21 font-normal leading-lh lg:mt-[28px] lg:mx-[7px] lg:text-fs14 ml-[9px] mr-[10px] mt-[37px] text-fs18 text-left text-white_A700 w-[94%] xl:mt-[32px] xl:mx-[8px] xl:text-fs16">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
                <Column className="3xl:mt-[145px] items-center lg:mt-[94px] mt-[121px] mx-[auto] self-stretch w-[100%] xl:mt-[107px]">
                  <Row className="3xl:mr-[7px] font-montserrat items-center justify-between lg:mr-[4px] mr-[6px] px-[0] w-[99%] xl:mr-[5px]">
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`View`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Edit`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Delete`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[392px] 3xl:h-[470px] h-[391px] lg:h-[305px] w-[100%] xl:h-[348px]">
              <Image
                src="img_dubaiskyline1_1.png"
                className="2xl:h-[392px] 3xl:h-[470px] absolute bottom-[0] h-[391px] left-[0] lg:h-[305px] right-[0] self-stretch top-[0] w-[100%] xl:h-[348px]"
                alt="Dubaiskyline1"
              />
              <Column className="absolute bg-black_900_99 font-montserrat justify-start rounded-radius8 self-stretch w-[100%]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mt-[33px] h-[32px] lg:h-[25px] lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:h-[29px] xl:mt-[24px]">
                  <Image
                    src="img_share.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] 3xl:left-[32px] 3xl:right-[32px] absolute h-[32px] left-[27px] lg:h-[25px] lg:left-[21px] lg:right-[21px] object-contain right-[27px] w-[auto] xl:h-[29px] xl:left-[24px] xl:right-[24px]"
                    alt="share"
                  />
                </Stack>
                <Text className="3xl:mt-[16px] 3xl:mx-[50px] 3xl:text-fs43 font-bold lg:mt-[10px] lg:mx-[32px] lg:text-fs28 mt-[14px] mx-[42px] text-fs36 text-left text-white_A700 xl:mt-[12px] xl:mx-[37px] xl:text-fs32">{`Tour Name`}</Text>
                <Text className="3xl:mt-[44px] 3xl:mx-[50px] 3xl:text-fs21 font-normal leading-lh lg:mt-[28px] lg:mx-[32px] lg:text-fs14 mt-[37px] mx-[42px] text-fs18 text-left text-white_A700 w-[84%] xl:mt-[32px] xl:mx-[37px] xl:text-fs16">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
                <Column className="3xl:mb-[30px] 3xl:mt-[116px] items-center lg:mb-[19px] lg:mt-[75px] mb-[25px] mt-[97px] mx-[auto] self-stretch w-[100%] xl:mb-[22px] xl:mt-[86px]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                  <Row className="3xl:mt-[27px] font-montserrat items-center justify-between lg:mt-[17px] mt-[23px] mx-[auto] px-[0] w-[89%] xl:mt-[20px]">
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`View`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Edit`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Delete`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[392px] 3xl:h-[470px] h-[391px] lg:h-[305px] w-[100%] xl:h-[348px]">
              <Image
                src="img_dubaiskyline1_1.png"
                className="2xl:h-[392px] 3xl:h-[470px] absolute bottom-[0] h-[391px] left-[0] lg:h-[305px] right-[0] self-stretch top-[0] w-[100%] xl:h-[348px]"
                alt="Dubaiskyline1"
              />
              <Column className="absolute bg-bluegray_800_b5 font-montserrat justify-start rounded-radius8 self-stretch w-[100%]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mt-[33px] h-[32px] lg:h-[25px] lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:h-[29px] xl:mt-[24px]">
                  <Image
                    src="img_share.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] 3xl:left-[32px] 3xl:right-[32px] absolute h-[32px] left-[27px] lg:h-[25px] lg:left-[21px] lg:right-[21px] object-contain right-[27px] w-[auto] xl:h-[29px] xl:left-[24px] xl:right-[24px]"
                    alt="share"
                  />
                </Stack>
                <Text className="3xl:mt-[16px] 3xl:mx-[50px] 3xl:text-fs43 font-bold lg:mt-[10px] lg:mx-[32px] lg:text-fs28 mt-[14px] mx-[42px] text-fs36 text-left text-white_A700 xl:mt-[12px] xl:mx-[37px] xl:text-fs32">{`Tour Name`}</Text>
                <Text className="3xl:mt-[44px] 3xl:mx-[50px] 3xl:text-fs21 font-normal leading-lh lg:mt-[28px] lg:mx-[32px] lg:text-fs14 mt-[37px] mx-[42px] text-fs18 text-left text-white_A700 w-[84%] xl:mt-[32px] xl:mx-[37px] xl:text-fs16">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
                <Column className="3xl:mb-[30px] 3xl:mt-[116px] items-center lg:mb-[19px] lg:mt-[75px] mb-[25px] mt-[97px] mx-[auto] self-stretch w-[100%] xl:mb-[22px] xl:mt-[86px]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                  <Row className="3xl:mt-[27px] font-montserrat items-center justify-between lg:mt-[17px] mt-[23px] mx-[auto] px-[0] w-[89%] xl:mt-[20px]">
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`View`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Edit`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Delete`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[392px] 3xl:h-[470px] h-[391px] lg:h-[305px] w-[100%] xl:h-[348px]">
              <Image
                src="img_dubaiskyline1_1.png"
                className="2xl:h-[392px] 3xl:h-[470px] absolute bottom-[0] h-[391px] left-[0] lg:h-[305px] right-[0] self-stretch top-[0] w-[100%] xl:h-[348px]"
                alt="Dubaiskyline1"
              />
              <Column className="absolute bg-red_700 font-montserrat justify-start rounded-radius8 self-stretch w-[100%]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mt-[33px] h-[32px] lg:h-[25px] lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:h-[29px] xl:mt-[24px]">
                  <Image
                    src="img_share.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] 3xl:left-[32px] 3xl:right-[32px] absolute h-[32px] left-[27px] lg:h-[25px] lg:left-[21px] lg:right-[21px] object-contain right-[27px] w-[auto] xl:h-[29px] xl:left-[24px] xl:right-[24px]"
                    alt="share"
                  />
                </Stack>
                <Text className="3xl:mt-[16px] 3xl:mx-[50px] 3xl:text-fs43 font-bold lg:mt-[10px] lg:mx-[32px] lg:text-fs28 mt-[14px] mx-[42px] text-fs36 text-left text-white_A700 xl:mt-[12px] xl:mx-[37px] xl:text-fs32">{`Tour Name`}</Text>
                <Text className="3xl:mt-[44px] 3xl:mx-[50px] 3xl:text-fs21 font-normal leading-lh lg:mt-[28px] lg:mx-[32px] lg:text-fs14 mt-[37px] mx-[42px] text-fs18 text-left text-white_A700 w-[84%] xl:mt-[32px] xl:mx-[37px] xl:text-fs16">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</Text>
                <Column className="3xl:mb-[30px] 3xl:mt-[116px] items-center lg:mb-[19px] lg:mt-[75px] mb-[25px] mt-[97px] mx-[auto] self-stretch w-[100%] xl:mb-[22px] xl:mt-[86px]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] self-stretch w-[100%]" />
                  <Row className="3xl:mt-[27px] font-montserrat items-center justify-between lg:mt-[17px] mt-[23px] mx-[auto] px-[0] w-[89%] xl:mt-[20px]">
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`View`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Edit`}</Text>
                    <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-fs20 text-left text-white_A700 xl:text-fs17">{`Delete`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </Grid>
        </Column>
      </Column>
    </Column>
  );
};

export default TourListPage;
