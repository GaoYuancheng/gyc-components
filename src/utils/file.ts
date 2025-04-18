export type FileUrl = {
  fileUrl?: string;
  url?: string;
  fileurl?: string;
} & ({ fileUrl: string } | { url: string } | { fileurl: string });

export type FileSize = {
  fileSize?: number;
  filesize?: number;
  size?: number;
} & ({ fileSize: number } | { filesize: number } | { size: number });

export type FileUuid = {
  fileUuid?: string;
  fileuuid?: string;
  uuid?: string;
} & ({ fileUuid: string } | { fileuuid: string } | { uuid: string });

export type FileName = {
  fileName?: string;
  filename?: string;
  name?: string;
} & ({ fileName: string } | { filename: string } | { name: string });

export type FileInfo = FileUrl & FileSize & FileUuid & FileName;

export type BaseFileInfo = {
  fileName: string;
  fileSize: number;
  fileUrl: string;
  fileUuid: string;
};

export const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
export const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'];
export const audioExtensions = ['mp3', 'wav', 'ogg', 'aac'];
export const zipExtensions = ['zip', 'rar', 'tar', 'gz'];
export const wordExtensions = ['doc', 'docx'];
export const excelExtensions = ['xls', 'xlsx'];
export const pdfExtensions = ['pdf'];
export const pptExtensions = ['ppt', 'pptx'];
export const txtExtensions = ['txt'];

type GetFileExtension = (
  fileName?: string,
  options?: { toLowerCase?: boolean },
) => string;

/**
 * 获取文件的扩展名
 * @param fileName 文件名
 * @returns 文件的扩展名（小写），如果没有扩展名则返回空字符串
 */
export const getFileExtension: GetFileExtension = (fileName, options) => {
  if (!fileName) {
    return '';
  }
  const parts = fileName.split('.');
  let ext = parts.length > 1 ? parts.pop() || '' : '';

  if (options?.toLowerCase) {
    ext = ext.toLowerCase();
  }

  return ext;
};

export type Unit = 'B' | 'K' | 'M' | 'G' | 'b' | 'k' | 'm' | 'g';

// 转换单位 K M G B
export const convertFileSize = (
  fileSize: number,
  unit: Unit = 'B',
  finalUnit: Unit = 'M',
) => {
  // 将文件大小从 unit 单位转换到 finalUnit 单位
  const units: Unit[] = ['B', 'K', 'M', 'G'];
  const unitIndex = units.indexOf(unit.toUpperCase() as Unit);
  const finalUnitIndex = units.indexOf(finalUnit.toUpperCase() as Unit);
  const diff = finalUnitIndex - unitIndex;

  if (diff === 0) return fileSize;

  // 如果是向上转换(B->K->M->G)则除以1024
  // 如果是向下转换(G->M->K->B)则乘以1024
  const res =
    diff > 0
      ? fileSize / Math.pow(1024, diff)
      : fileSize * Math.pow(1024, -diff);
  return res.toFixed(2);
};

export const getFileInfo = (fileInfo: Partial<FileInfo>) => {
  const {
    name,
    fileName: originFileName,
    fileSize: originFileSize,
    fileUrl: originFileUrl,
    fileUuid,
    uuid,
    filename,
    filesize,
    fileurl,
    url,
    size,
    fileuuid,
  } = fileInfo;
  return {
    fileName: originFileName || filename || name,
    fileSize: originFileSize || filesize || size,
    fileUrl: originFileUrl || fileurl || url,
    fileUuid: fileUuid || fileuuid || uuid,
  } as BaseFileInfo;
};

interface downloadFileOptions {
  useFetch: boolean;
}

// 文件下载使用a标签
export const downloadFileUseATag = (fileInfo: FileUrl & FileName) => {
  const { fileUrl, fileName } = getFileInfo(fileInfo);
  const a = document.createElement('a');
  a.download = fileName;
  a.href = fileUrl;
  a.click();
  window.URL.revokeObjectURL(fileUrl);
  a.remove();
};

// 文件下载使用fetch
export const downloadFileUseFetch = (fileInfo: FileUrl & FileName) => {
  const { fileUrl, fileName } = getFileInfo(fileInfo);
  fetch(fileUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const objectUrl = window.URL.createObjectURL(blob);
      downloadFileUseATag({ url: objectUrl, fileName });
    });
};

// 文件下载
export const downloadFile = (
  fileInfo: FileUrl & FileName,
  { useFetch = false }: downloadFileOptions,
) => {
  const { fileUrl, fileName } = getFileInfo(fileInfo);
  if (useFetch) {
    downloadFileUseFetch({ fileUrl, fileName });
    return;
  }

  downloadFileUseATag({ fileUrl, fileName });
};
