const { gql, default: request } = require("graphql-request")

const MASTER_URL=`https://api-ap-south-1.hygraph.com/v2/clto0em2w0ec207v0lqte4c4z/master`

const getCategory  = async()=>{
const query =gql`
query Category {
    categories {
      bgcolor {
        hex
      }
      id
      name
      icon {
        url
      }
    }
  }
`
const result = await request(MASTER_URL,query);
return result;

}

const getAllBusinessList=async()=>{
  const query = gql`
  query BusinessList {
    businessLists {
      about
      address
      category {
        name
      }
      contactPerson
      email
      images {
        url
      }
      id
      name
    }
  }
  `
  const result = await request(MASTER_URL,query);
  return result;
}

const getBusinessbyCAtegory=async(category)=>{
  const query  = await gql`
  query MyQuery {
    businessLists(where: {category: 
        {name: "`+category+`"}}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `
  const result =await request(MASTER_URL,query);
  return result;
}
const getBookingHistory=async()=>{
  const query = gql`

  `
  const result = await request(MASTER_URL,query);
  return result;
}
export default {getCategory,getAllBusinessList,getBusinessbyCAtegory}; 