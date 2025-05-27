const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloud_api_key,
    api_secret: process.env.cloud_api_key_secret
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_dev',
      allowedFormat: ['png',"jpg","jpeg"], // supports promises as well
    //   public_id: (req, file) => 'computed-filename-using-request',
    },
});

module.exports = {
    cloudinary,storage
}