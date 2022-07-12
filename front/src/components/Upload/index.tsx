import Dropzone from "react-dropzone";
import { DropzoneContainer, MessageContainer, UploadContainer } from "./style";

const Upload = () => {

    const message = (isDragActive: boolean) => {
        if (isDragActive) return <MessageContainer>Solte o arquivo aqui</MessageContainer>
        return <MessageContainer>Click ou arraste o arquivo</MessageContainer>
    }

    return (
        <UploadContainer>
            <Dropzone>
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

