import styled from "styled-components/native";



export const CustomInput  = ({...props}) => {
    return (
        <Input placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    );
    
}

export const Input  = styled.TextInput`
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 1rem;
    border-radius: 8px;
    color: #333;
    font-size: 14px;
`;
