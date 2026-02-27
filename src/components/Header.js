import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    padding: 1.5em;
    background-color: #2D333B;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Inter', 'Roboto', 'Arial';
        font-size: 1.5em;
        color: #FFFFFF;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <h1>GitFind</h1>
        </StyledHeader>
    )
}