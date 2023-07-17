

interface StoryPhotoProps {
  urlImage: string
  keyId: string
}

export function StoryPhoto({keyId, urlImage}: StoryPhotoProps){
  return(
    <div key={keyId} className="story-photo">
      <img src={urlImage}/>
    </div>
  )
}