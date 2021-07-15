const token = process.env["TWITTER_BEARER_TOKEN"]

const fetchTweetsFromUser = async (screenName, count) => {
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=${count}`
  const headers = {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
  const response = await fetch(url, {headers})
  const tweets = await response.json()
  return tweets
}