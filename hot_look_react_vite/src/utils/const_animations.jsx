export const TextAnimation = {
    hidden: {
        x: -150,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.4
        }
    })
}
export const GirlAnimation = {
    hidden: {
        x: 150,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: .6}
    }
}
export const BlobAnimate = {
    hidden:{
        x: -400,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: .9, duration: 1}
    }
}
export const WaveAnimation = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: .3, duration: 1}
    }
}
export const AnimationCard = {
    hidden: {
        y: -150,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}