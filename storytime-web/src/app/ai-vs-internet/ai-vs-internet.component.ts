import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ai-vs-internet',
  imports: [RouterLink],
  template: `
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
      
      <div class="ai-vs-internet-container">
        <header class="ai-vs-internet-header">
          <h1 class="ai-vs-internet-title">Two Revolutions: An Adoption Analysis of the Internet and Generative AI</h1>
          <p class="ai-vs-internet-subtitle">An interactive report comparing the historical user adoption rates of two transformative technologies.</p>
          <div class="ai-vs-internet-nav">
            <a routerLink="/home" class="ai-vs-internet-back-btn">
              ← Back to Home
            </a>
          </div>
        </header>

        <!-- PART 1: THE INTERNET -->
        <section id="internet-history" class="ai-vs-internet-section">
          <h2 class="ai-vs-internet-section-title internet-section-title">
            Part 1: The Rise of the Internet
          </h2>
          <!-- Internet Timeline -->
          <div class="timeline-container">
            <div class="timeline-line"></div>
            <div class="timeline-items">
              <div class="timeline-item" (click)="navigateToSection('milestone-internet-modem', 'internet')"><div class="timeline-dot internet-timeline-dot"></div><p class="timeline-year">1980s</p><p class="timeline-description">Low-Bandwidth Modems</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-internet-mosaic', 'internet')"><div class="timeline-dot internet-timeline-dot"></div><p class="timeline-year">1993</p><p class="timeline-description">Mosaic Browser</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-internet-aol', 'internet')"><div class="timeline-dot internet-timeline-dot"></div><p class="timeline-year">1995</p><p class="timeline-description">AOL & Mainstream</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-internet-broadband', 'internet')"><div class="timeline-dot internet-timeline-dot"></div><p class="timeline-year">2000</p><p class="timeline-description">Broadband Access</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-internet-iphone', 'internet')"><div class="timeline-dot internet-timeline-dot"></div><p class="timeline-year">2007</p><p class="timeline-description">The iPhone</p></div>
            </div>
          </div>
          <!-- Internet Chart -->
          <div class="chart-section">
            <h3 class="chart-title">Growth of Internet Users Worldwide (1990-2015)</h3>
            <div class="chart-container">
              <canvas id="internetUserGrowthChart"></canvas>
            </div>
          </div>
           <!-- Internet Details -->
          <div class="content-layout">
            <aside class="content-sidebar"><nav id="milestone-nav-internet" class="milestone-nav">
              <a href="#milestone-internet-modem" class="nav-link internet-nav-link">Low-Bandwidth Modems</a>
              <a href="#milestone-internet-mosaic" class="nav-link internet-nav-link">Mosaic Web Browser</a>
              <a href="#milestone-internet-aol" class="nav-link internet-nav-link">AOL & Mainstream Access</a>
              <a href="#milestone-internet-broadband" class="nav-link internet-nav-link">Broadband Internet</a>
              <a href="#milestone-internet-iphone" class="nav-link internet-nav-link">The iPhone & Mobile Web</a>
            </nav></aside>
            <main class="content-main">
              <div id="milestone-internet-modem" class="milestone-content"><h4 class="milestone-title internet-milestone-title">The Dial-Up Era: Low-Bandwidth Modems</h4><p class="milestone-text">During the 1980s and early 1990s, home access to the internet was made possible by analog modems over standard telephone lines. Speeds were incredibly slow, typically ranging from 2400 to 56,000 bits per second (56k). Using the internet meant the phone line was occupied. Despite these limitations, dial-up was the gateway for millions of early adopters.</p></div>
              <div id="milestone-internet-mosaic" class="milestone-content"><h4 class="milestone-title internet-milestone-title">1993: Mosaic, The Browser that Opened the Web</h4><p class="milestone-text">Released in 1993, Mosaic was the first widely popular browser that could display images inline with text. Its user-friendly graphical interface made the World Wide Web suddenly explorable for everyday users, sparking the first major wave of internet adoption and directly leading to the development of Netscape and Internet Explorer. This is widely considered the inflection point for the mainstream internet.</p></div>
              <div id="milestone-internet-aol" class="milestone-content"><h4 class="milestone-title internet-milestone-title">1995: "You've Got Mail!": AOL and the Rise of ISPs</h4><p class="milestone-text">In the mid-to-late 1990s, companies like America Online (AOL) brought the internet to the masses with curated online services, offering email, chat rooms, and news, all accessible through easy-to-install software. For many households, AOL was the internet, simplifying the daunting task of getting online and making it a household utility.</p></div>
              <div id="milestone-internet-broadband" class="milestone-content"><h4 class="milestone-title internet-milestone-title">c. 2000: The Always-On Revolution: Broadband Internet</h4><p class="milestone-text">Beginning around 2000, broadband technologies like DSL and cable modems began to replace dial-up. This was a seismic shift, offering an "always-on" connection with dramatically faster speeds. This enabled rich media, streaming video, and online gaming, turning the internet from a place you visit into a constant, integrated part of daily life.</p></div>
              <div id="milestone-internet-iphone" class="milestone-content"><h4 class="milestone-title internet-milestone-title">2007: The Internet in Your Pocket: The iPhone</h4><p class="milestone-text">The introduction of the iPhone in 2007 was the single most important catalyst for the mobile web. Its intuitive multi-touch interface and full-featured web browser untethered the internet from the desktop, making it accessible from anywhere, at any time, and forcing the creation of the mobile-first ecosystem we know today.</p></div>
            </main>
          </div>
        </section>

        <!-- PART 2: GENERATIVE AI -->
        <section id="ai-history" class="ai-vs-internet-section">
          <h2 class="ai-vs-internet-section-title ai-section-title">
            Part 2: The Explosion of Generative AI
          </h2>
           <!-- GenAI Timeline -->
          <div class="timeline-container">
            <div class="timeline-line"></div>
            <div class="timeline-items">
              <div class="timeline-item" (click)="navigateToSection('milestone-ai-foundations', 'ai')"><div class="timeline-dot ai-timeline-dot"></div><p class="timeline-year">1950s-2010s</p><p class="timeline-description">Early Foundations</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-ai-gpu', 'ai')"><div class="timeline-dot ai-timeline-dot"></div><p class="timeline-year">2012</p><p class="timeline-description">The GPU Impact</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-ai-chatgpt', 'ai')"><div class="timeline-dot ai-timeline-dot"></div><p class="timeline-year">Nov 2022</p><p class="timeline-description">ChatGPT Launch</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-ai-gpt4', 'ai')"><div class="timeline-dot ai-timeline-dot"></div><p class="timeline-year">Mar 2023</p><p class="timeline-description">GPT-4 & Multimodality</p></div>
              <div class="timeline-item" (click)="navigateToSection('milestone-ai-sora', 'ai')"><div class="timeline-dot ai-timeline-dot"></div><p class="timeline-year">Feb 2024</p><p class="timeline-description">Text-to-Video Leap</p></div>
            </div>
          </div>
           <!-- GenAI Details -->
          <div class="content-layout">
            <aside class="content-sidebar"><nav id="milestone-nav-ai" class="milestone-nav">
              <a href="#milestone-ai-foundations" class="nav-link ai-nav-link">Early Foundations</a>
              <a href="#milestone-ai-gpu" class="nav-link ai-nav-link">The GPU Impact</a>
              <a href="#milestone-ai-chatgpt" class="nav-link ai-nav-link">ChatGPT Launch</a>
              <a href="#milestone-ai-gpt4" class="nav-link ai-nav-link">GPT-4 & Multimodality</a>
              <a href="#milestone-ai-sora" class="nav-link ai-nav-link">The Text-to-Video Leap</a>
            </nav></aside>
            <main class="content-main">
              <div id="milestone-ai-foundations" class="milestone-content"><h4 class="milestone-title ai-milestone-title">1950s-2010s: Early Foundations in Neural Networks</h4><p class="milestone-text">The concepts behind generative AI are not new. The idea of neural networks, modeled loosely on the human brain, dates back to the 1950s. Decades of theoretical work and heuristics development laid the groundwork, but progress was slow, hampered by a lack of computational power and data. Early models were interesting academically but had no practical, mainstream application.</p></div>
              <div id="milestone-ai-gpu" class="milestone-content"><h4 class="milestone-title ai-milestone-title">2012: The ImageNet Moment & The GPU Impact</h4><p class="milestone-text">A pivotal moment occurred in 2012 when a deep neural network called AlexNet, trained on powerful Graphics Processing Units (GPUs), shattered records in the ImageNet image recognition competition. GPUs, originally designed for gaming, proved to be exceptionally good at the parallel processing required to train large neural networks. The increasing availability and affordability of this hardware for companies and researchers unlocked the ability to train much larger, more complex models, directly enabling the AI boom.</p></div>
              <div id="milestone-ai-chatgpt" class="milestone-content"><h4 class="milestone-title ai-milestone-title">November 2022: The Inflection Point - ChatGPT</h4><p class="milestone-text">On November 30, 2022, OpenAI released ChatGPT. Its conversational fluency was a quantum leap beyond anything seen publicly. The intuitive chat interface removed all technical barriers, making it accessible to anyone with a browser. It reached 100 million monthly active users in two months, becoming the fastest-growing consumer application in history and marking the true beginning of the mainstream generative AI era.</p></div>
              <div id="milestone-ai-gpt4" class="milestone-content"><h4 class="milestone-title ai-milestone-title">March 2023: The Leap in Power - GPT-4 & Multimodality</h4><p class="milestone-text">OpenAI launched GPT-4, a more powerful model that could understand and reason about images in addition to text ("multimodality"). It demonstrated vastly improved logic and creativity. This same period saw image generation models like Midjourney V5 produce photorealistic outputs, proving AI's capability across different creative domains.</p></div>
              <div id="milestone-ai-sora" class="milestone-content"><h4 class="milestone-title ai-milestone-title">February 2024: Moving Pictures - The Text-to-Video Leap</h4><p class="milestone-text">OpenAI revealed Sora, a text-to-video model capable of generating stunningly realistic and coherent video clips from simple text prompts. While not publicly released, Sora represented another monumental leap, showcasing a future where high-quality video content could be created on demand, promising to revolutionize numerous industries.</p></div>
            </main>
          </div>
        </section>

        <!-- PART 3: COMPARATIVE ANALYSIS -->
        <section id="comparison" class="comparison-section">
          <header class="comparison-header">
            <h1 class="comparison-title">Comparative Analysis</h1>
            <p class="comparison-subtitle">To accurately compare adoption rates, we align the timelines to a common starting point: the launch of the key mainstream-enabling technology (Mosaic for the Internet, ChatGPT for GenAI).</p>
          </header>
          <div class="chart-section">
            <h2 class="chart-title">User Adoption: Internet vs. Generative AI</h2>
            <p class="chart-subtitle">Time to reach millions of users from mainstream launch (Year 0)</p>
            <div class="chart-container">
              <canvas id="comparisonChart"></canvas>
            </div>
          </div>
          <div class="conclusion-container">
            <h3 class="conclusion-title">Conclusion: An Unprecedented Acceleration</h3>
            <p class="conclusion-text">The integrated time series confirms your theory in the most dramatic fashion. <strong>The adoption rate of generative AI has dwarfed that of the early internet.</strong></p>
            <p class="conclusion-text">The chart shows that it took the internet approximately <strong>7.5 years</strong> (90 months) after its "mainstream moment" with the Mosaic browser to reach 100 million users. In stark contrast, Generative AI, spearheaded by ChatGPT, crossed the same <strong>100 million user</strong> milestone in a mere <strong>2 months</strong>. The adoption curve for Gen AI is nearly vertical compared to the internet's already impressive S-curve.</p>
            <p class="conclusion-text">The key driver for this difference is the technological foundation upon which each revolution was built:</p>
            <ul class="conclusion-list">
              <li><strong>Foundation vs. Application:</strong> The internet was a foundational revolution. It required building the "roads" first: physical infrastructure (cables, servers), hardware adoption (PCs, modems), and user education from scratch. This was a slow, capital-intensive process.</li>
              <li><strong>Frictionless Onboarding:</strong> Generative AI is an application-layer revolution built on the internet's mature infrastructure. It required no new hardware for the user, no complex setup, and no new skills beyond natural language. It was accessible instantly through a browser to billions of already-connected people.</li>
              <li><strong>The GPU Catalyst:</strong> As your theory correctly identifies, the availability of affordable, powerful GPUs was the critical catalyst. It allowed companies like OpenAI to train the massive models that made tools like ChatGPT possible, but the user adoption itself was fueled by the internet's existing distribution network.</li>
              <li><strong>Viral Distribution:</strong> Generative AI benefited from modern viral loops (social media, content sharing) that did not exist in the 1990s, allowing its capabilities to be showcased to a global audience almost overnight.</li>
            </ul>
            <p class="conclusion-text">In summary, while both are transformative, the internet spent decades laying the groundwork. Generative AI arrived on a fully built stage, leading to an adoption velocity that is truly without precedent.</p>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrl: './ai-vs-internet-rogers.component.css'
})
export class AiVsInternetComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialize charts and navigation immediately since Chart.js is imported
    this.initializeCharts();
    this.setupNavigation();
  }

  private initializeCharts(): void {
    const internetData = {
      years: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
      users: [14, 16, 36, 70, 101, 147, 248, 413, 513, 587, 719, 817, 1018, 1114, 1319, 1574, 1797, 2035, 2216, 2489, 2702, 2925, 3206],
      milestones: {
        '1993': 'Mosaic Browser',
        '1995': 'AOL Mainstream',
        '2000': 'Broadband Begins',
        '2007': 'iPhone Launch'
      }
    };
    
    const narrativeInternetData = [
      { x: 0, y: 14 },
      { x: 2, y: 36 },
      { x: 4, y: 70 },
      { x: 6, y: 85 },
      { x: 7.5, y: 101 } 
    ];

    const narrativeAiData = [
      { x: 0, y: 1 },
      { x: 1/12, y: 5 },
      { x: 2/12, y: 100 }
    ];

    // Internet Chart
    const internetCanvas = document.getElementById('internetUserGrowthChart') as HTMLCanvasElement;
    if (internetCanvas) {
      new Chart(internetCanvas.getContext('2d')!, {
        type: 'line', 
        data: { 
          labels: internetData.years, 
          datasets: [{ 
            label: 'Internet Users (Millions)', 
            data: internetData.users, 
            borderColor: '#4F46E5', 
            backgroundColor: 'rgba(79, 70, 229, 0.1)', 
            fill: true, 
            tension: 0.3 
          }] 
        },
        options: { 
          responsive: true, 
          maintainAspectRatio: false, 
          scales: { 
            y: { 
              beginAtZero: true, 
              title: { 
                display: true, 
                text: 'Users (in Millions)' 
              } 
            }, 
            x: { 
              title: { 
                display: true, 
                text: 'Year' 
              } 
            } 
          } 
        }
      });
    }

    // Comparison Chart
    const comparisonCanvas = document.getElementById('comparisonChart') as HTMLCanvasElement;
    if (comparisonCanvas) {
      new Chart(comparisonCanvas.getContext('2d')!, {
        type: 'line', 
        data: { 
          datasets: [
            { 
              label: 'Generative AI Adoption', 
              data: narrativeAiData, 
              borderColor: '#10B981', 
              backgroundColor: 'rgba(16, 185, 129, 0.1)', 
              fill: true, 
              tension: 0.2 
            },
            { 
              label: 'Internet Adoption', 
              data: narrativeInternetData, 
              borderColor: '#6366F1', 
              backgroundColor: 'rgba(99, 102, 241, 0.1)', 
              fill: true, 
              tension: 0.2 
            }
          ]
        },
        options: { 
          responsive: true, 
          maintainAspectRatio: false, 
          scales: {
            y: { 
              beginAtZero: true, 
              max: 120, 
              title: { 
                display: true, 
                text: 'Users (in Millions)' 
              } 
            },
            x: { 
              type: 'linear', 
              position: 'bottom', 
              max: 8, 
              title: { 
                display: true, 
                text: 'Years Since Mainstream Launch (Mosaic / ChatGPT)' 
              } 
            }
          }
        }
      });
    }
  }

  private setupNavigation(): void {
    this.setupNavigationForType('internet');
    this.setupNavigationForType('ai');
  }

  private setupNavigationForType(type: string): void {
    const navLinks = document.querySelectorAll(`#milestone-nav-${type} .nav-link`);
    const contentSections = document.querySelectorAll(`.milestone-content-${type}`);
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) {
          this.updateActiveLink(entry.target.getAttribute('id')!, type); 
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });
    
    contentSections.forEach(section => observer.observe(section));
    
    navLinks.forEach(link => { 
      link.addEventListener('click', e => { 
        e.preventDefault(); 
        this.navigateToSection(link.getAttribute('href')!.substring(1), type); 
      }); 
    });
    
    if (contentSections.length > 0) { 
      this.updateActiveLink(contentSections[0].id, type); 
    }
  }

  navigateToSection(sectionId: string, type: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  updateActiveLink(targetId: string, type: string): void {
    document.querySelectorAll(`#milestone-nav-${type} .nav-link`).forEach(link => {
      const activeClass = `active-${type}`;
      if (link.getAttribute('href') === `#${targetId}`) {
        link.classList.add(activeClass);
      } else {
        link.classList.remove(activeClass);
      }
    });
  }
}