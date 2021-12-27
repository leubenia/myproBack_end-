import { gitpost } from "../models/posting";
import { Request, Response } from "express";
import upload from "../util/S3"

const getposting = async (req: Request, res: Response) => {
	try {
		gitpost.findAll().then((data) => {
			res.status(200).send(data);
		});
	} catch (error: any) {
		res.status(400).send({ msg: "실패", err: error });
	}
};

const posting = async (req: Request, res: Response) => {
	const { title, url, text, stack } = req.body;
    try {
        upload.single("img");
        let imgurl:string = "";
        const img:any = req.file; 
        if(img){
            upload.single("img");
            imgurl = img.location;
        }
        if(imgurl == ""){
            return res.status(400).send({ msg: "이미지가 오지않고있습니다.!", err:"이미지 안옴" })
        }
        gitpost.create({title, url, img: imgurl, stack, text});
        res.status(200).send({msg:"성공"})
    } catch (error:any) {
        res.status(400).send({mgs:"실패", err: error})
    }
};

const mypro = {getposting, posting}

export default mypro;
