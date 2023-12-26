export const removeEmojis = (text: string) => {
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji}/gu;
    const cleanedText = text.replace(emojiRegex, "");

    return cleanedText.trim();
};
