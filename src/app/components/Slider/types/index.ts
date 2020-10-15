export type SliderState = {
    curSlideNumber: number,
    slidesAmount: number,
    infinite: boolean,
    slidesInGroup: number,
    typeOfLastSlideSwitch: string
}
export type Action = {
    type: string,
    body?: any
}
export type SlideData = {
    key: string,
    children?: JSX.Element
}