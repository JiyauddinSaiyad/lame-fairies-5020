const Community = () =>{
    return `
    <div id="divider">
        <h3>Community Posts</h3>
    </div>
    <section id="community" class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div id="slide1">

                        <div class="images">
                            <div><img src="https://cdn.modesens.com/umedia/1638042s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1638895s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1638049s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1634399s?w=400&" alt=""></div>
                        </div>

                    </div>
                </div>
                <div class="carousel-item">
                    <div id="slide2">

                        <div class="images">
                            <div><img src="https://cdn.modesens.com/umedia/1636438s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1633551s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1632972s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1634399s?w=400&" alt=""></div>
                        </div>

                    </div>
                </div>
                <div class="carousel-item">
                    <div id="slide3">

                        <div class="images">
                            <div><img src="https://cdn.modesens.com/umedia/1632288s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1630515s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1629641s?w=400&" alt=""></div>
                            <div><img src="https://cdn.modesens.com/umedia/1638049s?w=400&" alt=""></div>
                        </div>

                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <div id="showBtn"><button>Show More</button></div>`
}

export {Community};