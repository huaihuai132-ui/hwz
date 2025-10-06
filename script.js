// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initCounters();
    initParticles();
    initMusicPlayer();
    initScrollAnimations();
    initPhotoGallery();
    
    // 添加页面加载动画
    document.body.classList.add('fade-in');
});

// 计算相识天数和生日倒计时
function initCounters() {
    // 相识日期：2025年5月27日
    const meetingDate = new Date('2025-05-27');
    
    // 更新相识天数
    function updateDaysTogether() {
        const today = new Date();
        const timeDiff = today.getTime() - meetingDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        const daysElement = document.getElementById('days-together');
        if (daysElement) {
            // 添加数字滚动效果
            animateNumber(daysElement, daysDiff);
        }
    }
    
    // 计算下一个生日倒计时
    function updateBirthdayCountdown() {
        const today = new Date();
        const currentYear = today.getFullYear();
        
        // 华文昭生日：6月25日
        let hwzBirthday = new Date(currentYear, 5, 25); // 月份从0开始，所以5代表6月
        if (hwzBirthday < today) {
            hwzBirthday = new Date(currentYear + 1, 5, 25);
        }
        
        // 我的生日：11月25日
        let myBirthday = new Date(currentYear, 10, 25); // 10代表11月
        if (myBirthday < today) {
            myBirthday = new Date(currentYear + 1, 10, 25);
        }
        
        // 计算距离华文昭生日的天数
        const hwzTimeDiff = hwzBirthday.getTime() - today.getTime();
        const hwzDaysDiff = Math.ceil(hwzTimeDiff / (1000 * 3600 * 24));
        
        // 计算距离我生日的天数
        const myTimeDiff = myBirthday.getTime() - today.getTime();
        const myDaysDiff = Math.ceil(myTimeDiff / (1000 * 3600 * 24));
        
        // 更新显示
        const hwzElement = document.getElementById('hwz-birthday-countdown');
        const myElement = document.getElementById('my-birthday-countdown');
        
        if (hwzElement) {
            animateNumber(hwzElement, hwzDaysDiff);
        }
        
        if (myElement) {
            animateNumber(myElement, myDaysDiff);
        }
    }
    
    // 数字动画效果
    function animateNumber(element, targetNumber) {
        const currentNumber = parseInt(element.textContent) || 0;
        const increment = targetNumber > currentNumber ? 1 : -1;
        const duration = 1000; // 1秒
        const steps = Math.abs(targetNumber - currentNumber);
        const stepDuration = steps > 0 ? duration / steps : 0;
        
        let current = currentNumber;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            
            if (current === targetNumber) {
                clearInterval(timer);
            }
        }, stepDuration);
    }
    
    // 初始更新
    updateDaysTogether();
    updateBirthdayCountdown();
    
    // 每天更新一次
    setInterval(() => {
        updateDaysTogether();
        updateBirthdayCountdown();
    }, 24 * 60 * 60 * 1000);
    
    // 每小时更新一次（为了更准确的倒计时）
    setInterval(updateBirthdayCountdown, 60 * 60 * 1000);
}

// 创建粒子效果
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    // 创建浮动的心形粒子
    function createHeartParticle() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '-1';
        
        // 随机选择心形emoji
        const hearts = ['💖', '💕', '💗', '💝', '💘', '❤️', '💙', '💜'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        particlesContainer.appendChild(heart);
        
        // 动画效果
        const duration = Math.random() * 3000 + 2000; // 2-5秒
        const horizontalMovement = (Math.random() - 0.5) * 200; // -100px到100px
        
        heart.animate([
            { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: heart.style.opacity },
            { transform: `translateY(-${window.innerHeight + 100}px) translateX(${horizontalMovement}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => {
            heart.remove();
        };
    }
    
    // 定期创建粒子
    setInterval(createHeartParticle, 2000);
    
    // 初始创建一些粒子
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeartParticle, i * 400);
    }
}

// 音乐播放器功能
function initMusicPlayer() {
    const playBtn = document.getElementById('play-btn');
    const songTitle = document.querySelector('.song-title');
    
    let isPlaying = false;
    let audioContext;
    let oscillator;
    
    playBtn.addEventListener('click', function() {
        if (!isPlaying) {
            // 播放简单的浪漫旋律
            playRomanticMelody();
            playBtn.textContent = '⏸️';
            songTitle.textContent = '正在播放浪漫旋律...';
            isPlaying = true;
            
            // 添加彩虹效果
            playBtn.classList.add('rainbow-effect');
        } else {
            // 停止播放
            stopMusic();
            playBtn.textContent = '▶️';
            songTitle.textContent = '点击播放浪漫音乐';
            isPlaying = false;
            
            // 移除彩虹效果
            playBtn.classList.remove('rainbow-effect');
        }
    });
    
    function playRomanticMelody() {
        // 创建音频上下文
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 简单的旋律音符（频率）
        const melody = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50]; // C5到C6
        let noteIndex = 0;
        
        function playNote() {
            if (!isPlaying) return;
            
            // 创建振荡器
            oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // 连接节点
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // 设置音符
            oscillator.frequency.setValueAtTime(melody[noteIndex % melody.length], audioContext.currentTime);
            oscillator.type = 'sine';
            
            // 设置音量包络
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
            
            // 播放音符
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);
            
            noteIndex++;
            
            // 下一个音符
            if (isPlaying) {
                setTimeout(playNote, 800);
            }
        }
        
        playNote();
    }
    
    function stopMusic() {
        isPlaying = false;
        if (oscillator) {
            oscillator.stop();
        }
        if (audioContext) {
            audioContext.close();
        }
    }
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察时间轴项目
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // 观察其他元素
    document.querySelectorAll('.declaration-card, .photo-placeholder').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// 照片墙交互
function initPhotoGallery() {
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach((placeholder, index) => {
        placeholder.addEventListener('click', function() {
            // 创建点击效果
            createClickEffect(this);
            
            // 显示消息
            showPhotoMessage(index);
        });
        
        // 鼠标悬停效果
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    function createClickEffect(element) {
        // 创建点击波纹效果
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 154, 158, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    function showPhotoMessage(index) {
        const messages = [
            '这里可以放你们第一次见面的照片 📸',
            '记录第一次送花的美好时刻 🌹',
            '一起庆祝生日的甜蜜回忆 🎂',
            '看日出时的浪漫瞬间 🌅',
            '一起看电影的温馨时光 🎬',
            '共享美食的快乐时刻 🍕'
        ];
        
        // 创建临时消息提示
        const messageDiv = document.createElement('div');
        messageDiv.textContent = messages[index];
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'rgba(255, 154, 158, 0.95)';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '20px 30px';
        messageDiv.style.borderRadius = '25px';
        messageDiv.style.fontSize = '1.2rem';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.zIndex = '1000';
        messageDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        messageDiv.style.animation = 'fadeIn 0.3s ease';
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }, 2000);
    }
}

// 添加一些额外的CSS动画
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;

// 将额外样式添加到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// 添加一些特殊的节日效果
function checkSpecialDates() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    // 检查是否是特殊日期
    if (month === 6 && day === 25) {
        // 华文昭生日
        addBirthdayEffects('华文昭生日快乐！🎂');
    } else if (month === 11 && day === 25) {
        // 我的生日
        addBirthdayEffects('生日快乐！🎉');
    } else if (month === 5 && day === 27) {
        // 相识纪念日
        addAnniversaryEffects();
    }
}

function addBirthdayEffects(message) {
    // 创建生日祝福弹窗
    const birthdayModal = document.createElement('div');
    birthdayModal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 50px; border-radius: 20px; text-align: center; max-width: 500px;">
                <h2 style="color: #ff6b9d; font-size: 2.5rem; margin-bottom: 20px;">${message}</h2>
                <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">愿这特殊的日子充满欢声笑语！</p>
                <button onclick="this.parentElement.parentElement.remove()" style="background: linear-gradient(45deg, #ff9a9e, #fecfef); border: none; padding: 15px 30px; border-radius: 25px; color: white; font-size: 1.1rem; cursor: pointer;">谢谢！❤️</button>
            </div>
        </div>
    `;
    document.body.appendChild(birthdayModal);
    
    // 添加更多生日粒子效果
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createBirthdayParticle();
        }, i * 100);
    }
}

function addAnniversaryEffects() {
    // 相识纪念日特效
    const anniversaryMessage = document.createElement('div');
    anniversaryMessage.innerHTML = '🎊 今天是我们相识的纪念日！🎊';
    anniversaryMessage.style.position = 'fixed';
    anniversaryMessage.style.top = '20px';
    anniversaryMessage.style.left = '50%';
    anniversaryMessage.style.transform = 'translateX(-50%)';
    anniversaryMessage.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
    anniversaryMessage.style.color = 'white';
    anniversaryMessage.style.padding = '15px 30px';
    anniversaryMessage.style.borderRadius = '25px';
    anniversaryMessage.style.fontSize = '1.2rem';
    anniversaryMessage.style.fontWeight = 'bold';
    anniversaryMessage.style.zIndex = '1000';
    anniversaryMessage.style.animation = 'bounce 2s ease-in-out infinite';
    
    document.body.appendChild(anniversaryMessage);
    
    // 5秒后自动消失
    setTimeout(() => {
        anniversaryMessage.remove();
    }, 5000);
}

function createBirthdayParticle() {
    const particle = document.createElement('div');
    particle.innerHTML = '🎉';
    particle.style.position = 'fixed';
    particle.style.fontSize = Math.random() * 30 + 20 + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-50px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const horizontalMovement = (Math.random() - 0.5) * 300;
    
    particle.animate([
        { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px) translateX(${horizontalMovement}px) rotate(720deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

// 页面加载时检查特殊日期
checkSpecialDates();