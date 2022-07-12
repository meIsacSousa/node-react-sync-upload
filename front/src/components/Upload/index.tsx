import Dropzone from "react-dropzone";
import { DropzoneContainer, MessageContainer, UploadContainer } from "./style";
import React from "react";

interface UploadProps {
    onDrop: (files: File[]) => void;
}

const Upload: React.FC<UploadProps> = ({ onDrop }: UploadProps) => {
    const message = (isDragActive: boolean) => {
        if (isDragActive) return <MessageContainer>Solte o arquivo aqui</MessageContainer>
        return <MessageContainer>Click ou arraste o arquivo</MessageContainer>
    }

    return (
        <UploadContainer>
            <Dropzone onDropAccepted={onDrop}>
                {
                    ({ getRootProps, getInputProps, isDragActive }) => (
                        <DropzoneContainer isDragActive={isDragActive} {...getRootProps()}>
                            <input {...getInputProps()} />
                            {message(isDragActive)}
                        </DropzoneContainer>
                    )
                }
            </Dropzone>
        </UploadContainer>
    );
}

export default Upload;

