import Layout from "../Layout/navbar"

function about({ data }) {
    return (
        <>
            <h1 className="title">This is {data}</h1>
        </>
    )
}

about.layout = page => <Layout children={page} />

export default about;