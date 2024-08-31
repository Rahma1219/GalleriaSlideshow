
import "./Thumbnail.css";
import PaintingArtist from "../PaintingArtist/PaintingArtist";

function Thumbnail() {
  

  return (
    <>

      <div id="gallery">
        <div className="group">
          <PaintingArtist
            id={0}
            thumbnail="/images/starry-night/thumbnail.jpg"
            name="Starry Night"
            artist="Vincent Van Gogh"
          ></PaintingArtist>
          <PaintingArtist
            id={4}
            thumbnail="/images/the-storm-on-the-sea-of-galilee/thumbnail.jpg"
            name="The Storm on the Sea of Galilee"
            artist="Rembrandt"
          ></PaintingArtist>
          <PaintingArtist
            id={8}
            thumbnail="/images/lady-with-an-ermine/thumbnail.jpg"
            name="Lady with an Ermine"
            artist="Leonardo da Vinci"
          ></PaintingArtist>
          <PaintingArtist
            id={11}
            thumbnail="/images/the-boy-in-the-red-vest/thumbnail.jpg"
            name="The Boy in the Red Vest"
            artist="Paul Cézanne"
          ></PaintingArtist>
        </div>

        <div className="group">
          <PaintingArtist
            id={1}
            thumbnail="/images/girl-with-pearl-earring/thumbnail.jpg"
            name="Girl with a Pearl Earring"
            artist="Johannes Vermeer"
          ></PaintingArtist>
          <PaintingArtist
            id={5}
            thumbnail=
            "/images/the-great-wave-off-kanagawa/thumbnail.jpg"
            name="The Great Wave off Kanagawa"
            artist="Hokusai"
          ></PaintingArtist>
          <PaintingArtist
            id={9}
            thumbnail="/images/the-night-cafe/thumbnail.jpg"
            name="The Night Café"
            artist="Vincent Van Gogh"
          ></PaintingArtist>
          <PaintingArtist
            id={12}
            thumbnail="/images/arnolfini-portrait/thumbnail.jpg"
            name="Arnolfini Portrait"
            artist="Jan van Eyck"
          ></PaintingArtist>
        </div>


        <div className="group">
          <PaintingArtist
            id={2}
            thumbnail="/images/guernica/thumbnail.jpg"
            name="Guernica"
            artist="Pablo Picasso"
          ></PaintingArtist>
          <PaintingArtist
            id={6}
            thumbnail="/images/van-gogh-self-portrait/thumbnail.jpg"
            name="Van Gogh Self-portrait"
            artist="Vincent Van Gogh"
          ></PaintingArtist>
          <PaintingArtist
            id={13}
            thumbnail="/images/mona-lisa/thumbnail.jpg"
            name="Mona Lisa"
            artist="Leonardo da Vinci"
          ></PaintingArtist>

        </div>


        <div className="group">
          <PaintingArtist
            id={3}
            thumbnail="/images/penitent-magdalene/thumbnail.jpg"
            name="Penitent Magdalene"
            artist="Artemisia Gentileschi"
          ></PaintingArtist>
          <PaintingArtist
            id={7}
            thumbnail="/images/the-sleeping-gypsy/thumbnail.jpg"
            name="The Sleeping Gypsy"
            artist="Henri Rousseau"
          ></PaintingArtist>
          <PaintingArtist
            id={10}
            thumbnail="/images/the-basket-of-apples/thumbnail.jpg"
            name="The Basket of Apples"
            artist="Paul Cézanne"
          ></PaintingArtist>
          <PaintingArtist
            id={14}
            thumbnail="/images/the-swing/thumbnail.jpg"
            name="The Swing"
            artist="Jean-Honoré Fragonard"
          ></PaintingArtist>
        </div>
      </div >

    </>
  );
}
export default Thumbnail;
