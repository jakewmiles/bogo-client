const formatDate = (unix) => {
  unix = parseInt(unix)
  const now = new Date().toDateString().split(' ')
  const date = new Date(unix).toDateString().split(' ')
  console.log(now)
  console.log(date)
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  if(now[2] === date[2]) {
    console.log('same day')
    const date = new Date(parseInt(unix));
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2)
    return formattedTime
  }
  if(parseInt(now[2])-1 === parseInt(date[2])) return 'Yesterday'
  if (parseInt(now[2])>= parseInt(date[2]) || parseInt(date[2]) < parseInt(now[2])-7 ) return days[new Date(unix).getDay()]

  return (new Date(unix).toLocaleDateString('en-UK'))
}
// console.log(new Date())
console.log(formatDate("1625490041630"))