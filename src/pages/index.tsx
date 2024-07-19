import Head from "next/head";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';



const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ textAlign: 'center' }}>This is Dragable Carousel</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
