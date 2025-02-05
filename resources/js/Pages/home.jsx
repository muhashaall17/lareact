import Layout from "../Layout/navbar"

function Home({ news }) {
    return (
        <>
            <h1 className="title">This is HOME</h1>

            <div>
                {news.map(news => (
                    <div key={news.id} className="p-4 border-b">
                        <p className="newsTitle">{news.title}</p>
                        <p>{news.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} />

export default Home;