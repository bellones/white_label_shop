import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Wrapper = styled.View`
    padding: 16px;
`;

export const Label = styled.Text`
 font-size: 14px;
 color: #007aff;
 margin-bottom: 8px;

`;
export const Input = styled.TextInput<{ focus?: boolean }>`
    border: 1px solid ${({ focus }) => (focus ? "#007aff" : "#ccc")}; 
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 8px;
    color:  #333;
    font-size: 14px;
`;

export const MainButton = styled.Pressable`
    background-color: #007aff;
    padding: 12px;
    border-radius: 8px;
    align-items: center;
    margin-top: 16px;
    color: 'white';
    height: 48px;
    align-items: center;
`;
export const ButtonText = styled.Text`
    align-self: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    `