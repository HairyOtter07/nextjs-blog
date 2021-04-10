import { getAllPostIds } from '../../../lib/posts'
import absoluteUrl from 'next-absolute-url'

async function getAllData(allPosts, baseUrl) {
    let allData = []
    for (let post of allPosts) {
        const res = await fetch(`${baseUrl}/api/posts/${post.params.id}`);
        const data = await res.json();
        allData.push(data)
    }
    return allData
}

export default async function handler(req, res) {
    const baseUrl = absoluteUrl(req).origin;
    const allPosts = getAllPostIds();
    
    const allData = await getAllData(allPosts, baseUrl)

    res.status(200).json(allData)
}