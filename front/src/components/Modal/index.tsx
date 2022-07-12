import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { ModalBody, ModalHeaderIcon, ModalBodyItem, ModalHeaderText, ModalContainer, ModalHeader } from "./style";
import { useTheme } from "styled-components";
import { UploadFile } from "../../App";
import React from "react";

interface ModalProps {
    title: string;
    files: UploadFile[];
}

const Modal: React.FC<ModalProps> = ({ files, title }: ModalProps) => {
    const theme = useTheme();
    const [isActive, setActive] = React.useState(true);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <ModalContainer>
            <ModalHeader>
                <ModalHeaderText>{title}</ModalHeaderText>
                <ModalHeaderIcon onClick={handleToggle}>
                    {isActive ?
                        <MdKeyboardArrowDown size={26} color={theme.colors.textPrimary} /> :
                        <MdKeyboardArrowUp size={26} color={theme.colors.textPrimary} />}
                </ModalHeaderIcon>
            </ModalHeader>
            <ModalBody active={isActive}>
                {files.map(file => (
                    <ModalBodyItem key={file.id}>
                        <div>
                            {file.name}
                        </div>
                        <div>
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
                        </div>
                    </ModalBodyItem>
                ))}
            </ModalBody>
        </ModalContainer>
    );
}

export default Modal;