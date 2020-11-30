

const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: 'Job in Webonise',
      company: 'Webonise',
      companyWebsite: 'https://www.webonise.com/',
      location: 'Pune, Maharashtra',
      jobTitle: 'Solutions Architect',
      description: 'Head responsibility for ongoing suggestions and best practices for entire storage and application architecture solutions backup, recovery, high availability and archiving. Perform with sales personnel on every customer visit to converse requirements as well as perform demonstrations.',
      startDate: '07/2019',
      endDate: 'Present'
    },
    {
      _id: "da789ad1",
      title: 'Job in Webonise',
      company: 'Webonise',
      companyWebsite: 'https://www.webonise.com/',
      location: 'Pune, Maharashtra',
      jobTitle: 'Technical Lead',
      description: 'Researches, designs & implements scalable architecture and applications; Directs software design & development as well as directs and assists DevOps in developing automated deployment solutions',
      startDate: '07/2014',
      endDate: '07/2019'
    },
    {
      _id: "sadcxv9",
      title: 'Job in Webonise',
      company: 'Webonise',
      companyWebsite: 'https://www.webonise.com/',
      location: 'Pune, Maharashtra',
      jobTitle: 'Sr. Software Developer',
      description: 'Wrote maintainable & extensible code in teams with Test Driven approach; Oversaw software system enhancements. Built, tested & deployed scalable, highly available and modular software products. Stored, retrieved & manipulated data for close analysis of system capabilities',
      startDate: '12/2012',
      endDate: '06/2014'
    },
    {
      _id: "samxv9",
      title: 'Job in Aloha',
      company: 'Aloha Technology Pvt. Ltd.',
      companyWebsite: 'https://www.alohatechnology.com/',
      location: 'Pune, Maharashtra',
      jobTitle: 'Sr. Software Developer',
      description: 'Modified existing software to correct errors, upgrade interfaces & improve performance. Collaborated with teammates & Business Analysts to enhance supportability & identify performance bottlenecks',
      startDate: '09/2010',
      endDate: '12/2012'
    }    
  ]
}

exports.portfolioResolvers = {
  hello: () => {
    return 'Hello World!'
  },
  portfolio: ({id}) => {
    const portfolio  = data.portfolios.find(p => p._id === id)
    return portfolio
  },
  portfolios: () => {
    return data.portfolios
  },
  portfoliosWithLimit: ({limit}) => {
    limit = limit ? limit : portfolios.length
    return data.portfolios.slice(0, limit)
  }   
}
