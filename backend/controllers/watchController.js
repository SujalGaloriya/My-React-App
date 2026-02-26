import watchModel from "../models/watchModel.js";
import fs from 'fs'

// all watch list
const listWatch = async (req, res) => {
    try {
        const watchs = await watchModel.find({})
        res.json({ success: true, data: watchs })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add watch
const addWatch = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const watch = new watchModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await watch.save();
        res.json({ success: true, message: "Watch Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete watch
const removeWatch = async (req, res) => {
    try {

        const watch = await watchModel.findById(req.body.id);
        fs.unlink(`uploads/${watch.image}`, () => { })

        await watchModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Watch Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listWatch, addWatch, removeWatch }