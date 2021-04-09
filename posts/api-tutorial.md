---
title: "How to Use This Site's API"
date: "2021-04-09"
---

> _"Any good blog has a cool API."_  
> _-- me, two seconds ago_

So, as you can probably tell by that _amazingly creative_ quote, this blog site has an API. This post will be a short tutorial on how to use it.

The endpoint is `{BASE_URL}/api/posts/{POST_ID}`, where `{BASE_URL}` is the base URL of this site (currently http://localhost:3000), and `{POST_ID}` is the id of the post you're requesting.

To get a single post, use a request library, such as `node-fetch` or `sync-fetch` in Node.JS, or `requests` in Python, and make a GET request to the endpoint, making sure to replace `{POST_ID}` with the id of the post you'd like. (e.g. `http://localhost:3000/api/posts/api-tutorial`)

The response will be a JSON object of the form:
```
{
    post: {
        id: "post_id",
        title: "post_title",
        date: "post_date",
        html: "post_rendered_html",
        raw_md: "raw_post"
    }
}
```