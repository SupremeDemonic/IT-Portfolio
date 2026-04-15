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
    certs     - Certifications
  Future:
    goals     - My Goals
    pathway   - Career Pathway
    whatsnext - What's Next
        `,

        abt: `
    About Me:
    I am an IT Support Specialist with hands-on experience in identity and access management, user provisioning,
    and security operations within an MSP environment. At CommPutercations, I manage the full user lifecycle
    across Google Workspace, Microsoft 365, and Entra ID — provisioning accounts, assigning licenses, configuring
    email rules, and deprovisioning access during offboarding. I handle 10–15 tickets daily in ConnectWise,
    maintain documentation in IT Glue, and respond to security alerts using SIEM tooling across endpoints,
    applications, and registry configurations. My role spans both remote and on-site support, and I work with
    tools like NinjaOne, Halo, Elevate/AutoElevate, Azure, Hyper-V, and Huntress. I am passionate about
    problem-solving and continuously developing the skills needed to grow into a cybersecurity role.
`,

        goals: `
My Goals:
1. Transition into a cybersecurity role focused on network security and digital asset protection:
   - Learn tools like firewalls, IDS, and encryption methods.
   - Stay updated on cybersecurity trends like zero-day vulnerabilities and ransomware attacks.
2. Earn certifications (CompTIA Security+, Network+, Azure Fundamentals, CISSP):
   - Security+: Currently in progress — validate core security fundamentals.
   - Network+: Build a strong foundation in networking.
   - Azure Fundamentals: Demonstrate foundational cloud knowledge.
   - CISSP: Long-term goal to validate security architecture expertise.
3. Learn penetration testing and gain experience as a pentester:
   - Study frameworks like OWASP and tools like Kali Linux, Metasploit, and Burp Suite.
   - Simulate real-world penetration tests in lab environments.
4. Obtain a position as a SOC Analyst:
   - Expand SIEM analysis skills with Splunk and other monitoring platforms.
   - Deepen incident response knowledge and threat detection workflows.
5. Participate in CTFs (Capture The Flag):
   - Join platforms like TryHackMe and Hack The Box.
   - Solve real-world challenges to build skills and reputation.
        `,

        pathway: `
Career Pathway:
1. Help Desk / IT Support Specialist (Current):
   - IAM, user lifecycle management, endpoint support, SIEM alerting.
   - Tools: ConnectWise, NinjaOne, Entra ID, Microsoft 365, Google Workspace, Huntress.
2. System/Network Administrator:
   - Manage servers, networks, and system configurations.
   - Certifications: CompTIA Network+, Microsoft Azure Fundamentals, Cisco CCNA.
3. Cybersecurity Analyst:
   - Detect and prevent security threats, analyze logs, and implement security measures.
   - Certifications: CompTIA Security+, CEH, Splunk Fundamentals.
4. SOC Analyst:
   - Monitor and respond to security incidents in real-time.
   - Certifications: CySA+, Splunk Core Certified User.
5. Junior Penetration Tester:
   - Perform penetration testing tasks and understand security vulnerabilities.
   - Certifications: eJPT, OSCP.
6. Penetration Tester:
   - Conduct advanced penetration tests and simulate real-world attacks.
   - Certifications: OSCP, GPEN.
        `,

        whatsnext: `
What's Next:
1. Actively Seeking My Next Role:
   - Looking for positions that challenge and elevate my skills — including IAM Analyst, Security Analyst,
     SOC Analyst, and other cybersecurity-adjacent roles.
   - Bringing hands-on experience in identity lifecycle management, SIEM alerting, and endpoint security
     from a live MSP environment.
2. Obtain CompTIA Security+:
   - Currently studying to formalize and validate my security knowledge.
3. Expand Homelab:
   - Integrating Suricata-based IDS and forwarding logs to Splunk to build a SOC-style monitoring setup.
4. Continue CTF Practice:
   - Actively working through TryHackMe and Hack The Box to sharpen offensive and defensive skills.
5. Deepen Penetration Testing Skills:
   - Building on Shannon and OWASP Juice Shop experience with more advanced lab scenarios and vulnerability research.
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
6. Shannon – Agentic Hacking Tool
   - Tasked by management to deploy and test Shannon, an agentic AI-powered hacking tool, in a virtual machine environment.
   - Successfully installed Shannon and used it to conduct a penetration test against OWASP Juice Shop, exploiting real vulnerabilities in a controlled lab setting.
   - Authored an 8-page technical report documenting the Shannon installation process and a walkthrough of the first pentest, including findings and methodology.
`,

        contact: `
Contact Me:
Email: nawazsamuel98@gmail.com
LinkedIn: linkedin.com/in/samuel-nawaz
        `,

        skills: `
Skills:
- Identity & Access Management (IAM):
  - Managed full user lifecycle in Microsoft 365, Google Workspace, and Entra ID.
  - Provisioned accounts, assigned licenses, configured email forwarding, and deprovisioned access during offboarding.
  - Enforced access control policies across client environments.
- Security Operations & SIEM:
  - Monitored and responded to security alerts using SIEM tooling (Huntress, Splunk).
  - Investigated and remediated threats across endpoints, applications, inbox rules, and registry configurations.
  - Applied threat detection workflows in a live MSP environment.
- Penetration Testing:
  - Conducted simulated attacks on lab environments using Kali Linux and Metasploit.
  - Executed custom payloads and reverse shells for Windows targets.
- Vulnerability Assessment:
  - Used Nmap, OWASP ZAP, Nessus, OpenVAS, and manual techniques to identify security weaknesses.
  - Completed full walkthrough of OWASP Juice Shop for real-world vulnerability analysis.
- Network Security:
  - Configured and secured enterprise-style virtual networks in a homelab.
  - Analyzed traffic using Wireshark and tcpdump; deployed Suricata for intrusion detection.
- Automation & Scripting:
  - Automated system tasks and scanning operations using Python and Bash.
  - Built custom reverse shell scripts and Python-based tools (PyAutoGUI) to streamline workflows.
- Help Desk & Endpoint Support:
  - Managed 10–15 daily tickets in ConnectWise with full documentation in IT Glue.
  - Provisioned and configured client workstations; deployed endpoint agents and validated compliance.
  - Supported clients across ConnectWise, NinjaOne, Halo, Elevate/AutoElevate, IT Glue, and Hyper-V.
- Risk Management & Compliance:
  - Assessed risk and applied controls aligned to NIST 800-53, PCI DSS, HIPAA, and ISO 27001.
  - Created security policies, asset inventories, and vulnerability reports.
`,
        tech: `
Technologies:
- Scripting: Python, Bash, PyAutoGUI
- SIEM & Monitoring: Splunk, Huntress, Suricata
- Packet Analysis: Wireshark, tcpdump, Nmap, nslookup, traceroute, WHOIS
- Vulnerability Tools: Nessus, OpenVAS, Nikto, Shodan, OWASP ZAP, Burp Suite, Gobuster
- Exploitation: Metasploit, Netcat, Hashcat, John the Ripper, Aircrack-ng
- Platforms: ConnectWise, NinjaOne, Halo, IT Glue, Elevate/AutoElevate
- Cloud & Identity: Microsoft 365, Entra ID, Azure, Google Workspace
        `,

        os: `
Operating Systems:
- Linux (Kali Linux, Ubuntu, CentOS)
- Windows (10/11, Windows Server 2019)
- macOS
        `,

        virt: `
Virtualization:
- VirtualBox
- VMware Fusion/Workstation
- Proxmox (VE)
- Hyper-V
        `,

        sec: `
Security:
- Tools: Wireshark, Nmap, Nessus, OpenVAS, Nikto, Shodan, Suricata, Huntress, Splunk, OWASP ZAP, Burp Suite, Gobuster
- Identity: Entra ID, IAM, User Provisioning & Deprovisioning, Access Control Policy Enforcement
- Email Security: Inbox rule auditing, forwarding configuration, phishing response
- Compliance Frameworks: NIST 800-53, PCI DSS, HIPAA, ISO 27001, CIA Triad
- Concepts: Threat Detection, SIEM Analysis, Incident Response, Vulnerability Assessment, Network Security, TCP/IP
        `,

        hack: `
Ethical Hacking:
- Penetration Testing:
  - Performed targeted attacks on Windows 10 VMs using Kali Linux.
  - Executed reverse shell payloads and malware via Metasploit and Flipper Zero.
- Vulnerability Scanning:
  - Used Nmap, Nessus, OpenVAS, and Nikto for port scanning, service enumeration, and vulnerability discovery.
  - Practiced manual and automated discovery using OWASP Juice Shop.
- Social Engineering:
  - Simulated phishing-style attacks in lab environments to demonstrate credential harvesting.
- Exploit Development:
  - Created custom reverse shell scripts and tested shellcode execution against Windows environments.
  - Analyzed XSS, SQL Injection, and IDOR during Juice Shop testing.
- Live Demonstrations:
  - Hosted an ethical hacking session showcasing real-time network penetration with Aircrack-ng and Kali Linux.
- Tools & Platforms:
  - Kali Linux, Metasploit, Nmap, Aircrack-ng, Burp Suite, Gobuster, Hashcat, John the Ripper, Netcat, Shodan, Nikto, OWASP ZAP, TryHackMe, Hack The Box
`,

        prof: `
Professional Experience:

Help Desk / IT Support Specialist / IAM, CommPutercations Inc. (MSP)  |  August 2024 - Present
- Managed full ticket lifecycle across 10-15 daily tickets in ConnectWise, maintaining SLA adherence and clear documentation in IT Glue.
- Provisioned and configured new client workstations, deploying endpoint agents and validating device compliance and readiness prior to user onboarding.
- Managed user identity lifecycle in Microsoft 365 and Entra ID — provisioning new accounts, assigning licenses, configuring email forwarding rules, and deprovisioning access per offboarding procedures.
- Monitored and responded to security alerts using SIEM tooling; investigated and remediated threats across endpoints, applications, inbox rules, and registry configurations.

CDP Document Processor, RSM US LLP  |  October 2022 - July 2024
- Finalized and quality-checked financial documents used in audits, ensuring accuracy, integrity, and adherence to internal control procedures.
- Processed sensitive proforma reports and official letters under confidentiality guidelines, maintaining data security throughout digital workflows.
- Performed detailed math checks and proofreading to prevent discrepancies, supporting audit readiness and risk mitigation.

Wireless Sales Representative & Mentor, CellularSales  |  September 2020 - September 2022
- Sold mobile devices while supporting and educating customers on security and the latest technology trends.
- Trained new hires in sales tactics and ensuring they provided the best level of customer support.
        `,

        edu: `
Education:
- Bachelor of Science - Cybersecurity (Expected July 2025), Full Sail University
- Associate of Science - Information Technology (July 2024), Full Sail University
  - Graduated as Salutatorian with a 3.99 GPA and received two Directors' Awards.
  - Final research paper on Industry 4.0, exploring technological advancements shaping the future of manufacturing.
        `,

        achievements: `
Key Achievements:
- Salutatorian, Class of 2024 at Full Sail University with a 3.99 GPA and two Directors' Awards.
- Managing IAM and security operations for multiple clients in a live MSP environment (CommPutercations Inc.), handling identity lifecycle, SIEM alerting, and threat remediation daily.
- Hosted a live ethical hacking session using Kali Linux and Aircrack-ng for network penetration testing.
- Created and deployed a reverse shell script attached to a Flipper Zero, successfully connecting to a Kali VM.
- Built a malware package with Metasploit that compromised a Windows 10 virtual machine.
- Developed a fully functioning homelab simulating a small enterprise network.
- Automated daily IT tasks using Python to improve productivity.
`,

        certs: `
Certifications:
Google Cybersecurity Professional Certificate (2025)
- Successfully completed the Google Cybersecurity Certificate. Gained hands-on skills in threat detection,
  incident response, network security, and security operations using industry tools.

CompTIA Security+ (In Progress)
- Currently studying using Udemy courses, practice exams, and hands-on labs. Focused on security fundamentals,
  threat management, cryptography, and network defense.
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
            window.open('assets/Sam_IT_Resume.pdf', '_blank');
            return;
        }
        if (command === 'linkedin') {
            // Display a message in the terminal
            const message = document.createElement('div');
            message.classList.add('output-line');
            message.textContent = 'Opening LinkedIn in another browser...';
            terminalBody.insertBefore(message, inputLine);
            // Open the LinkedIn profile in a new tab
            window.open('https://www.linkedin.com/in/samuel-nawaz/', '_blank');
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
            typeText(commands[command], output, 5);
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
