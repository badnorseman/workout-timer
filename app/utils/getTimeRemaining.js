export default function getTimeRemaining(end) {
  let t = Date.parse(end) - Date.parse(new Date())
  let seconds = Math.floor( (t/1000) % 60 )
  let minutes = Math.floor( (t/1000/60) % 60 )
  let hours = Math.floor( (t/(1000 * 60 * 60)) % 24 )
  return {
    'remaining': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}
