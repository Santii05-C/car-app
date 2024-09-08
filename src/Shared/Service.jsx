const { CarImages } = require("configs/schema");

const FormatResult = (resp) => {
  let resutl = [];

  resp.forEach((item) => {
    const listingId = item.carListing?.id;
    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }

    if (item.images) {
      result[listingId].images.push(item.CarImages);
    }
  });
};

export default {
  FormatResult,
};
