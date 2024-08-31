import { useContext } from "react";
import SlideshowContext from "../SlideshowContext/SlideshowContext";
import "./PaintingArtist.css";
import { Link } from "react-router-dom";


function PaintingArtist(props) {
  const { setOpen } = useContext(SlideshowContext)
  
  return (
    <>
    <Link to={`/artist/${props.id}`} >
    <section className="painting" onClick={() => setOpen(true)}>
        <div className="gradient"></div>
        <img src={props.thumbnail} alt="" id="img" />
        <div className="paintingdata">
          <h2>{props.name} </h2>
          <p>{props.artist}</p>
        </div>
      </section>
    </Link>
     
    </>
  );
}
export default PaintingArtist;
