import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import { KioskService } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';

@Component({
  selector: 'app-ai-vs-internet',
  imports: [RouterLink, CommonModule, KioskOverlayComponent],
  template: `
    <div class="ai-vs-internet-container">
      <header class="ai-vs-internet-header">
        <h1 class="ai-vs-internet-title">The Story of Two Amazing Journeys</h1>
        <p class="ai-vs-internet-subtitle">Understanding How the Internet and AI Changed Our World</p>
        <div class="ai-vs-internet-nav">
          <a routerLink="/home" class="ai-vs-internet-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

      <section class="ai-vs-internet-introduction">
        <div class="intro-card">
          <h2 class="intro-title">Hello, Neighbor!</h2>
          <p class="intro-text">
            Today, we're going to talk about something really wonderful - two amazing inventions that changed how we live, learn, and connect with each other. We'll explore the Internet and Generative AI, and discover how quickly people around the world welcomed them into their lives. It's quite a story, and I think you'll find it fascinating.
          </p>
        </div>
      </section>

      <section class="ai-vs-internet-main-content">
        <h2 class="section-header">Our Journey Together</h2>
        
        <div class="cards-grid">
          <!-- Internet Story Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('internet-story')">
            <div class="card-icon">🌐</div>
            <h3 class="card-title">The Internet's Patient Journey</h3>
            <p class="card-preview">
              Let's explore how the Internet grew step by step, from dial-up modems to the world in our pockets. It was a journey that took time, patience, and many wonderful innovations...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Dial-Up Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-internet-modem')">
            <div class="card-icon">📞</div>
            <h3 class="card-title">The Dial-Up Days</h3>
            <p class="card-preview">
              Remember the sound of a modem connecting? In the 1980s and early 1990s, that chirping, beeping sound meant you were about to connect to something magical...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Mosaic Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-internet-mosaic')">
            <div class="card-icon">🖼️</div>
            <h3 class="card-title">Pictures on the Web</h3>
            <p class="card-preview">
              In 1993, something wonderful happened. A browser called Mosaic let people see pictures and words together on the web for the first time...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- AOL Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-internet-aol')">
            <div class="card-icon">📧</div>
            <h3 class="card-title">"You've Got Mail!"</h3>
            <p class="card-preview">
              By 1995, companies like AOL made the internet friendly for everyone. They made it simple to send emails and chat with friends...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Broadband Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-internet-broadband')">
            <div class="card-icon">⚡</div>
            <h3 class="card-title">Always Connected</h3>
            <p class="card-preview">
              Around 2000, something called "broadband" changed everything. No more waiting, no more busy phone lines - the internet was always there, ready to help...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- iPhone Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-internet-iphone')">
            <div class="card-icon">📱</div>
            <h3 class="card-title">Internet in Your Pocket</h3>
            <p class="card-preview">
              In 2007, the iPhone put the entire internet in your pocket. You could carry the world's knowledge wherever you went...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- AI Story Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('ai-story')">
            <div class="card-icon">🤖</div>
            <h3 class="card-title">AI's Swift Arrival</h3>
            <p class="card-preview">
              Now let's talk about Generative AI. While the Internet took decades to reach everyone, AI moved much, much faster. Let's discover why...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- AI Foundations Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-ai-foundations')">
            <div class="card-icon">🧠</div>
            <h3 class="card-title">The Long Dream</h3>
            <p class="card-preview">
              For many years, from the 1950s onwards, scientists dreamed of computers that could think and create. It was a patient, quiet dream...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- GPU Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-ai-gpu')">
            <div class="card-icon">🎮</div>
            <h3 class="card-title">The Gaming Gift</h3>
            <p class="card-preview">
              In 2012, something wonderful happened. Computer chips made for video games turned out to be perfect for teaching AI...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- ChatGPT Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-ai-chatgpt')">
            <div class="card-icon">💬</div>
            <h3 class="card-title">Hello, ChatGPT!</h3>
            <p class="card-preview">
              On November 30, 2022, something remarkable was shared with the world. ChatGPT could talk with you just like a helpful friend...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- GPT-4 Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-ai-gpt4')">
            <div class="card-icon">🎨</div>
            <h3 class="card-title">Seeing and Understanding</h3>
            <p class="card-preview">
              Just a few months later, in March 2023, AI learned to understand pictures as well as words. It could help you in even more ways...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Sora Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('milestone-ai-sora')">
            <div class="card-icon">🎬</div>
            <h3 class="card-title">Moving Pictures from Words</h3>
            <p class="card-preview">
              By February 2024, AI could create videos from your words. Imagine describing a scene and watching it come to life...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Comparison Card -->
          <div class="ai-vs-internet-card" (click)="openKioskMode('comparison')">
            <div class="card-icon">📊</div>
            <h3 class="card-title">The Amazing Difference</h3>
            <p class="card-preview">
              When we look at how quickly people welcomed these two inventions, we see something truly remarkable. Let's compare their journeys...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <section class="ai-vs-internet-closing">
        <div class="closing-card">
          <p class="closing-quote">
            "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."
          </p>
          <p class="closing-attribution">— Bill Gates, but Fred Rogers would agree: It's the human connection that matters most.</p>
        </div>
      </section>

      <!-- Kiosk Mode Overlay -->
      <app-kiosk-overlay></app-kiosk-overlay>
    </div>
  `,
  styleUrls: ['./ai-vs-internet-rogers.component.css', '../shared/kiosk.css']
})
export class AiVsInternetComponent implements AfterViewInit {
  
  constructor(private kioskService: KioskService) {}

  private milestoneData = new Map([
    ['internet-story', {
      title: 'The Internet\'s Patient Journey',
      text: 'The Internet didn\'t happen overnight, neighbor. It took time - lots and lots of time. Starting in the 1990s, it took about 7 and a half years for the Internet to reach 100 million people. That might sound like a long time, but it was actually quite remarkable!\n\nYou see, the Internet needed so many things to work. People needed to buy computers, which were expensive. They needed phone lines and modems. Companies had to build networks and lay cables. And everyone had to learn how to use these new tools.\n\nIt was like building a neighborhood from scratch - you need roads, houses, and time for people to move in and make friends. The Internet was building all of that, one step at a time.'
    }],
    ['milestone-internet-modem', { 
      title: 'The Dial-Up Days',
      text: 'Do you remember the sound a modem made? It went "beep-beep-boop-boop-screeeeech!" Some people found it annoying, but to others, it was the sound of connection - the sound of reaching out to the wider world.\n\nIn the 1980s and early 1990s, if you wanted to use the Internet at home, you used something called a "modem." It connected your computer to the phone line. The connection was very slow - imagine trying to pour a gallon of water through a tiny straw. That\'s how slow it was!\n\nAnd here\'s something interesting: while you were using the Internet, nobody could call your house on the phone. The line was busy! Families had to take turns and be patient with each other. It taught us something about sharing and consideration for others.'
    }],
    ['milestone-internet-mosaic', {
      title: '1993: Pictures on the Web',
      text: 'In 1993, something wonderful happened. A group of people created a program called "Mosaic," and it changed everything. Before Mosaic, the Internet was mostly just words - like reading a book on a screen.\n\nBut Mosaic? Mosaic could show you pictures right alongside the words! Imagine opening a door and seeing a whole new colorful world. That\'s what Mosaic did for millions of people.\n\nSuddenly, the Internet wasn\'t just for scientists and computer experts anymore. Regular people - teachers, artists, shopkeepers, parents - could explore and enjoy it. This was when the Internet really started to feel like a place where everyone was welcome. And that\'s a beautiful thing.'
    }],
    ['milestone-internet-aol', {
      title: '1995: "You\'ve Got Mail!"',
      text: 'Remember "You\'ve Got Mail!"? For many people, that friendly voice greeting was their first real experience with the Internet. Companies like America Online - we called it AOL - made the Internet simple and welcoming.\n\nYou didn\'t need to be a technical expert. AOL gave you everything in one place: email to write to friends, chat rooms to meet new people, and news to stay informed. It was like having a friendly neighbor who helped you get settled into a new community.\n\nFor millions of families in the mid-1990s, AOL wasn\'t just a service - it WAS the Internet. And that was okay! Sometimes we need someone to help us take those first steps into something new. It\'s one of the ways we learn and grow together.'
    }],
    ['milestone-internet-broadband', {
      title: 'c. 2000: Always Connected',
      text: 'Around the year 2000, something called "broadband" came along, and oh my, what a change it was! Instead of that slow dial-up modem, broadband was like opening a big, wide door instead of squeezing through a tiny opening.\n\nThe Internet was suddenly much, much faster. But more than that - it was always there. You didn\'t have to connect and disconnect anymore. Your Internet connection was just... on. Ready whenever you needed it.\n\nThis meant you could watch videos, play games with friends far away, and download things that would have taken hours before. The Internet went from being something you "visited" to something that was woven into your daily life - like electricity or running water. It was always there, quietly helping in the background.'
    }],
    ['milestone-internet-iphone', {
      title: '2007: Internet in Your Pocket',
      text: 'In 2007, Steve Jobs stood on a stage and showed the world something magical: a phone that could do almost everything a computer could do, and you could carry it in your pocket!\n\nThe iPhone meant you could check the Internet anywhere - on the bus, at the park, waiting in line at the grocery store. You didn\'t need to go home and sit at a desk anymore. The Internet came with you, like a helpful friend who\'s always there when you need them.\n\nThis changed how we think about connection. We were no longer tied to a place - we were free to explore, learn, and connect from anywhere. And that opened up so many possibilities for how we live, work, and stay in touch with the people we care about.'
    }],
    ['ai-story', {
      title: 'AI\'s Swift Arrival',
      text: 'Now, neighbor, let\'s talk about Generative AI, and here\'s where things get really interesting. Remember how I said it took the Internet 7 and a half years to reach 100 million people? Well, ChatGPT - the AI tool that started this new era - reached 100 million people in just 2 months. Two months!\n\nWhy was AI so much faster? Well, it had some big advantages. First, the Internet had already done all the hard work of connecting people. The roads were already built! Second, you didn\'t need to buy anything new - if you had a web browser, you were ready to try AI.\n\nBut there\'s something deeper here. AI arrived at a moment when the world was ready for it. We\'d already learned to use computers and the Internet. We were comfortable with technology. So when AI came along, we didn\'t have to learn everything from scratch - we just had to learn one new thing: how to talk to an AI.\n\nIt\'s like the difference between learning to drive when cars were brand new (you had to learn everything!) versus learning to drive when everyone already drives (you just need to learn the skills, not invent the whole idea of driving). That\'s the gift the Internet gave to AI - a world that was ready and waiting.'
    }],
    ['milestone-ai-foundations', {
      title: '1950s-2010s: The Long Dream',
      text: 'The story of AI actually begins a long, long time ago - back in the 1950s! Scientists and dreamers wondered: "Could we make a machine that thinks like a person?"\n\nFor decades - longer than most of us have been alive - people worked on this dream. They made progress, little by little, but it was slow going. They faced a big problem: the computers just weren\'t powerful enough yet to make their dreams real.\n\nIt\'s a bit like someone in 1920 dreaming of going to the moon. The dream was beautiful and the ideas were smart, but the technology wasn\'t quite there yet. Sometimes, we have to be very patient with our dreams. We plant seeds, water them, and wait for the right season for them to bloom.\n\nAnd that\'s okay. Good things often take time. The scientists who worked on AI in those early years were planting seeds for a garden they might never see in full bloom. That\'s a special kind of kindness - working on something that will help people you\'ll never meet.'
    }],
    ['milestone-ai-gpu', {
      title: '2012: The Gaming Gift',
      text: 'Here\'s something wonderful and a little bit surprising: the breakthrough that helped AI happened because of video games!\n\nYou see, companies that made video games needed special computer chips called GPUs to make games look beautiful and run smoothly. These chips were really, really good at doing lots of calculations at the same time.\n\nIn 2012, some clever scientists realized: "Hey! These gaming chips would be perfect for training AI!" And they were right. It was like discovering that the tool you\'d been using for one job was exactly perfect for a completely different job you\'d been trying to do.\n\nThis is a lovely reminder that innovation often comes from unexpected places. Sometimes, a tool created for play becomes the key to solving serious problems. Games brought joy to millions of people, and then - as a wonderful bonus - they helped create the technology that would become AI. That\'s the kind of beautiful surprise that makes technology so interesting.'
    }],
    ['milestone-ai-chatgpt', {
      title: 'November 30, 2022: Hello, ChatGPT!',
      text: 'On November 30, 2022, something extraordinary was shared with the world. A company called OpenAI introduced ChatGPT - an AI that could chat with you just like talking to a thoughtful friend.\n\nPeople were amazed! You could ask it questions, ask it to write stories, help you solve problems, or just have a conversation. And it understood you! It felt less like using a computer program and more like talking to someone who was there to help.\n\nThe response was overwhelming. In just two months - that\'s about 60 days - 100 million people started using ChatGPT. That made it the fastest-growing application in history! Can you imagine? In the time it takes for two seasons to change, a hundred million neighbors around the world were trying this new tool.\n\nPeople were excited because ChatGPT didn\'t require you to learn complicated commands or take classes. You just talked to it using regular words, the way you\'d talk to anyone. That made it feel approachable and friendly - open to everyone, not just experts.'
    }],
    ['milestone-ai-gpt4', {
      title: 'March 2023: Seeing and Understanding',
      text: 'Just a few months after ChatGPT appeared, in March 2023, something even more wonderful happened. The next version, called GPT-4, learned a new skill: it could look at pictures and understand them!\n\nImagine showing a photo to a friend and having them tell you about it - what\'s in the picture, what it might mean, how it makes them feel. That\'s what GPT-4 could do. You could show it a drawing, a chart, a photograph, or even a math problem written on paper, and it could help you with it.\n\nAround the same time, other AI tools like Midjourney got really good at creating beautiful pictures from just your words. You could describe a sunset over a meadow, and the AI would paint it for you. Not with actual paint, but with computer graphics that looked like art.\n\nThis showed us that AI wasn\'t just about words anymore - it was about all the ways we communicate and create. And that opened up even more possibilities for how AI could help us express our ideas and bring our imaginations to life.'
    }],
    ['milestone-ai-sora', {
      title: 'February 2024: Moving Pictures from Words',
      text: 'By February 2024, AI learned to do something that seemed almost like magic: creating videos from just a description in words.\n\nOpenAI showed something called "Sora." You could type a sentence like "A cat playing piano in a cozy living room," and Sora would create a video of exactly that - with the cat\'s paws on the keys, the sunlight streaming through windows, everything moving and looking real.\n\nNow, Sora wasn\'t released for everyone to use yet. But showing it to the world was like opening a window to the future. It helped people see what might be possible: teachers creating custom educational videos, storytellers bringing their tales to life, or anyone with an idea being able to show it moving on a screen.\n\nEvery innovation builds on the ones that came before. First, AI learned to use words. Then it learned to create and understand pictures. Now it was learning to create moving pictures - videos! Each step forward opens new doors, and each door leads to new ways of learning, creating, and sharing with each other.'
    }],
    ['comparison', {
      title: 'The Amazing Difference',
      text: 'So let\'s put these two stories side by side, neighbor, and look at something truly remarkable.\n\nThe Internet, starting with the Mosaic browser in 1993, took about 7 and a half years to reach 100 million people. That\'s almost as long as elementary school! During that time, people had to buy computers, get Internet connections, learn new skills, and figure out what this new tool was good for.\n\nGenerative AI, starting with ChatGPT in November 2022, reached 100 million people in just 2 months. Two months! That\'s barely enough time to learn a new song or grow a tomato plant!\n\nWhy was AI so much faster? Well, there are a few beautiful reasons:\n\nFirst, AI didn\'t need to build its own roads - it traveled on the Internet\'s roads that were already there. Second, people didn\'t need to buy new equipment. If you had a computer or phone with Internet, you were ready. Third, AI was easy to use - you just talked to it. And fourth, the world was different in 2022 than in 1993. We had social media, so exciting news could spread around the whole world in minutes!\n\nThe Internet built the foundation, patiently, over decades. Then AI came along and could grow quickly because it was built on that strong foundation. It\'s like how a tree grows slowly for years, building strong roots, and then one spring it suddenly blooms with hundreds of flowers because the roots were ready.\n\nBoth journeys are important. Both are remarkable. And both remind us that technology is really about people - about us finding new ways to connect, learn, and help each other. That\'s what makes these stories so special.'
    }]
  ]);

  ngAfterViewInit(): void {
    // Initialize charts immediately since Chart.js is imported
    this.initializeCharts();
  }

  private initializeCharts(): void {
    // Note: Charts are not displayed in the Mr. Rogers style version
    // but we keep this method for potential future use
  }

  openKioskMode(milestoneId: string): void {
    const data = this.milestoneData.get(milestoneId);
    if (data) {
      // Convert the section content to a format the kiosk service can handle
      const allSections = Array.from(this.milestoneData.entries()).map(([id, section]) => ({
        id,
        title: section.title,
        text: section.text
      }));
      
      // Find the index of the current section
      const currentIndex = allSections.findIndex(s => s.id === milestoneId);
      
      // Open kiosk mode with navigation support
      this.kioskService.openKioskModeWithNavigation(allSections, currentIndex);
    }
  }
}