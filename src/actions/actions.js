//actions
const SHORT_EVENT = "SHORT_EVENT"
const MENU_TRIGGER = "MENU_TRIGGER"
const GAME_OVER = "GAME_OVER"
//action creators
const short = (timing) => ({
    "event":SHORT_EVENT,
    "payload":{
        "timing": timing, 
    }
})
const over = () => ({
    "event": GAME_OVER, 
})
const menu = () => ({
    "event": MENU_TRIGGER
})