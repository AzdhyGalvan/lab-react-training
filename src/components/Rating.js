function Rating(props){

  const rate = Math.round(props.children)

    if(rate === 0 ){
      return (
        <p>✰✰✰✰✰</p>
      )
    }
    else if (rate ===1){
      return(
        <p>★✰✰✰✰</p>
      )
    }
    else if (rate ===2){
      return(
        <p>★★✰✰✰</p>
      )
    }
    else if (rate ===3){
      return(
        <p>★★★✰✰</p>
      )
    }
    else if ( rate === 4){
      return(
        <p>★★★★✰</p>
      )
    }
    else if (rate === 5){
      return(
        <p>★★★★★</p>
      )
    }
}
export default Rating;