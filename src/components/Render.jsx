import Circle from './Circle';
import Square from './Square';
import Hline from './Hline';
import Vline from './Vline';

function Render(props) {
    const count = props.data[2];
    const color = props.data[1];
    const figure = props.data[0];
    // const[value, setValue] = useState(0);
    // setValue(0);

    const figuros = new Array(count).fill(null);
    // console.log('IS RENDERIO ', props.data[2], ' masyvas ', figuros);
    return(
        <>
            <div className="render-content">
            
                {figuros.map((fig, ind) => {
                    switch(figure) {
                        case 'circle': return <Circle key={ind} color={color} text={ind}/>
                        case 'square': return <Square key={ind} color={color} text={ind}/>
                        case 'hline': return <Hline key={ind} color={color} text={ind}/>
                        case 'vline': return <Vline key={ind} color={color} text={ind}/>
                        default: return -1
                    }
                })}
            </div>
        </>
    )
};

export default Render;