import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { styled } from "styled-components/native";
import Mode from "../../components/Mode";
import { colors } from "../../colors";
import { AppContext } from "../../components/ContextProvider";
import axios from "axios";

const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;
const Profile = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  padding-left: 24px;
  margin-bottom: 22px;
  padding-right: 30px;
  justify-content: space-between;
`;
const ProfileInfo = styled.View`
  flex-direction: row;
`;
const ProfileImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ddd;
  margin-right: 8px;
`;
const ProfileContents = styled.View`
  justify-content: center;
`;
const Name = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.5px;
`;
const EditIcon = styled.Image`
  width: 24px;
  height: 24px;
  background-color: pink;
  margin-right: 0px;
`;

const Bar = styled.View`
  height: 16px;
  background-color: #f3f3f3;
`;
const ModeView = styled.View`
  padding: 15px 24px;
  flex-direction: row;
  align-items: center;
`;

const BlockText = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.5px;
`;
const BlockContent = styled.View`
  margin-left: auto;
  margin-right: 0;
`;

export default function Setting({ navigation }) {
  const { isDark } = useContext(AppContext);
  const { toggleLogin } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState([
    {
      birthYear: "",
      userId: "",
      userNickname: "",
    },
  ]);

  const getUserInfoData = async () => {
    try {
      let url = "https://gpthealth.shop/";
      let detailAPI = `app/mypage/userinfo`;
      const response = await axios.get(url + detailAPI);
      const result = response.data;
      return result;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getUserInfoData().then((result) => {
      setUserInfo(result.result);
    });
  }, []);

  const getUserName = userInfo[0].userNickname;

  const Block = styled.TouchableOpacity`
    padding: 19px 24px;
    flex-direction: row;
    align-items: center;
    background-color: ${isDark ? colors.d_background : colors.l_background};
  `;

  return (
    <SafeAreaView>
      <Container>
        <Profile
          onPress={() => {
            navigation.navigate("UserInfo");
          }}
        >
          <ProfileInfo>
            <ProfileImage />
            <ProfileContents>
              <Name>{getUserName}</Name>
            </ProfileContents>
          </ProfileInfo>
          <EditIcon />
        </Profile>
        <ModeView>
          <BlockText>다크화면 모드</BlockText>
          <BlockContent>
            <Mode />
          </BlockContent>
        </ModeView>
        <Bar />
        <Block>
          <BlockText>일반 설정</BlockText>
        </Block>
        <Block>
          <BlockText>알림 설정</BlockText>
        </Block>
        <Block>
          <BlockText>자주 물어보는 질문</BlockText>
        </Block>
        <Block>
          <BlockText>개인정보 처리방침</BlockText>
        </Block>
        <Block>
          <BlockText>서비스 이용약관</BlockText>
        </Block>
        <Block>
          <BlockText>버전 정보</BlockText>
        </Block>
        <Block>
          <BlockText onPress={() => toggleLogin()}>로그아웃</BlockText>
        </Block>
      </Container>
    </SafeAreaView>
  );
}
