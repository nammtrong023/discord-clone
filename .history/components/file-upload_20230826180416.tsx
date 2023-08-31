'use client';

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload = () => {
    return <div></div>;
};

export default FileUpload;
