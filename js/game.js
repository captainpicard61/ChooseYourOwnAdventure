// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Mission Impossible Theme Tune.mp3",
    background_image: "AvengerCell.webp",
    levels: {

        start: {
            message: "You've been  tied upside down  in an off-site  F.I.S prison facility 10 stories below ground for 10 months ",
            choices: [
                {
                    text: "Go with security to torture questioning by the F.I.S Director ",
                    nextLevel: "corridor",
                },

                {
                    text: "Shimee Up the Pole ",
                    nextLevel: "prisoncell",
                },
            ]
        },

        prisoncell: {
            background_image: "",
            music: "tormented-soul-1m45s.mp3",
            message: "You hide behind the Prison Door",
            choices: [
                {
                    text: "You Hide Behind The Prison Door ",
                    nextLevel: "Heading to Security Office",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
