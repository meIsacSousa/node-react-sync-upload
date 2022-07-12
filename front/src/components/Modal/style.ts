import styled from "styled-components";

interface ModalBodyProps {
    active: boolean;
}

export const ModalContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 1.5rem;
    min-width: 23rem;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: 0px 1px 12px black;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textPrimary};
    font-weight: bold;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export const ModalBody = styled.div<ModalBodyProps>`
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 10rem);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
    ${props => !props.active && "max-height: 0"}
`;

export const ModalBodyItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
    gap: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.background};
`;

export const ModalHeaderText = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding: 0 2rem;
`;

export const ModalHeaderIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;

    &:hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: rgba(255, 205, 0, 0.3);
    }
`;