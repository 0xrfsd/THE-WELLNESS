import styled from 'styled-components/native'

export const Wrapper = styled.View``;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      paddingTop: 20,
    },
  }))`
  `;

export const Space = styled.View`
  height: 100px;
`;

export const Wellness = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  opacity: .7;
  text-align: center;
`;