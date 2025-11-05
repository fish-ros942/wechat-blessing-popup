// 热门祝福语列表（可自定义修改）
const blessings = [
    "新年快乐，龙年大吉 🐉",
    "身体健康，平安喜乐 🧧",
    "财源滚滚，暴富暴美 💰",
    "事业高升，前程似锦 🚀",
    "家庭和睦，幸福美满 👨‍👩‍👧‍👦",
    "万事顺意，心想事成 ✨",
    "好运连连，福气满满 🍀",
    "笑口常开，青春永驻 😄",
    "学业有成，金榜题名 📚",
    "平安喜乐，万事胜意 🎉"
];

// 窗口颜色列表
const colors = [
    "#ff9a9e", "#fad0c4", "#fbc2eb", "#a1c4fd",
    "#c2e9fb", "#ffecd2", "#f0f8fb", "#e8f4f8",
    "#fdf2f8", "#f5fafe"
];

// 生成随机位置、大小、颜色的祝福窗口
function createBlessingWindows() {
    const container = document.querySelector('.windows-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    blessings.forEach((blessing, index) => {
        // 创建窗口元素
        const window = document.createElement('div');
        window.className = 'blessing-window';
        window.textContent = blessing;

        // 随机位置（避免超出屏幕）
        const randomX = Math.random() * (containerWidth - 150);
        const randomY = Math.random() * (containerHeight - 100);

        // 随机大小
        const randomWidth = 100 + Math.random() * 80;
        const randomHeight = 80 + Math.random() * 50;

        // 随机颜色和动画延迟
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomDelay = Math.random() * 3;

        // 设置样式
        window.style.left = `${randomX}px`;
        window.style.top = `${randomY}px`;
        window.style.width = `${randomWidth}px`;
        window.style.height = `${randomHeight}px`;
        window.style.backgroundColor = randomColor;
        window.style.animationDelay = `${randomDelay}s`;

        // 点击窗口弹出烟花效果（可选增强）
        window.addEventListener('click', () => {
            alert(blessing);
            // 如需烟花效果，可引入烟花库（如 fireworks.js）
        });

        container.appendChild(window);
    });
}

// 页面加载完成后生成窗口
window.addEventListener('load', createBlessingWindows);