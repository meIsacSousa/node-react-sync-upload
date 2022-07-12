import Dropzone from "react-dropzone";
import { DropzoneContainer, MessageContainer, UploadContainer } from "./style";

const Upload = () => {

    const message = () => {
        return (
            <MessageContainer>Click ou arraste o arquivo</MessageContainer>
        )
    }

    return (
        <UploadContainer>
            <Dropzone>
                {
                    ({ getRootProps, getInputProps }) => (
                        <DropzoneContainer {...getRootProps()}>
                            <input {...getInputProps()} />
                            {message()}
                        </DropzoneContainer>
                    )
                }
            </Dropzone>
        </UploadContainer>
    );
}

export default Upload;

