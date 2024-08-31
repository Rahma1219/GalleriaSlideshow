
import { useParams } from "react-router-dom"
import { Data } from "../../../Data/Data"
import './Artist.css'
import { useState } from "react"
import iconviewimg from '../../../public/images/shared/icon-view-image.svg'


function Artist() {

   const id = useParams().Data
   const alldata = Data[id]
   const itemToSearch = alldata.name.split(' ').join('_')

   const [viewImage, setViewImage] = useState(false)



   return (

      <>


         <section className="artist">
            <div className={viewImage ? "overlay" : "overlayhidden"}>
               <div className={viewImage ? "fullimage" : "fullimagehidden"}>
                  <button onClick={() => setViewImage(false)}>close</button>
                  <div id="btnclose">
                     <img src={alldata.images.gallery} />

                  </div>

               </div>
               <div className="artist">
                  <div className="artistimg">
                     <div className="imagecontainer">
                        <div className="mainimg">
                           <div id="img">
                              <img src={alldata.images.hero.large} alt="" id="herolarge" />

                              <div id="btnviewimg" onClick={() => setViewImage(true)}>
                                 <div>
                                    <img src={iconviewimg} alt="" />
                                 </div>
                                 <p>VIEW IMAGE</p>
                              </div>

                           </div>

                        </div>

                        <div id="title">
                           <h1>{alldata.name}</h1>
                           <p>{alldata.artist.name}</p>
                        </div>

                        <div id="artistimg">
                           <img src={alldata.artist.image} alt="" />
                        </div>
                     </div>

                     <div className="Text">
                        <h1>{alldata.year}</h1>
                        <p>{alldata.description}</p>
                        <a
                           href={`https://en.wikipedia.org/wiki/${itemToSearch}`}
                           target="_blank"
                           rel="noreferrer"
                        >
                           Go to source
                        </a>
                     </div>

                  </div>
               </div>


            </div>


         </section>



      </>


   )
}
export default Artist