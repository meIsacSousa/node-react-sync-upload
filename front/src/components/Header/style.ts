import styled from "styled-components";

export const HeaderBox = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    padding: 1.5rem;
    box-shadow: 0px 1px 12px black;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: ${props => props.theme.layout.maxWidth};
    margin: 0 auto;
`;

export const HeaderTextDefault = styled.h1`
    color: ${props => props.theme.colors.textPrimary};
    font-size: 2.5rem;
`;
export const HeaderTextYellow = styled(HeaderTextDefault)`
    color: ${props => props.theme.colors.primary};
`;