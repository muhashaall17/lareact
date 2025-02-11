import Layout from "../Layout/navbar"

function Home({ news }) {
    return (
        <>
            <p className="text-white-500 text-left m-5">Movie This Week</p>
            <div className="">
                {news.map(news => (
                    <div key={news.id} className="card bg-neutral w-100 shadow-xl mb-8 ml-4 mr-4">
                        <div className="card-body">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.desc}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} />

export default Home;