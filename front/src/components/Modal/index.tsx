import { CircularProgressbar } from "react-circular-progressbar";
import { ModalBody, ModalBodyIcon, ModalBodyText, ModalContainer, ModalHeader } from "./style";
import { useTheme } from "styled-components";

const Modal = () => {
    const theme = useTheme();

    return (
        <ModalContainer>
            <ModalHeader>
                Arquivos
            </ModalHeader>
            <ModalBody>
                <ModalBodyText>
                    arquivo.txt
                </ModalBodyText>
                <ModalBodyIcon>
                    <CircularProgressbar
                        styles={{
                            root: { width: "1.5rem" },
                            path: { stroke: theme.colors.primary },
                        }}
                        strokeWidth={10}
                        value={65}
                    />
                </ModalBodyIcon>
            </ModalBody>
        </ModalContainer>
    );
}

export default Modal;