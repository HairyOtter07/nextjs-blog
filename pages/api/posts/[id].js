import { existsPost, getPostData, getRawMd } from '../../../lib/posts'

export default async function handler(req, res) {
    const { id } = req.query
    if (!existsPost(id)) {
        res.status(404).json({ error: { message: "Invalid post id", id: id } });
    } else {
        const postData = await getPostData(id);
        const rawMd = getRawMd(id)

        res.status(200).json({ post: { id: postData.id, title: postData.title, date: postData.date, html: postData.contentHtml, raw_md: rawMd } })
    }
}