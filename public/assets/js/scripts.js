document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.querySelector('.user-input');
    const prompt = document.querySelector('.prompt');
    const cursor = document.querySelector('.cursor');
    const terminalBody = document.querySelector('.terminal-body');
    const inputLine = document.querySelector('.input-line');

    const commands = {
        help: `
Available commands:
  General:
    abt       - About Me
    projects  - Projects
    contact   - Contact Me
    skills    - Skills
    clear       - Clear Screen

  Technical:
    tech      - Technologies
    os        - Operating Systems
    virt      - Virtualization
    sec       - Security
    hack      - Ethical Hacking

  Professional:
    prof      - Professional Experience
    resume    - Download Resume
    linkedin  - Open LinkedIn Profile
    edu       - Education
    achievements - Key Achievements

  Future:
    goals     - My Goals
    pathway   - Career Pathway
    whatsnext - What's Next
        `,
        abt: `
About Me:
I am an IT professional with an Associate's Degree in Information Technology, bringing real-world experience in systems administration, network management, and security protocols. 
Currently pursuing a Bachelor's in Cybersecurity, I am eager to transition into network security to safeguard digital assets and ensure infrastructure integrity.
        `,
        goals: `
My Goals:
1. Transition into a cybersecurity role focused on network security and digital asset protection:
   - Learn tools like firewalls, IDS, and encryption methods.
   - Stay updated on cybersecurity trends like zero-day vulnerabilities and ransomware attacks.

2. Earn certifications (CISSP, Azure Fundamentals, CompTIA Security+, Network+):
   - CISSP: Validate knowledge of security architecture and practices.
   - Azure Fundamentals: Demonstrate foundational cloud knowledge.
   - Security+: Showcase understanding of security fundamentals.
   - Network+: Build a strong foundation in networking.

3. Learn penetration testing and gain experience as a pentester:
   - Study frameworks like OWASP and tools like Kali Linux, Metasploit, and Burp Suite.
   - Simulate real-world penetration tests in lab environments.

4. Obtain a position as a SOC Analyst:
   - Learn security monitoring and log analysis using tools like Splunk.
   - Understand incident response procedures and handle common cyber threats.

5. Participate in CTFs (Capture The Flag):
   - Join platforms like TryHackMe and Hack The Box.
   - Solve real-world challenges to build skills and reputation.
        `,
        pathway: `
Career Pathway:
1. Help Desk Support:
   - Build foundational skills in troubleshooting hardware, software, and networks.
   - Certifications: CompTIA A+, ITIL Foundation.

2. System/Network Administrator:
   - Manage servers, networks, and system configurations.
   - Certifications: CompTIA Network+, Microsoft Azure Fundamentals, Cisco CCNA.

3. Cybersecurity Analyst:
   - Detect and prevent security threats, analyze logs, and implement security measures.
   - Certifications: CompTIA Security+, CEH, Splunk Fundamentals.

4. SOC Analyst:
   - Monitor and respond to security incidents in real-time.
   - Certifications: CYSA+, Splunk Core Certified User.

5. Junior Penetration Tester:
   - Perform penetration testing tasks and understand security vulnerabilities.
   - Certifications: eJPT, OSCP.

6. Penetration Tester:
   - Conduct advanced penetration tests and simulate real-world attacks.
   - Certifications: OSCP, GPEN.
        `,
        whatsnext: `
What's Next:
1. Work on Projects:
   - Create personal labs to simulate network attacks and defenses using VirtualBox or VMware.
   - Document projects on GitHub or a personal blog to showcase skills.

2. Participate in CTFs:
   - Join platforms like CTFtime to find events and challenges.
   - Start with beginner-friendly CTFs and progress to advanced competitions.

3. Practice Ethical Hacking:
   - Set up home labs using tools like Kali Linux and Metasploit.
   - Use platforms like TryHackMe or Hack The Box for real-world scenarios.

4. Learn More About Network Security:
   - Study packet analysis, TCP/IP protocols, and common exploits.
   - Explore case studies of famous network attacks to learn defense mechanisms.

5. Defend Against Basic Attacks:
   - Master techniques like patch management, endpoint security, and firewall configurations.
   - Study common attack vectors like phishing, SQL injection, and malware, and learn how to mitigate them.
        `,
        projects: `
Projects:
1. SnowBe Online – Security Policy Implementation & Review
   - Developed a detailed security plan with policies, standards, and procedures aligned with PCI DSS and NIST 800-53.

2. Ransomware in the Apple App Store – Group-IB Research
   - Analyzed Group-IB's discovery of ransomware threats within Apple's ecosystem and proposed countermeasures.

3. Website Development – WordPress on Hostinger
   - Built and deployed secure websites for davinasbakedtherapy.com and techgeargurus.com using layered security (MFA, firewall).

4. Personal Homelab
   - Created an enterprise-style lab with a Kali Linux attacker machine, a Windows Server 2019, and 7 Windows 10 endpoints.

5. OWASP Juice Shop
   - Completed full walkthrough of this vulnerable web app to practice XSS, SQLi, and other exploit techniques.
`,

        contact: `
Contact Me:
Email: nawazsamuel98@gmail.com
LinkedIn: linkedin.com/in/samuel-nawaz
        `,
        skills: `
Skills:
- Penetration Testing:
  - Conducted simulated attacks on lab environments using Kali Linux and Metasploit.
  - Executed custom payloads and reverse shells for Windows targets.

- Vulnerability Assessment:
  - Used Nmap, OWASP ZAP, and manual techniques to identify security weaknesses in web apps and networks.
  - Completed full walkthrough of OWASP Juice Shop to analyze real-world vulnerabilities.

- Network Security:
  - Configured and secured enterprise-style virtual networks in a homelab.
  - Analyzed traffic using Wireshark and implemented firewall rules for basic defense scenarios.

- Malware Analysis:
  - Deployed custom Metasploit payloads and monitored behavioral patterns within isolated environments.
  - Studied malware attack vectors and exploit delivery techniques in lab setups.

- Incident Response:
  - Simulated threat scenarios to practice log review, threat detection, and response workflows.
  - Gained familiarity with security monitoring tools like Splunk and system-level analysis.

- Automation & Scripting:
  - Automated system tasks, keyboard actions, and scanning operations using Python and Bash.
  - Developed reverse shell scripts and workflow automation tools.

- Systems & Tools:
  - Kali Linux, Windows Server 2019, Wireshark, Metasploit, Burp Suite, TryHackMe, VirtualBox, Nmap, OWASP ZAP
`,

        tech: `
Technologies:
- Python, JavaScript, Bash
- Docker, Kubernetes
- AWS, Azure, GCP
- Splunk, Wireshark
        `,
        os: `
Operating Systems:
- Linux (Ubuntu, Kali, CentOS)
- Windows (Server and Desktop)
- macOS
        `,
        virt: `
Virtualization:
- VMware Fusion/Workstation
- KVM
- VirtualBox
- ProxMox (VE)
        `,
        sec: `
Security:
- Nessus, NMAP, OWASP, OpenSSL
- Identity and Access Management (IAM)
- PCI DSS, GDPR, HIPAA, CCPA, SOX Compliance
        `,
        hack: `
Ethical Hacking:
- Penetration Testing:
  - Performed targeted attacks on Windows 10 VMs using Kali Linux.
  - Executed reverse shell payloads and malware via Metasploit and Flipper Zero.

- Vulnerability Scanning:
  - Used Nmap for port scanning and service enumeration.
  - Practiced automated and manual vulnerability discovery using OWASP Juice Shop and custom scripts.

- Social Engineering:
  - Simulated phishing-style attacks in lab environments to demonstrate credential harvesting and human-layer weaknesses.

- Exploit Development:
  - Created custom reverse shell scripts and tested shellcode execution against Windows environments.
  - Analyzed common web application flaws such as XSS, SQL Injection, and IDOR during Juice Shop testing.

- Live Demonstrations:
  - Hosted an ethical hacking session showcasing real-time network penetration with Aircrack-ng and Kali Linux on a wireless network.

- Tools & Platforms:
  - Kali Linux, Metasploit Framework, Nmap, Aircrack-ng, Burp Suite, OWASP ZAP, TryHackMe, Hack The Box
`,
        prof: `
Professional Experience:
CDP Document Processor, RSM US LLP (October 2022 - Present)
- Assisted audit teams by securely processing and managing sensitive documents, following strict data protection and compliance protocols.
- Ensured the accuracy, quality, and confidentiality of all documents in line with established company procedures.
- Collaborated with IT teams to resolve document management issues, ensuring smooth and secure processing workflows.

Wireless Sales Representative & Mentor, CellularSales (September 2020 - September 2022)
- Provided technical support and customer service, troubleshooting mobile devices and networks.
- Stayed up to date with the latest tech trends, educating customers and employees on new devices.
- Trained new employees in sales techniques and technical troubleshooting.
- Consistently met sales targets while delivering excellent customer service.
        `,
        edu: `
Education:
- Associate of Science - Information Technology (July 2024), Full Sail University
  - Graduated as Salutatorian with a 3.99 GPA and received two Directors' Awards.
  - Final research paper on Industry 4.0, exploring technological advancements shaping the future of manufacturing.
- Bachelor of Science - Cybersecurity (Est. July 2025), Full Sail University
        `,
        achievements: `
Key Achievements:
- Salutatorian, Class of 2024 at Full Sail University with a 3.99 GPA and two Directors' Awards.
- Hosted a live ethical hacking session using Kali Linux and Aircrack-ng for network penetration testing.
- Created and deployed a reverse shell script attached to a Flipper Zero, successfully connecting to a Kali VM.
- Built a malware package with Metasploit that compromised a Windows 10 virtual machine.
- Developed a fully functioning homelab simulating a small enterprise network.
- Automated daily IT tasks using Python to improve productivity.
`,

    };

    const updateCursorPosition = () => {
        const promptWidth = prompt.offsetWidth;
        const userInputWidth = userInput.offsetWidth;
        cursor.style.left = `${promptWidth + userInputWidth}px`;
    };

    const executeCommand = (command) => {
        if (command === 'clear') {
            // Clear the terminal body, leaving only the input line
            terminalBody.innerHTML = '';
            terminalBody.appendChild(inputLine);
            return;
        }

        if (command === 'resume') {
            // Display a message in the terminal
            const message = document.createElement('div');
            message.classList.add('output-line');
            message.textContent = 'Opening resume in another tab...';
            terminalBody.insertBefore(message, inputLine);

            // Open the resume PDF in a new tab
            window.open('assets/Sam_IT_Resume.pdf', '_blank'); // Replace with the actual path to your resume file
            return;
        }

        if (command === 'linkedin') {
            // Display a message in the terminal
            const message = document.createElement('div');
            message.classList.add('output-line');
            message.textContent = 'Opening LinkedIn in another browser...';
            terminalBody.insertBefore(message, inputLine);

            // Open the LinkedIn profile in a new tab
            window.open('https://www.linkedin.com/in/samuel-nawaz/', '_blank'); // Replace with your actual LinkedIn URL
            return;
        }

        // Display the command as part of the history
        const commandLine = document.createElement('div');
        commandLine.classList.add('output-line');
        commandLine.textContent = `Sam@CyberPortfolio ~ % ${command}`;
        terminalBody.insertBefore(commandLine, inputLine);

        // Display the command output
        const output = document.createElement('div');
        output.classList.add('output-line');
        terminalBody.insertBefore(output, inputLine);

        if (command === 'help') {
            // Display the help command output instantly
            output.textContent = commands[command];
        } else if (commands[command]) {
            // Display other commands with a faster typing effect
            typeText(commands[command], output, 5); // Faster typing effect with 5ms delay
        } else {
            // Display "command not found" with a faster typing effect
            typeText(`Command not found: ${command}`, output, 5);
        }

        // Scroll to the bottom of the terminal
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    // Function to simulate typing effect
    const typeText = (text, element, delay = 5) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;

                // Scroll to the bottom of the terminal for each new character
                terminalBody.scrollTop = terminalBody.scrollHeight;
            } else {
                clearInterval(interval);
            }
        }, delay);
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = userInput.textContent.trim();
            executeCommand(command);
            userInput.textContent = ''; // Clear input
        } else if (e.key === 'Backspace') {
            userInput.textContent = userInput.textContent.slice(0, -1);
        } else if (e.key.length === 1) {
            userInput.textContent += e.key;
        }
        updateCursorPosition();
    });

    // Initialize cursor position
    updateCursorPosition();
});
