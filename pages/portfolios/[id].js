
import React from 'react'
import { useRouter } from 'next/router'


const PortfolioDetail = () => {

  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>I am detail page with ID: {id} </h1>
  )
}

// class PortfolioDetail extends React.Component {

//   static getInitialProps({query}) {
//     return {query};
//   }

//   render () {
//     debugger;
//     console.log(this.props);
//     const id = this.props.query;  
//     return(
//       <h1>I am detail page with ID: {id} </h1>
//     )
//   }
// }


export default PortfolioDetail;
