
import axios from 'axios'
import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link'

const fetchPortfoliosWithLimit = () => {
  const query = `
  query PortfoliosWithLimit {
    portfoliosWithLimit(limit: 3) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    } 
  }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfoliosWithLimit)
}

const Home = ({ portfoliosWithLimit }) => (
  <>
    {/* HOME PAGE STARTS */}
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Portfolios</h1>
        </div>
      </div>
    </section>
    <section className="pb-5">
      <div className="row">
        {portfoliosWithLimit.map(portfolio =>
          <div key={portfolio._id} className="col-md-4">
            <Link href={`/portfolios/${portfolio._id}`}>
              <a className="card-link">
                <PortfolioCard portfolio={portfolio} />
              </a>
            </Link>
          </div>
        )
        }
      </div>
    </section>
    <Link href='/portfolios'>
      <a className="btn btn-main bg-blue ttu"> See More Portfolios </a>
    </Link>
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Ask Me</h1>
        </div>
      </div>
    </section>
    <section className="pb-5">
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <div className="avatar-container my-2">
            <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
            <span className="avatar-title">Hrishikesh Raverkar</span>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <div className="avatar-container my-2">
            <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
            <span className="avatar-title">Hrishikesh Raverkar</span>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <div className="avatar-container my-2">
            <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
            <span className="avatar-title">Hrishikesh Raverkar</span>
          </div>
        </a>
      </div>
    </section>
    <a href="" className="btn btn-main bg-blue ttu">See More Posts</a>
    {/* HOME PAGE ENDS */}

    {/* REPLIER STARTS */}
    {/* <div className='reply-controls is-open'> */}
    <div className='reply-controls'>
      <div className="reply-area">
        <div className="reply-to">
          Reply To: <span className="text ml-2">User1</span>
        </div>
        <div className="hr-editor-input">
          <input
            name="title"
            placeholder="Topic title"
            type="text"></input>
        </div>
        <div className="hr-editor">
          <div className="hr-editor-textarea-wrapper">
            <textarea
              name="content"
              placeholder="Type here">
            </textarea>
          </div>
          <div className="hr-editor-preview-wrapper">
            <div className="preview">
              <p></p>
            </div>
          </div>
        </div>
        <div className="submit-area">
          <div className="send mr-auto">
            <button
              href="#"
              className="btn btn-main bg-blue py-2 ttu">Reply</button>
            <a className="btn py-2 ttu gray-10">Cancel</a>
          </div>
          <div>
            <a className="btn py-2 ttu gray-10">hide preview</a>
          </div>
        </div>
      </div>
    </div>
    {/* REPLIER ENDS */}
  </>
)

Home.getInitialProps = async () => {
  const portfoliosWithLimit = await fetchPortfoliosWithLimit();
  return { portfoliosWithLimit };
}

export default Home
