import Layout from "../Layout/navbar"

function nowShow({ data }) {
    return (
        <>
            <h1 className="title">This is {data}</h1>
        </>
    )
}

nowShow.layout = page => <Layout children={page} />

export default nowShow;