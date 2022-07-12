import { DropzoneRootProps } from 'react-dropzone';
import styled, { css, useTheme } from 'styled-components';

interface DropzoneContainerProps extends DropzoneRootProps {
    isDragActive: boolean;
}

const dragActive = css`
    border-color: #25D366;
    box-shadow: 1px 1px 10px #25D366;
`;

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
`;

export const DropzoneContainer = styled.div<DropzoneContainerProps>`
    padding: 0.5rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #868686;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 20rem;
    height: 7rem;
    ${props => props.isDragActive && dragActive}

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: 1px 1px 10px ${props => props.theme.colors.primary};
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: ${props => props.theme.colors.textSecondary};
`;