import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError } from "react-icons/md";
import { ModalBody, ModalBodyIcon, ModalBodyItem, ModalBodyText, ModalContainer, ModalHeader } from "./style";
import { useTheme } from "styled-components";
import { UploadFile } from "../../App";
import React from "react";

interface ModalProps {
    title: string;
    files: UploadFile[];
}

const Modal: React.FC<ModalProps> = ({ files, title }: ModalProps) => {
    const theme = useTheme();

    return (
        <ModalContainer>
            <ModalHeader>
                {title}
            </ModalHeader>
            <ModalBody>
                {files.map(file => (
                    <ModalBodyItem key={file.id}>
                        <ModalBodyText>
                            {file.name}
                        </ModalBodyText>
                        <ModalBodyIcon>
                            {!file.uploaded && !file.error && (<CircularProgressbar
                                styles={{
                                    root: { width: "1.5rem" },
                                    path: { stroke: theme.colors.primary },
                                }}
                                strokeWidth={10}
                                value={file.progress}
                            />)}
                            {file.uploaded && <MdCheckCircle size={24} color="#25D366" />}
                            {file.error && <MdError size={24} color="#ff2400" />}
                        </ModalBodyIcon>
                    </ModalBodyItem>
                ))}
            </ModalBody>
        </ModalContainer>
    );
}

export default Modal;