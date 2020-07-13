// export const CloudStorageService = () => {
//   const {
//     StorageSharedKeyCredential,
//     BlobServiceClient,
//   } = require("@azure/storage-blob");
//   const { AbortController } = require("@azure/abort-controller");

//   const STORAGE_ACCOUNT_NAME =
//     process.env.AZURE_STORAGE_ACCOUNT_NAME || "demodotnet48stg";
//   const ACCOUNT_ACCESS_KEY =
//     process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY ||
//     "?sv=2019-10-10&ss=bfqt&srt=c&sp=rwdlacupx&se=2021-07-11T19:42:15Z&st=2020-07-11T11:42:15Z&spr=https&sig=H3f2NIL9UD2Fs1y9jDrsvKgJ9MII6xh0Y2RgLLcLhv4%3D";

//   const ONE_MEGABYTE = 1024 * 1024;
//   const FOUR_MEGABYTES = 4 * ONE_MEGABYTE;
//   const ONE_MINUTE = 60 * 1000;

//   async function uploadStream(aborter, containerClient, filePath) {
//     // filePath = path.resolve(filePath);

//     // const fileName = path.basename(filePath).replace(".md", "-STREAM.md");

//     const blobClient = containerClient.getBlobClient(fileName);
//     const blockBlobClient = blobClient.getBlockBlobClient();

//     // const stream = fs.createReadStream(filePath, {
//     //   highWaterMark: FOUR_MEGABYTES,
//     // });

//     const response = await fetch(filePath);
//     const stream = await response.blob();
//     console.log(stream.length);
//     const uploadOptions = {
//       bufferSize: FOUR_MEGABYTES,
//       maxBuffers: 5,
//     };

//     return await blockBlobClient.uploadStream(
//       stream,
//       uploadOptions.bufferSize,
//       uploadOptions.maxBuffers,
//       aborter
//     );
//   }

//   async function showBlobNames(aborter, containerClient) {
//     let iter = await containerClient.listBlobsFlat(aborter);
//     for await (const blob of iter) {
//       console.log(` - ${blob.name}`);
//     }
//   }

//   // [Node.js only] A helper method used to read a Node.js readable stream into string
//   async function streamToString(readableStream) {
//     return new Promise((resolve, reject) => {
//       const chunks = [];
//       readableStream.on("data", (data) => {
//         chunks.push(data.toString());
//       });
//       readableStream.on("end", () => {
//         resolve(chunks.join(""));
//       });
//       readableStream.on("error", reject);
//     });
//   }

//   async function execute() {
//     const containerName = "abc";
//     const blobName = "quickstart.txt";
//     const content = "Hello Node SDK";
//     const localFilePath = "../shared/big_buck_bunny.mp4";

//     // const credentials = new StorageSharedKeyCredential(
//     //   STORAGE_ACCOUNT_NAME,
//     //   ACCOUNT_ACCESS_KEY
//     // );
//     const blobServiceClient = new BlobServiceClient(
//       "https://demodotnet48stg.blob.core.windows.net/?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-07-12T16:50:57Z&st=2020-07-12T08:50:57Z&spr=https&sig=scbm30f60nFgojITU3ezQEQYDISEdOhPyusRifFk97I%3D"
//     );

//     const containerClient = blobServiceClient.getContainerClient(containerName);
//     const blobClient = containerClient.getBlobClient(blobName);
//     const blockBlobClient = blobClient.getBlockBlobClient();

//     const aborter = AbortController.timeout(30 * ONE_MINUTE);

//     //await containerClient.create();
//     console.log(`Container: "${containerName}" is created`);

//     // console.log("Containers:");
//     //await showContainerNames(aborter, blobServiceClient);
//     await blockBlobURL.upload(aborter, content, content.length);
//     console.log(`Blob "${blobName}" is uploaded`);

//     // await uploadStream(aborter, containerClient, localFilePath);
//     // console.log(`Local file "${localFilePath}" is uploaded as a stream`);

//     // console.log(`Blobs in "${containerName}" container:`);

//     // const downloadResponse = await blockBlobClient.download(0, aborter);
//     // const downloadedContent = await streamToString(
//     //   downloadResponse.readableStreamBody
//     // );

//     // console.log(`Downloaded blob content: "${downloadedContent}"`);

//     // await blockBlobClient.delete(aborter);
//     // console.log(`Block blob "${blobName}" is deleted`);

//     // await containerClient.delete(aborter);
//     // console.log(`Container "${containerName}" is deleted`);
//   }

//   return { execute };
// };

// // execute()
// //   .then(() => console.log("Done"))
// //   .catch((e) => console.log(e));
