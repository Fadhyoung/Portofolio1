// downloadFile.js
export const downloadFile = (filePath, fileName) => {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the URL to the file's location
    link.href = `${process.env.PUBLIC_URL}/${filePath}`;
    
    // Set the download attribute with a filename
    link.download = fileName;
  
    // Append to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  };
  