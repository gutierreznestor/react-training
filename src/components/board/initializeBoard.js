const icons = [
    'fas fa-paper-plane',
    'fas fa-gift',
    'fas fa-glass-cheers',
    'fas fa-snowman',
    'fas fa-sleigh',
    'fas fa-sun',
    'fas fa-wifi',
    'fas fa-cookie-bite',
    'fas fa-truck',
    'fas fa-user-secret'];

export const initializeBoard = () => {
    let index = 0;
    const board = icons.reduce((acc, icon) => {
        acc.push({icon, index});
        index++;
        acc.push({icon, index});
        index++;
        return acc;
    }, []);
    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }
    return board;
}