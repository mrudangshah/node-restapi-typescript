// import aws from "aws-sdk"
// import multerS3 from  "multer-s3"
// import multer from 'multer';
// import { ENV } from '../config/config.json';

// export class DigitalOceanSpace {

//   public static Storage(folderName) {
//     const date = new Date();

//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     return multer({
//       storage: multerS3({
//         s3: s3,
//         bucket: ENV.DIGITAL_OCEAN_BUCKET,
//         acl: 'public-read',
//         key: function (request, file, cb) {
//           // console.log(file);
//           cb(null, `${folderName}/${date.getUTCFullYear()}/${date.getUTCMonth()}/${folderName}-image-${Date.now()}${file.originalname}`);
//         }
//       })
//     })
//   }

//   public static StoreWithFilter(folderName, filterOptions) {
//     const date = new Date();

//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     return multer({
//       storage: multerS3({
//         s3: s3,
//         bucket: ENV.DIGITAL_OCEAN_BUCKET,
//         acl: 'public-read',
//         key: function (request, file, cb) {
//           // console.log(file);
//           cb(null, `${folderName}/${date.getUTCFullYear()}/${date.getUTCMonth()}/${folderName}-image-${Date.now()}${file.originalname}`);
//         }
//       })
//       ,
//       fileFilter: filterOptions
//     })
//   }

//   public static StoreWithFilterAndFieldName(folderName, filterOptions) {
//     const date = new Date();

//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     return multer({
//       storage: multerS3({
//         s3: s3,
//         bucket: ENV.DIGITAL_OCEAN_BUCKET,
//         acl: 'public-read',
//         key: function (request, file, cb) {
//           // console.log(file);
//           cb(null, `${folderName}/${request.body.vendorId}/${date.getUTCFullYear()}/${date.getUTCMonth()}/${file.fieldname}.${file.originalname.split('.')[1]}`);
//         }
//       })
//       , fileFilter: filterOptions
//     })
//   }

//   public static StoreWithFilterAndFieldNameCustomer(folderName, filterOptions) {
//     const date = new Date();

//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     return multer({
//       storage: multerS3({
//         s3: s3,
//         bucket: ENV.DIGITAL_OCEAN_BUCKET,
//         acl: 'public-read',
//         key: function (request, file, cb) {
//           // console.log(file);
//           cb(null, `${folderName}/${request.params.customerId}/${date.getUTCFullYear()}/${date.getUTCMonth()}/${file.fieldname}.${file.originalname.split('.')[1]}`);
//         }
//       })
//       , fileFilter: filterOptions
//     })
//   }

//   public static async doesKeyExists(key) {
//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     var params = {
//       Bucket: ENV.DIGITAL_OCEAN_BUCKET,
//       //  Key: "shoplogo/2020/6/shoplogo_1593680647927.png"
//       //Key:"shoplogo/2020/6/shoplogo_1593680260312.png"
//       Key: key
//       // MaxKeys: 2
//     };

//     let a = await s3.headObject(params).promise()
//     return a;

//   }

//   public static async deleteKey(key) {
//     const spacesEndpoint = new aws.Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT);
//     const s3 = new aws.S3({
//       endpoint: spacesEndpoint,
//       accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//       secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//     });

//     var params = {
//       Bucket: ENV.DIGITAL_OCEAN_BUCKET,
//       Key: key
//       // MaxKeys: 2
//     };
//     let b = await s3.deleteObject(params).promise();
//     return b;
//   }

//   public static import(path, image) {
//     return new Promise((resolve, reject) => {
//       const spacesEndpoint =
//         new aws
//           .Endpoint(ENV.DIGITAL_OCEAN_ENDPOINT
//           );
//       const s3 =
//         new aws
//           .S3(
//             {
//               endpoint: spacesEndpoint,
//               accessKeyId: ENV.DIGITAL_OCEAN_ACCESS_KEY,
//               secretAccessKey: ENV.DIGITAL_OCEAN_SECRET_KEY
//             }
//           );

//       var params =
//       {
//         Body: image,
//         Bucket: ENV.DIGITAL_OCEAN_BUCKET,
//         Key: `${path}`,
//         ContentEncoding: 'base64',
//         //ContentType: 'image/gif',
//         ACL: 'public-read'
//       };

//       s3.putObject(params, function (err, data) {
//         if (err) {
//           console.log(err, err.stack);
//           reject(err);
//         }
//         else {
//           // resolve(data);
//           console.log(data)
//           resolve(data)
//         }
//         // return data;
//       });
//     })

//   }
// }