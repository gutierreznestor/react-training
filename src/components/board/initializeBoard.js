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
    let code = 0;
    const board = icons.reduce((acc, icon) => {
        let item = {icon, code, disabled: false, isFlipped: false, match: false};
        acc.push(item);
        code++;
        acc.push({...item, code});
        code++;
        return acc;
    }, []);

    // Shuffle array
    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }
    return board;
}