export const preview = (req, res) => res.send("home page preview videos");
export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("upload");
export const watch = (req, res) => {
    console.log(req.params);
    return res.send("Watch");
}
export const edit = (req, res) => res.send("edit");
export const deleteVideo = (req, res) => res.send("deleteVideo");