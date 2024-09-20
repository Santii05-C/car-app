function ImageGallery({ carDetail }) {
  return (
    <div>
      <img
        src={carDetail?.images[0].imageUrl}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}

export default ImageGallery;
