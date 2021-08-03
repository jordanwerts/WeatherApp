export default function ForecastPage(props) {
    const card = <div className="box">{props.days}</div>;
    const arr = [];
    function cardMaker(props) {
        for (let i = props; i > 0; i--){
            arr.push(card)
        }
    }
    cardMaker(props.days);
    const layout =(
        <div style = {{
            backgroundColor: "limegreen"
            }} >
            <p>I am a Forecast Page</p>
            <div class="container">
                
                {arr.map(x => x)}
                
            </div>
        </div>
    )
    return layout
}