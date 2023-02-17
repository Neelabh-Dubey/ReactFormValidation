import Card from "./Card"


function Data(props){
    return(
        <div>
            {props.data.map(((item) => <Card person={item} key={Math.round(Math.random()*1000)}/>))}
        </div>
    );
}

export default Data;