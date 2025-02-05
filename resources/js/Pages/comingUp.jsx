import Layout from "../Layout/navbar"

function comingUp({ data }) {
    return (
        <>
            <h1 className="title">This is {data}</h1>
        </>
    )
}

comingUp.layout = page => <Layout children={page} />

export default comingUp;