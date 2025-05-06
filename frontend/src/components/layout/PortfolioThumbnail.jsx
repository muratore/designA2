import { Link } from "react-router-dom"

function PortfolioThumbnail({to, imgUrl, children}) {
  return (
    <div className="border-2 border-red-600">
    <Link
    to={to}
    style={{backgroundImage: `url(${imgUrl})`}}
    className={`
         bg-green-500 
         w-[500px]
         h-[300px]
        flex
        bg-center
        bg-cover
        
        `}
    >
      {children}
    </Link>
    </div>
  )
}

export default PortfolioThumbnail
