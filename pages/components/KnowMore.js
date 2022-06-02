export default function KnowMore() {
    return (
        <div className=" mx-5 my-5 know-more">
            <h3 className="know-more-text">Know more about us</h3>
            <div className="know-more-hr"></div>
            <div class="my-5 card-group " style={{'color':'black'}}>
                <div class="card text-bg-dark" style={{'border':'1px solid white'}}>
                    <img src="/assets/images/km-1.png" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{'border':'1px solid white'}}>
                    <h5 class="card-title">Our Vision</h5>
                    </div>
                </div>
                <div class="card text-bg-dark" style={{'border':'1px solid white'}}>
                    <div class="card-body" style={{'border':'1px solid white'}}>
                    <h5 class="card-title">Our Mission</h5>  
                    </div>
                    <img src="/assets/images/km-2.png" class="card-img-top" alt="..."/>
                    
                </div>
                <div class="card text-bg-dark" style={{'border':'1px solid white'}}>
                    <img src="/assets/images/km-3.png" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{'border':'1px solid white'}}>
                    <h5 class="card-title">Our Goal</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}