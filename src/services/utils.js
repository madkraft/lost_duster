export function setLoadedLeagues(selectedLeagues, isLoaded) {
  return selectedLeagues.map(league => ({
    id: league,
    loaded: isLoaded
  }));
}

export function changeLoadedStatus(status, newId) {
  return status.map(league => {
    if (league.id === newId) {
      return {
        id: league.id,
        loaded: true
      };
    }
    return league;
  });
}
