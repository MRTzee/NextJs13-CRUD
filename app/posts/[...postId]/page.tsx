export default function postDetail({ params }: { params: { postId: string } }) {
    console.log(params);
    return (
        <div>Post {params.postId}</div>
    )
}