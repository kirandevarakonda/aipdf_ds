import React from "react";

type Props = { pdfUrl: string };

const PDFViewer = ({ pdfUrl }: Props) => {
    return (
        // <iframe
        //     src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
        //     className="w-full h-full"
        // ></iframe>

        <div className="h-full">
            <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="100%"
                title="Embedded PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;

// "use client";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// // type Props = { pdfUrl: string };

// const PdfViewer = ({ pdfUrl }) => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
//   return (
//     <div className="h-full">
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//         <Viewer
//           fileUrl={pdfUrl}
//           plugins={[defaultLayoutPluginInstance]}
//         />
//       </Worker>
//     </div>
//   );
// };
// export default PdfViewer;