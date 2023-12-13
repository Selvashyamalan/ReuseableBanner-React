// Write your code here.
import './index.css'

const BannerList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-desc">{description}</p>
        <button type="button" className="card-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerList
