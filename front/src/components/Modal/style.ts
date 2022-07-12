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
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
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
`;

export const ModalText = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding: 0 2rem;
`;

export const ModalIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;

    &:hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: rgba(48, 48, 48, 0.3);

    }
`;