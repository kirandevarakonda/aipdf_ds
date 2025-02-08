import fs from 'fs';
import path from 'path';
import os from 'os'; // Import the os module
import axios from 'axios';

export async function downloadFromS3(url: string): Promise<string | null> {
    try {
        // Log the download URL for debugging
        console.log("Download URL:", url);

        // Fetch the file from the URL using axios
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);

        // Determine the file path based on the operating system
        let fileNameToSave: string;

        if (os.platform() === "win32") {
            fileNameToSave = path.join(
                `C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Temp`,
                `pdf-${Date.now()}.pdf`
            );
        } else {
            fileNameToSave = path.join('/tmp', `pdf-${Date.now()}.pdf`);
        }

        // Save the file locally
        fs.writeFileSync(fileNameToSave, buffer);

        // Log the file path where it was saved
        console.log("File saved to:", fileNameToSave);
        return fileNameToSave;
    } catch (error) {
        // Log any errors encountered during the process
        console.error("Error downloading file:", error);
        return null;
    }
}

//download from s3
// import { S3 } from "@aws-sdk/client-s3";
// import fs from "fs";
// export async function downloadFromS3(file_key: string): Promise<string> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const s3 = new S3({
//         region: "us-east-1",
//         credentials: {
//           accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
//           secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
//         },
//       });
//       const params = {
//         Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
//         Key: file_key,
//       };

//       const obj = await s3.getObject(params);
//       const file_name = `/tmp/elliott${Date.now().toString()}.pdf`;

//       if (obj.Body instanceof require("stream").Readable) {
//         // AWS-SDK v3 has some issues with their typescript definitions, but this works
//         // https://github.com/aws/aws-sdk-js-v3/issues/843
//         //open the writable stream and write the file
//         const file = fs.createWriteStream(file_name);
//         file.on("open", function (fd) {
//           // @ts-ignore
//           obj.Body?.pipe(file).on("finish", () => {
//             return resolve(file_name);
//           });
//         });
//         // obj.Body?.pipe(fs.createWriteStream(file_name));
//       }
//     } catch (error) {
//       console.error(error);
//       reject(error);
//       return null;
//     }
//   });
// }

// downloadFromS3("uploads/1693568801787chongzhisheng_resume.pdf");


//chatgpt code
// import { S3 } from "@aws-sdk/client-s3";
// import fs, { WriteStream } from "fs";
// import path from "path";
// import os from "os"; // Import the os module
// import { Readable } from "stream"; // Import Readable stream from Node.js

// export async function downloadFromS3(file_key: string): Promise<string | null> {
//   try {
//     // Initialize S3 client
//     const s3 = new S3({
//       region: "us-east-1",
//       credentials: {
//         accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
//         secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
//       },
//     });

//     // Define S3 parameters
//     const params = {
//       Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
//       Key: file_key,
//     };

//     console.log(params)

//     // Fetch object from S3
//     const obj = await s3.getObject(params);

//     // Check if the object body is a stream (Readable in Node.js)
//     const bodyStream = obj.Body as Readable;

//     // Determine the file path based on the operating system
//     let fileNameToSave: string;
//     if (os.platform() === "win32") {
//       fileNameToSave = path.join(
//         `C:\\Users\\${os.userInfo().username}\\AppData\\Local\\Temp`,
//         `pdf-${Date.now()}.pdf`
//       );
//     } else {
//       fileNameToSave = path.join('/tmp', `pdf-${Date.now()}.pdf`);
//     }

//     // Write the file using a stream
//     const fileStream: WriteStream = fs.createWriteStream(fileNameToSave);
//     return new Promise((resolve, reject) => {
//       // Pipe the stream to the file
//       bodyStream.pipe(fileStream);

//       // Resolve when the file is fully written
//       fileStream.on("finish", () => {
//         console.log("File saved to:", fileNameToSave); // Log the saved file path
//         resolve(fileNameToSave);
//       });

//       // Handle errors in the file stream
//       fileStream.on("error", (error) => {
//         console.error("Error writing file:", error);
//         reject(null);
//       });
//     });
//   } catch (error) {
//     console.error("Error downloading file from S3:", error);
//     return null;
//   }
// }

// downloadFromS3("uploads/1726689157456B20AI035_MP_Report.pdf");
