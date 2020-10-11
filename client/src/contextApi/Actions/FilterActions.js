
export const filterByTeamAction = (allTeams, teamname) => {
  if (teamname === 'All') return allTeams
  let filteredTeam = allTeams.filter(team => team.club.indexOf(teamname) >=0)
  return filteredTeam
}

export const sortByPriceAction = (products, sortValue) => {
  let sortedTeams = products.sort((a, b) => 
    sortValue === 'highest' ? a.price < b.price ? 1 : -1 :
      sortValue === 'lowest' ? a.price > b.price ? 1 : -1 :
        a.club > b.club? 1 : -1
  )
  return sortedTeams
}