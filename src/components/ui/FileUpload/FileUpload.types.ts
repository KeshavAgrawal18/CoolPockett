export interface FileUploadProps {
  label?: string;
  onFileSelect: (file: File) => void;
  file?: File | null;
  error?: string;
}
