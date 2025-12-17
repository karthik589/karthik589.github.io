// Resume Data from User
const resumeData = {
    memory: {
        title: "Experience",
        content: `
            <div class="resume-section">
                <h3>CGI Information Systems, Hyderabad</h3>
                <p class="role-title"><strong>Software Engineer (2023 – Present) | Project: FXSuite360</strong></p>
                
                <h4>Message Development</h4>
                <ul>
                    <li>Designed and implemented ISO 20022 message formats including PACS (Payment, Clearing & Settlement), PAIN (Payment Initiation), CAMT (Cash Management), and FXTR (Foreign Exchange Trade Confirmation) to enable end-to-end payment processing and reporting.</li>
                    <li>Ensured compliance with ISO 20022 standards and optimized message structures for interoperability across multiple financial systems.</li>
                </ul>

                <h4>Data Restructuring & Management</h4>
                <ul>
                    <li>Transformed unstructured financial data into hybrid structured formats for efficient parsing, validation, and integration with downstream systems.</li>
                    <li>Managed structured data via GUI-based tools and applied advanced formatting techniques to ensure compatibility with SWIFT MT messages.</li>
                    <li>Implemented data validation and enrichment processes, improving data integrity, accessibility, and reporting accuracy while reducing processing errors.</li>
                </ul>

                <h4>Message Generation & SWIFT Integration</h4>
                <ul>
                    <li>Oversaw the co-existence phase of ISO 20022 migration, generating both MX (ISO 20022) and MT (SWIFT) messages to ensure seamless transition and backward compatibility.</li>
                    <li>Automated message generation workflows to minimize manual intervention and improve operational efficiency.</li>
                    <li>Integrated with the SWIFT network for handling ACK/NACK responses, monitoring message statuses, and processing incoming messages.</li>
                    <li>Implemented SWIFT GPI (Global Payments Innovation) for real-time payment tracking, enhancing transparency and client satisfaction.</li>
                </ul>

                <h4>Client Collaboration & Delivery</h4>
                <ul>
                    <li>Delivered customized payment solutions for major clients including PNC, Vantage, Wintrust, Whitney, Frost, and UMB, aligning with their unique business requirements.</li>
                    <li>Acted as a key liaison between development teams and clients, ensuring timely delivery of updates while maintaining compliance standards.</li>
                    <li>Streamlined development processes across multiple teams to ensure on-time project delivery and efficient update deployment.</li>
                </ul>

                <hr class="separator">

                <p class="role-title"><strong>Associate Software Engineer (2022 – 2023)</strong></p>
                
                <h4>Crystal Report Development</h4>
                <ul>
                    <li>Designed, developed, and customized Crystal Reports to deliver real-time financial insights for enterprise clients.</li>
                    <li>Implemented parameterized reports, data grouping, conditional formatting, and optimized SQL queries to enhance usability and reduce report generation time.</li>
                    <li>Improved report performance by streamlining data fetch logic and minimizing load times.</li>
                </ul>

                <h4>Client Portal UI Branding & Customization</h4>
                <ul>
                    <li>Led branding and UI customization for client portal applications, ensuring alignment with corporate guidelines and enhancing user experience.</li>
                    <li>Utilized HTML, CSS, and basic Java customizations to create responsive and visually consistent portal interfaces.</li>
                    <li>Improved user engagement through responsive design and personalized branding components.</li>
                </ul>

                <h4>SQL & Java Backend Development</h4>
                <ul>
                    <li>Designed and optimized complex SQL queries for data retrieval, aggregation, and transformation across financial modules.</li>
                    <li>Developed Java-based backend components supporting business logic, data integration, and report generation.</li>
                    <li>Implemented robust error handling, logging, and performance tuning to improve system reliability and scalability.</li>
                </ul>

                <hr class="separator">

                <h3>Capgemini Technology Services, Hyderabad</h3>
                <p class="role-title"><strong>Associate Software Engineer (May 2021 – July 2022) | Client: UWT-DC</strong></p>
                <ul>
                    <li>Designed and structured responsive web pages using HTML, CSS, and JavaScript, optimized for mobile and desktop devices.</li>
                    <li>Collaborated with backend teams for API integration, performing validations and testing via Postman.</li>
                    <li>Ensured cross-browser compatibility and accessibility compliance.</li>
                </ul>
            </div>
        `
    },
    music: {
        title: "Projects & Education",
        content: `
            <h3>Education</h3>
            <ul>
                <li><strong>B. Tech in Electronics and Communication</strong><br>Sphoorthy Engineering College, Hyderabad (2016 – 2020) | CGPA: 7.0</li>
                <li><strong>Intermediate</strong><br>Narayana Junior College (2014 – 2016) | 80%</li>
                <li><strong>Secondary Education</strong><br>DAV School (2014) | CGPA: 8.0</li>
            </ul>
            <br>
            <h3>Notable Projects</h3>
            <ul>
                <li><strong>FXSuite360 (CGI)</strong>: Full-stack payment processing solution handling ISO 20022 migration.</li>
                <li><strong>Client Portals</strong>: Custom branded interfaces for major financial institutions.</li>
            </ul>
            <br>
            <h3>Awards</h3>
            <ul>
                <li>Silver Award for ISO 20022 Swift adoption roadmap.</li>
                <li>Project Bonus for consistent delivery across ISO initiatives.</li>
            </ul>
        `
    },
    settings: {
        title: "Technical Skills",
        content: `
            <h3>Core Competencies</h3>
            <ul>
                <li><strong>Languages:</strong> Java (Core, J2EE)</li>
                <li><strong>Backend:</strong> Spring Boot, Spring MVC, Spring JPA/Hibernate, REST APIs</li>
                <li><strong>Database:</strong> MySQL, JDBC</li>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, AngularJS</li>
                <li><strong>DevOps/Tools:</strong> Maven, Git, Jenkins, Postman, SoapUI</li>
                <li><strong>Testing:</strong> JUnit, Mockito</li>
                <li><strong>AI Tools:</strong> GitHub Co-pilot, ChatGPT, Cursor, Claude</li>
            </ul>
            <br>
            <h3>Objective</h3>
            <p>Java Backend Developer with 4.5+ years of experience building scalable backend applications. Skilled in efficient database interactions, performance optimization, and Agile collaboration.</p>
        `
    },
    "xbox-live": {
        title: "Contact Info",
        content: `
            <div style="text-align: center; margin-top: 50px;">
                <h3>KARTHIK CHANDRA</h3>
                <p>+91-9676980307</p>
                <p>kkarthikchandra74@gmail.com</p>
                <p><a href="https://www.linkedin.com/in/karthikchandra74" style="color: var(--xbox-green); text-decoration: none;">LinkedIn Profile</a></p>
                <br>
                <p><em>"Ready to Connect"</em></p>
            </div>
        `
    }
};

// UI Elements
const bootScreen = document.getElementById('boot-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const menuItems = document.querySelectorAll('.menu-item');
const contentPanelTitle = document.getElementById('panel-title');
const contentPanelBody = document.getElementById('panel-body');
const clockElement = document.getElementById('clock');
const clickSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'); // Placeholder for sound (empty)

// Boot Sequence
window.onload = () => {
    setTimeout(() => {
        bootScreen.style.opacity = '0';
        setTimeout(() => {
            bootScreen.classList.add('hidden');
            dashboardScreen.classList.remove('hidden');
            // Slight delay for dashboard fade in
            setTimeout(() => {
                dashboardScreen.style.opacity = '1';
                dashboardScreen.style.display = 'flex';
                // Load initial content
                loadContent('memory');
            }, 100);
        }, 1000);
    }, 4500); // 4.5s boot time
};

// Menu Navigation
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // playSound();
        resetActiveInfo();
        item.classList.add('active');
    });

    item.addEventListener('click', () => {
        const target = item.dataset.target;
        loadContent(target);
    });
});

function resetActiveInfo() {
    menuItems.forEach(i => i.classList.remove('active'));
}

function loadContent(key) {
    if (resumeData[key]) {
        // Animate content out
        document.querySelector('.content-panel').style.opacity = '0.5';
        setTimeout(() => {
            contentPanelTitle.innerText = resumeData[key].title;
            contentPanelBody.innerHTML = resumeData[key].content;
            document.querySelector('.content-panel').style.opacity = '1';
        }, 200);

        // Ensure menu reflects active state if clicked directly
        resetActiveInfo();
        document.querySelector(`[data-target="${key}"]`).classList.add('active');
    }
}

// Clock
setInterval(() => {
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);

// Interactive Particle System (Google Antigravity-esque)
const canvas = document.getElementById('orb-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let mouse = { x: 0, y: 0 };
let particles = [];
const PARTICLE_COUNT = 150;

function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    initParticles();
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
    }

    update() {
        // Mouse interaction logic
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // Interaction Radius
        const maxDistance = 200;
        let force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
            // Attraction effect - particles drawn to cursor
            this.vx += forceDirectionX * force * 0.8;
            this.vy += forceDirectionY * force * 0.8;
        }

        // Friction
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Constant gentle float
        if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.2;
        if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.2;

        this.x += this.vx;
        this.y += this.vy;

        // Screen wrapping
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = `rgba(57, 181, 74, ${Math.random() * 0.5 + 0.3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    // Draw Orb Gradient Background behind particles for depth
    const centerX = width / 2;
    const centerY = height / 2;
    const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 300);
    gradient.addColorStop(0, 'rgba(57, 181, 74, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateParticles);
}

resize();
animateParticles();
