import { DropzoneRootProps } from 'react-dropzone';
import styled from 'styled-components';


export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
`;

export const DropzoneContainer = styled.div<DropzoneRootProps>`
    padding: 0.5rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: 4px;
    cursor: pointer;
    border: 1px dashed ${props => props.theme.colors.primary};
    text-align: center;
    width: 100%;
    max-width: 15rem;
`;

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.textSecondary};
    padding: 0.5rem;
`;