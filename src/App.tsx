
import './App.css'
import { StoryPhoto } from './components/StoryPhoto'
import imageOne from './assets/img-one.avif'
import imageTwo from './assets/img-two.jpeg'
import imageThree from './assets/img-three.jpeg'
import imageFour from './assets/img-four.jpeg'
import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'

function App() {
  const [isVisible, setIsIntersecting] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
        const isVisible = window.scrollY > 100 ? false : true
        setIsIntersecting(isVisible);
      }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <header>
        <section className={` ${!isVisible ? 'header-reduced' : 'header-extend' } `} aria-label='story-default'>
        <StoryPhoto keyId='1' urlImage={imageOne}/>
        <StoryPhoto keyId='2' urlImage={imageTwo}/>
        <StoryPhoto keyId='3' urlImage={imageThree}/>
        {isVisible ? (
          <>
          <StoryPhoto keyId='4' urlImage={imageFour}/>
          <StoryPhoto keyId='5' urlImage={imageOne}/>
          </>
        ) : (
          <ChevronRight color='#616161' />
        )}
        </section>
       
      </header>
    </main>
      )
}

export default App
