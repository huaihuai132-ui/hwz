/* 全局样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans SC', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* 背景粒子效果 */
#particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
}

#particles::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

/* 主容器 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* 标题区域 */
.hero-section {
    text-align: center;
    padding: 80px 0;
    position: relative;
}

.floating-hearts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.heart {
    position: absolute;
    font-size: 2rem;
    animation: heartFloat 6s ease-in-out infinite;
    opacity: 0.7;
}

.heart:nth-child(1) { left: 10%; animation-delay: 0s; }
.heart:nth-child(2) { left: 20%; animation-delay: 1s; }
.heart:nth-child(3) { left: 70%; animation-delay: 2s; }
.heart:nth-child(4) { left: 80%; animation-delay: 3s; }
.heart:nth-child(5) { left: 50%; animation-delay: 4s; }

@keyframes heartFloat {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-30px) scale(1.1); }
}

.main-title {
    font-family: 'Dancing Script', cursive;
    font-size: 4rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    margin-bottom: 20px;
    animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
    from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5); }
    to { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.8); }
}

.subtitle {
    font-size: 1.5rem;
    color: rgba(255,255,255,0.9);
    font-weight: 300;
}

/* 时间轴样式 */
.timeline-section {
    padding: 80px 0;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, #ff9a9e, #fecfef);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
}

.timeline-item {
    padding: 20px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    animation: slideIn 1s ease-out;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background: linear-gradient(45deg, #ff9a9e, #fecfef);
    border: 3px solid #fff;
    top: 30px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px rgba(255,154,158,0.5);
}

.left {
    left: 0;
}

.right {
    left: 50%;
}

.right::after {
    left: -10px;
}

.timeline-content {
    padding: 30px;
    background: rgba(255,255,255,0.95);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.date {
    color: #ff6b9d;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 10px;
}

.timeline-content h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.timeline-content p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.days-counter, .birthday-countdown {
    background: linear-gradient(45deg, #ff9a9e, #fecfef);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    display: inline-block;
    font-weight: bold;
    box-shadow: 0 5px 15px rgba(255,154,158,0.3);
}

.counter-number {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 5px;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
}

/* 爱情宣言区域 */
.love-declaration {
    padding: 80px 0;
    text-align: center;
}

.declaration-card {
    background: rgba(255,255,255,0.95);
    border-radius: 30px;
    padding: 50px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.declaration-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,154,158,0.1), transparent);
    animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.declaration-card h2 {
    color: #ff6b9d;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-family: 'Dancing Script', cursive;
}

.love-text {
    position: relative;
    z-index: 1;
}

.love-text p {
    color: #333;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1.1rem;
    animation: fadeInUp 1s ease-out;
}

.signature {
    font-style: italic;
    color: #ff6b9d;
    font-weight: bold;
    margin-top: 30px !important;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* 照片墙区域 */
.photo-gallery {
    padding: 80px 0;
    text-align: center;
}

.photo-gallery h2 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-family: 'Dancing Script', cursive;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.photo-placeholder {
    background: rgba(255,255,255,0.9);
    border-radius: 15px;
    padding: 40px 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.photo-placeholder::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,154,158,0.2), transparent);
    transition: left 0.5s ease;
}

.photo-placeholder:hover::before {
    left: 100%;
}

.photo-placeholder:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.photo-placeholder span {
    font-size: 3rem;
    display: block;
    margin-bottom: 15px;
}

.photo-placeholder p {
    color: #666;
    font-weight: bold;
}

/* 音乐播放器 */
.music-player {
    padding: 60px 0;
    text-align: center;
}

.player-card {
    background: rgba(255,255,255,0.95);
    border-radius: 20px;
    padding: 30px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
}

.player-card h3 {
    color: #ff6b9d;
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.player-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.play-button {
    background: linear-gradient(45deg, #ff9a9e, #fecfef);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(255,154,158,0.3);
}

.play-button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(255,154,158,0.5);
}

.song-title {
    color: #666;
    font-weight: bold;
}

/* 页脚 */
.footer {
    text-align: center;
    padding: 60px 0;
    color: rgba(255,255,255,0.9);
}

.footer p {
    margin-bottom: 10px;
    font-size: 1.1rem;
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
    .main-title {
        font-size: 2.5rem;
    }
    
    .timeline::after {
        left: 20px;
    }
    
    .timeline-item {
        width: 100%;
        padding-left: 50px;
        padding-right: 20px;
    }
    
    .timeline-item::after {
        left: 10px;
    }
    
    .right {
        left: 0%;
    }
    
    .declaration-card {
        padding: 30px 20px;
    }
    
    .photo-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }
    
    .container {
        padding: 10px;
    }
}

/* 特殊动画效果 */
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.rainbow-effect {
    animation: rainbow 3s linear infinite;
}

/* 加载动画 */
.fade-in {
    animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
