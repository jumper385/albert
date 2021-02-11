export const randomEmoji = () => {
    let emojiList = '👨‍💻 🥰 🐶 ✅ 👏 🦁 📪 🏭 🐯 🤓 👐 👏 🫀 👨‍🔬'.split(' ');
    let index = Math.floor(Math.random()*emojiList.length);
    return emojiList[index];
}