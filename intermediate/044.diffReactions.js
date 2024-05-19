function diffReactions(yesterdayReactions, todayReactions) {
    const differentReactions = [];

    // find out new reactions
    Object.entries(todayReactions).forEach(([userId, todayUserReactions]) => {
        const yesterdayUserReactions = yesterdayReactions[userId] || [];

        todayReactions.forEach((reaction) => {
            if (!yesterdayUserReactions.includes(reaction)) {
                differentReactions.push(
                    `${userId} reacted with ${reaction}`
                );
            }
        })
    })

    // find out removed reactions
    Object.entries(yesterdayReactions).forEach(([userId, yesterdayUserReactions]) => {
        const todayUserReactions = todayReactions[userId] || [];

        yesterdayReactions.forEach((reaction) => {
            if (!todayUserReactions.includes(reaction)) {
                differentReactions.push(
                    `${userId} removed their ${reaction}`
                );
            }
        })
    })

    return differentReactions;
}

export { diffReactions };
