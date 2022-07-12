import { useState } from "react";
import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/themes/defaultTheme"
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Modal from "./components/Modal";
import { v4 } from 'uuid';
import api from './services/api';

export interface UploadFile {
  file: File;
  id: string;
  name: string;
  size: number;
  uploaded: boolean;
  progress: number;
  error?: boolean;
}

function App() {
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);

  const handleDrop = (files: File[]): void => {
    const formattedFiles = files.map(file => ({
      file,
      id: v4(),
      name: file.name,
      size: file.size,
      uploaded: false,
      progress: 0,
      error: false,
    }));

    setUploadFiles(prevFiles => [...prevFiles, ...formattedFiles]);
    executeUpload(formattedFiles);
  }

  const executeUpload = async (files: UploadFile[]) => {
    for (const file of files) {
      const data = new FormData();
      data.append('file', file.file, file.name);

      try {
        const response = await api.post('/uploads', data, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            updateFile(file.id, { progress });
          }
        });

        response.status === 200 ?
          updateFile(file.id, { uploaded: true }) :
          updateFile(file.id, { error: true });
      } catch (error) {
        updateFile(file.id, { error: true });
      }
    }
  }

  const updateFile = (id: string, data: Partial<UploadFile>) => {
    setUploadFiles(state => state.map(file => file.id === id ? { ...file, ...data } : file));
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Upload onDrop={handleDrop} />
      {uploadFiles.length > 0 && <Modal files={uploadFiles} title={"Arquivos"} />}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
