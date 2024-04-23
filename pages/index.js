import MainSlider from "@/components/MainSlider"
import { Context } from "@/contextapi/Context"
import * as fetchRepo from "@/repository/fetchRepository"


export default function Home(props) {
  return (
    <>
      <Context.Provider value={{mainSliderImages: props.sliderImages}}>
        <MainSlider />
      </Context.Provider>
    </>
  )
}

export async function getStaticProps() {
  const mainSliderResponse = await fetchRepo.GET('public/mainSlider')
  const mainSliderImages = await mainSliderResponse.json()
  return {
    props: {
      sliderImages: mainSliderImages
    },
    revalidate: 5000
  }
}