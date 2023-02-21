import client from './client';

let votedata = {
    "title" : "",
    "content" : ""
}

const votepost = async ({ title, content }) =>
{
    votedata.title = title;
    votedata.content = content;
    console.log(votedata);
    await client.post('http://localhost:8080/cotato/vote', votedata,
        {"Content-Type" : "application/json"})
        .then((res) => {
            console.log(res);
        })
}

export default votepost;