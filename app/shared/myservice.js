import * as FileSystem from "expo-file-system";

export const myServic = () => {
  // EAzureBlobStorageImage.configure(
  //   "demodotnet48stg", //Account Name
  //   "?sv=2019-10-10&ss=bfqt&srt=c&sp=rwdlacupx&se=2021-07-11T19:42:15Z&st=2020-07-11T11:42:15Z&spr=https&sig=H3f2NIL9UD2Fs1y9jDrsvKgJ9MII6xh0Y2RgLLcLhv4%3D", //Account Key
  //   "abc" //Container Name
  // );

  // const uploadFile = async () => {
  //   FileSystem.downloadAsync(
  //     "https://demodotnet48stg.blob.core.windows.net/abc/big_buck_bunny.mp4",
  //     FileSystem.documentDirectory + "small-surya.mp4",
  //     {
  //       headers: {
  //         Authorization:
  //           "?sv=2019-10-10&ss=bfqt&srt=c&sp=rwdlacupx&se=2021-07-11T19:42:15Z&st=2020-07-11T11:42:15Z&spr=https&sig=H3f2NIL9UD2Fs1y9jDrsvKgJ9MII6xh0Y2RgLLcLhv4%3D",
  //       },
  //     }
  //   )
  //     .then(({ uri }) => {
  //       console.log("Finished downloading to ", uri);
  //       return uri;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  const uploadfile2 = async () => {
    let signedUrl =
      "https://demodotnet48stg.blob.core.windows.net/abc/surya.mp4?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-07-13T00:48:22Z&st=2020-07-12T16:48:22Z&spr=https&sig=lrJZgNnw6ITPwVEIsLRNPSwB5%2BAa4veXA943o9TRipo%3D";
    // "https://demodotnet48stg.blob.core.windows.net/abc/?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-07-12T16:50:57Z&st=2020-07-12T08:50:57Z&spr=https&sig=scbm30f60nFgojITU3ezQEQYDISEdOhPyusRifFk97I%3D";
    //  "&comp=block&blockid=1";
    const response = await fetch(
      // "https://demodotnet48stg.blob.core.windows.net/abc/big_buck_bunny.mp4?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-07-12T16:50:57Z&st=2020-07-12T08:50:57Z&spr=https&sig=scbm30f60nFgojITU3ezQEQYDISEdOhPyusRifFk97I%3D"
      "http://techslides.com/demos/sample-videos/small.mp4"
    );

    const blob = await response.blob();
    const myType = blob.type;
    const size = blob.size;
    console.log("surya " + blob.size);
    await fetch(signedUrl, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        processData: true,
        "Content-Type": blob.type,
        "Content-Length": blob.size,
      },
      body: blob,
    })
      .then((rs) => {
        console.log(234234232323432);
      })
      .catch((e) => console.error(e));
    // return targetUrl;

    signedUrl =
      "https://demodotnet48stg.blob.core.windows.net/abc/sanjana.mp4?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-07-13T00:48:22Z&st=2020-07-12T16:48:22Z&spr=https&sig=lrJZgNnw6ITPwVEIsLRNPSwB5%2BAa4veXA943o9TRipo%3D";

    //console.warn(FileSystem.documentDirectory + "small-surya.mp4");
    FileSystem.uploadAsync(
      signedUrl,
      "http://techslides.com/demos/sample-videos/small.mp4",
      {
        headers: {
          "x-ms-blob-type": "BlockBlob",
          processData: true,
          "Content-Type": myType,
          "Content-Length": size,
        },
      }
    );
  };

  //   .then(({ uri }) => {
  //     console.log("Finished downloading to ", uri);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // FileSystem.downloadAsync(
  //   "http://techslides.com/demos/sample-videos/small.mp4",
  //   FileSystem.documentDirectory + "small.mp4"
  // )
  //   .then(({ uri }) => {
  //     console.log("Finished downloading to ", uri);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return { uploadfile2 };
};

//     process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY ||
//     "?sv=2019-10-10&ss=bfqt&srt=c&sp=rwdlacupx&se=2021-07-11T19:42:15Z&st=2020-07-11T11:42:15Z&spr=https&sig=H3f2NIL9UD2Fs1y9jDrsvKgJ9MII6xh0Y2RgLLcLhv4%3D";
