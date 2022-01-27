
import multer from "multer";
import path from  'path'

export const catIconUpload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/category_icons/");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
})

