import { useParams } from "react-router-dom"

function ActivityList (){
  const { category } = useParams

  return (
<div>
  <h3>{ category }</h3>
</div>
  )
}

export default ActivityList
