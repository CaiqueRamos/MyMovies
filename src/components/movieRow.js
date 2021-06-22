import React,{useState}from 'react'
import "./movieRow.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0;
        }

        setScrollX(x);
    }

    return (
        <div>
            <div className="containerTitle">
                <h2>{title}</h2>
            </div>
            <div className="MovieT">
                

                <div className="moviRow--left" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon style={{fontSize: 50}}/>
                </div>
                
                <div className="moviRow--rigth" onClick={handleRightArrow}>
                    <NavigateNextIcon style={{fontSize: 50}}/>
                </div>            

                <div className="container">
                    <div className="destaque" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>
                    </div>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="card" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                        
                    )) }
                </div>
            </div>
        </div>
    )
}
