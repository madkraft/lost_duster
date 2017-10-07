import { Observable } from "rxjs";

const baseUrl = "http://api.football-data.org/v1";
const headers = {
  headers: {
    "X-Auth-Token": "6361b22678c9489a837087e19ae65447"
  }
};

function fetchLeague(id) {
  const request = fetch(`${baseUrl}/competitions/${id}`, headers).then(res =>
    res.json()
  );
  return Observable.fromPromise(request);
}

export default {
  fetchLeague
};
