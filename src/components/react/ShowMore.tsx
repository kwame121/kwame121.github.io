import React from 'react';
import type {CollectionEntry} from 'astro:content';
import Icon from 'astro-icon';

interface ShowMoreProps  {
    site:CollectionEntry<"showcase">
}

const ShowMore = ({site}:ShowMoreProps) => {
  const [expanded,setExpanded] = React.useState(true)
  const truncatedText = expanded?site?.data?.description: site?.data?.description?.split('').splice(0,80);
  return (
    <div className="flex flex-col mt-3" key={Math.random()}>
        <div className="text-secondary text-md lead font-extrabold">{site?.data?.title}</div>
        <div className="text-sm" onClick={()=>{console.log('clickeddd')}}>{truncatedText}
        {/* <button
      className="text-primary"
       onClick={()=>{console.log('clicked')}}
    >
      <span>{' '}Show More</span>
    </button> */}
    </div>
       
    </div>
  )
}

export default ShowMore