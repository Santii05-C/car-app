import { Button } from "@/components/ui/button";
import { storage } from "./../../../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function UploadImages() {
  const [selectedFilesList, setSelectedFilesList] = useState([]);
  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFilesList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFilesList.filter((item) => item != image);
    setSelectedFilesList(result);
  };

  const UploadImageToServer = async() => {
    await selectedFilesList.forEach((file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "car-app/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, file, metaData)
        .then((snapShop) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
          });
        });
    });
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFilesList.map((image, index) => (
          <div key={index}>
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white cursor-pointer"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="upload-images">
          <div
            className="border rounded-xl border-dotted
           border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md"
          >
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
