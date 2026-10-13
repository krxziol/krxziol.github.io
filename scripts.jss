// Windows 98-themed JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Simulate system startup sounds (visual only)
    const systemStartup = document.createElement('div');
    systemStartup.className = 'screen-flicker';
    systemStartup.style.position = 'absolute';
    systemStartup.style.zIndex = '-1';
    document.body.appendChild(systemStartup);
    
    // Simulate a system check that completes after a delay
    setTimeout(() => {
        const systemCheck = document.querySelector('.post:nth-child(1) .post-content');
        if (systemCheck) {
            systemCheck.innerHTML += '<p style="color: #00FFAA; font-style: italic;">[SYSTEM CHECK: ALL SYSTEMS GO]</p>';
        }
    }, 1000);
    
    // Simulate keyboard input with a typing effect
    const typingElements = document.querySelectorAll('.typewriter');
    typingElements.forEach(element => {
        const text = element.textContent;
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent = text.slice(0, i + 1);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    });
    
    // Add click effects to buttons that simulate DOS commands
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('C:\\> System command executed successfully!');
            
            // Simulate a system beep
            const beep = document.createElement('div');
            beep.className = 'cursor';
            beep.style.position = 'absolute';
            beep.style.top = '50%';
            beep.style.left = '50%';
            beep.style.zIndex = '1000';
            document.body.appendChild(beep);
            
            setTimeout(() => {
                document.body.removeChild(beep);
            }, 500);
        });
    });
    
    // Add a simple error simulation for one of the posts
    setTimeout(() => {
        const errorPost = document.querySelector('.post:nth-child(3)');
        if (errorPost) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = 'ERROR: SYSTEM CRASH DETECTED!';
            errorPost.appendChild(errorDiv);
        }
    }, 5000);
    
    // Add a loading bar animation for the first post
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    loadingBar.style.marginTop = '20px';
    document.querySelector('.post:nth-child(1)').appendChild(loadingBar);
});
