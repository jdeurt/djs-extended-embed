module.exports = (title, imageURL, items, discord) => {
    let maxPages = (Number.isInteger(items.length/15)) ? (items.length/15) : (Math.ceil(items.length/15));
    let options = {
        title: title,
        footer: {
            icon_url: imageURL,
            text: "page 1 of " + maxPages
        },
        description: ""
    };
    let embeds = [];
    let amt = 0; //max 15 per page
    items.forEach(item => {
        options.description += item + "\n";
        amt++;
        if(amt == 15) {
            embeds.push(new discord.RichEmbed(options));
            options = {
                title: title,
                footer: {
                    icon_url: imageURL,
                    text: "page " + (embeds.length+1) + " of " + maxPages
                },
                description: ""
            };
            amt = 0;
        }
    });
    return embeds;
};
