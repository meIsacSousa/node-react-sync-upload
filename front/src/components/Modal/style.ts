import styled from "styled-components";


export const ModalContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 1.5rem;
    min-width: 23rem;
    background-color: ${props => props.theme.colors.secondary};
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 10rem);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export const ModalBodyItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
    gap: 1rem;
`;

export const ModalBodyText = styled.div``;

export const ModalBodyIcon = styled.div``;