import styled from "styled-components";

const InputWrapper = styled.div`
    input {
        min-width: 250px;
        margin-right: 12px;
        width: 80%;
        border: 1px solid #999999;
        border-radius: 22px;
        background: transparent;
        font-size: 18px;
        padding: 10px;
    }
`

export const Input = () => {
    return (
        <InputWrapper>
            <input name="usuario" placeholder="@username"/>
        </InputWrapper>
    )
}