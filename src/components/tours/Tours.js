import './Tours.css';
import TourFile from './tour/Tour';
const arr = [
    {title:'Best Of Paris In 7 Days Tour',price:'$1,995',text:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ",imgUrl:"https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"},

    {title:'Best Of Ireland In 14 Days Tour',price:'$3,895',text:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D",imgUrl:"https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg"},

    {title:'Best Of Salzburg & Vienna In 8 Days Tour',price:'$2,695',text:"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th.",imgUrl:"https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg"},

    {title:'Best Of Rome In 7 Days Tour',price:'$2,095',text:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ",imgUrl:"https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg"},

    {title:'Best Of Poland In 10 Days Tour',price:'$2,595',text:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y",imgUrl:"https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg"},
]
function TourApp() {
    return(
        <div className='main-container'>
            <div className='header'>
                <h2>Our Tours</h2>
                <div className='under-line'></div>
            </div>
            <div>
            {arr.map((item)=>{
                    return <TourFile data={item}/>
                })} 
            </div>
        </div>

    )
}
export default TourApp;