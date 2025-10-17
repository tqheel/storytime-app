import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KioskService } from '../services/kiosk.service';
import { KioskOverlayComponent } from '../components/kiosk-overlay.component';

interface AISection {
  title: string;
  content: string[];
}

@Component({
  selector: 'app-ai-best-practices',
  imports: [RouterLink, CommonModule, KioskOverlayComponent],
  template: `
    <div class="ai-best-practices-container">
      <header class="ai-header">
        <h1 class="ai-title">Working with Your AI Neighbors</h1>
        <p class="ai-subtitle">Best Practices for Generative AI Through Fred Rogers' Gentle Wisdom</p>
        <div class="ai-nav">
          <a routerLink="/home" class="ai-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

      <section class="ai-introduction">
        <div class="intro-card">
          <h2 class="intro-title">Hello, Neighbor!</h2>
          <p class="intro-text">
            Today, we're going to talk about something that might seem complicated at first, but I promise it's really quite wonderful. 
            We're going to learn about working with generative AI tools - those helpful computer friends that can write, create, 
            and solve problems with us. Just like how we learned to be good neighbors in our community, we can learn to be 
            good partners with AI.
          </p>
        </div>
      </section>

      <section class="ai-main-content">
        <h2 class="section-header">Understanding AI Together</h2>
        
        <div class="cards-grid">
          <!-- Effective Prompts Card -->
          <div class="ai-card" (click)="openKioskMode('prompts')">
            <div class="card-icon">💬</div>
            <h3 class="card-title">Effective Prompts</h3>
            <p class="card-preview">
              Learn how to talk to your AI friend clearly and kindly. Discover the four keys to writing prompts that get great results...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Custom Instructions Card -->
          <div class="ai-card" (click)="openKioskMode('custom-instructions')">
            <div class="card-icon">🎯</div>
            <h3 class="card-title">Custom Instructions</h3>
            <p class="card-preview">
              Teaching your AI about you is like introducing yourself to a new friend. Learn what to include and how to set helpful preferences...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Key Definitions Card -->
          <div class="ai-card" (click)="openKioskMode('definitions')">
            <div class="card-icon">📚</div>
            <h3 class="card-title">Key Definitions</h3>
            <p class="card-preview">
              Understand important words like LLM, tokens, prompts, and context windows - explained simply and gently...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Use Cases Card -->
          <div class="ai-card" (click)="openKioskMode('use-cases')">
            <div class="card-icon">🛠️</div>
            <h3 class="card-title">Use Cases</h3>
            <p class="card-preview">
              Discover how AI can help with your work - writing, brainstorming, organizing, and more. No technical skills needed...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Tool Comparison Card -->
          <div class="ai-card" (click)="openKioskMode('tool-comparison')">
            <div class="card-icon">🔧</div>
            <h3 class="card-title">Enterprise AI Tools</h3>
            <p class="card-preview">
              Compare ChatGPT, Microsoft 365 Copilot, GitHub Copilot, and AWS Q. Learn which tool is best for different needs...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Ethics Card -->
          <div class="ai-card" (click)="openKioskMode('ethics')">
            <div class="card-icon">💝</div>
            <h3 class="card-title">Ethics & Responsibility</h3>
            <p class="card-preview">
              Be honest about AI help, verify information, protect privacy, and use AI to enhance human connection, not replace it...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Common Pitfalls Card -->
          <div class="ai-card" (click)="openKioskMode('pitfalls')">
            <div class="card-icon">⚠️</div>
            <h3 class="card-title">Common Pitfalls</h3>
            <p class="card-preview">
              Gentle warnings about over-relying on first responses, forgetting your expertise, and expecting perfection...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Security Card -->
          <div class="ai-card" (click)="openKioskMode('security')">
            <div class="card-icon">🔒</div>
            <h3 class="card-title">Security & Privacy</h3>
            <p class="card-preview">
              Best practices for keeping your information safe, using enterprise tools, and following company policies...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>

          <!-- Conclusion Card -->
          <div class="ai-card" (click)="openKioskMode('conclusion')">
            <div class="card-icon">🏡</div>
            <h3 class="card-title">What Will You Create?</h3>
            <p class="card-preview">
              AI tools are here to help you do your work better, faster, and more creatively. You bring the wisdom and human touch...
            </p>
            <div class="card-expand-hint">Click to explore →</div>
          </div>
        </div>
      </section>

      <section class="ai-closing">
        <div class="closing-card">
          <p class="closing-quote">
            "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind."
          </p>
          <p class="closing-attribution">— Fred Rogers</p>
        </div>
      </section>

      <!-- Kiosk Mode Overlay -->
      <app-kiosk-overlay></app-kiosk-overlay>
    </div>
  `,
  styleUrls: ['./ai-best-practices.component.css', '../shared/kiosk.css']
})
export class AiBestPracticesComponent {
  
  constructor(private kioskService: KioskService) {}

  private aiSections = new Map<string, AISection>([
    ['prompts', {
      title: 'Effective Prompts: Talking to Your AI Friend',
      content: [
        '**What is a Prompt?**\n\nA prompt is simply how you ask your AI friend for help. It\'s like when you ask a neighbor for directions - the clearer you are about where you want to go, the better directions they can give you.',
        '**The Four Keys to Good Prompts:**\n\n1. **Be Clear and Specific**: Instead of "Tell me about dogs," try "Tell me about three dog breeds that are good for families with young children who live in apartments."\n\n2. **Give Context**: Your AI friend doesn\'t know your situation unless you explain it. For example: "I\'m a small business owner with five employees. I need to write an email to my team about our new vacation policy."\n\n3. **Break Big Tasks into Smaller Steps**: If you need help with something complex, don\'t try to do it all at once. Ask for an outline first, then work on each section.\n\n4. **Ask for the Format You Want**: Do you need a list? A story? Bullet points? Tell your AI friend! "Please give me five tips in a numbered list."',
        '**Examples of Effective Prompts:**\n\n❌ Not So Clear: "Write something about my product."\n\n✓ Much Better: "Write a friendly 100-word description of my handmade candles for my small business website. The candles are made with soy wax and essential oils. My customers value natural products and supporting local artisans."\n\n❌ Not So Clear: "Help with my meeting."\n\n✓ Much Better: "I\'m leading a team meeting about our Q3 goals. Help me create a 5-item agenda that includes: reviewing last quarter\'s results, discussing new projects, and team building. The meeting is one hour long."'
      ]
    }],
    ['custom-instructions', {
      title: 'Custom Instructions: Teaching Your AI About You',
      content: [
        '**What Are Custom Instructions?**\n\nCustom instructions are like introducing yourself to a new friend. You\'re telling the AI about who you are, what you do, and how you like to work. Once you set these up, your AI friend remembers them and uses this information to help you better every time.',
        '**What to Include:**\n\n• **Your Role**: "I\'m a high school teacher" or "I work in healthcare administration"\n• **Your Goals**: "I often need help creating lesson plans" or "I frequently write reports for senior leadership"\n• **Your Preferences**: "I prefer simple language without jargon" or "I like detailed explanations with examples"\n• **Your Constraints**: "I work with confidential patient information, so never store specific details"',
        '**Example Custom Instructions:**\n\n**For a Teacher**: "I\'m a 9th grade English teacher. I often need help creating engaging lesson plans, writing prompts, and activity ideas. I prefer clear, structured responses with practical examples. My students enjoy interactive activities and real-world connections. Please keep suggestions appropriate for 14-15 year olds."\n\n**For a Business Leader**: "I\'m a department director in a non-profit organization. I frequently need help drafting communications for my team and board members. I value clear, warm, professional language. Please provide concise responses unless I ask for more detail."'
      ]
    }],
    ['definitions', {
      title: 'Key Definitions: Understanding the Language',
      content: [
        '**Large Language Model (LLM)**\n\nThink of an LLM as a very well-read friend who has studied millions of books, websites, and conversations. They can recognize patterns in language and use those patterns to help you write, think, and create. The "large" part means they\'ve learned from an enormous amount of information.\n\n**Token**\n\nA token is like a building block of language. It might be a word, part of a word, or even just a few letters. When you talk to an AI, it breaks your words into these small pieces to understand them better. Most AI tools have limits on how many tokens you can use in one conversation.',
        '**Prompt**\n\nA prompt is your question or request to the AI. It\'s how you start the conversation and explain what you need help with.\n\n**Context Window**\n\nImagine you\'re having a conversation with a friend, but they can only remember the last hour of what you talked about. That\'s a context window - it\'s how much of your conversation the AI can "remember" and use to help you. Newer AI tools have bigger context windows.',
        '**Training Data**\n\nThis is all the information the AI learned from before it started talking to you. Think of it like everything a person learned in school and from reading books - it\'s their knowledge base.\n\n**Hallucination**\n\nSometimes, AI makes things up - and it does so very confidently! This is called a hallucination. The AI might create facts, quotes, or references that sound real but aren\'t true. That\'s why it\'s important to verify important information.\n\n**Temperature**\n\nThis is like a creativity dial. Lower temperature means the AI is more careful and predictable - good for factual tasks. Higher temperature means the AI is more creative and varied - good for brainstorming.'
      ]
    }],
    ['use-cases', {
      title: 'Use Cases: How AI Can Help Your Work',
      content: [
        '**For Everyone - No Technical Skills Needed:**\n\n• **Writing Help**: Draft emails, reports, presentations, or social media posts\n• **Brainstorming**: Generate ideas for projects, events, or solutions\n• **Learning**: Understand complex topics explained simply\n• **Organizing**: Create outlines, to-do lists, or project plans\n• **Summarizing**: Condense long documents or articles\n• **Translation**: Communicate across languages',
        '**For Business Leaders:**\n\n• **Strategic Planning**: "Help me identify potential risks and opportunities for expanding into the European market."\n• **Communication**: "Draft talking points for my presentation to the board about our sustainability initiatives."\n• **Analysis**: "What are the key trends in remote work policies that we should consider?"\n• **Decision Support**: "Help me create a decision matrix for evaluating these three software vendors."',
        '**For Non-Technical Professionals:**\n\n• **Client Communication**: "Help me explain this technical issue to my client in simple terms."\n• **Process Improvement**: "I spend two hours each week on this task. Help me think of ways to streamline it."\n• **Training Materials**: "Create a simple guide for new employees on how to use our scheduling system."\n• **Problem Solving**: "I\'m having trouble with customer retention. Help me brainstorm potential causes and solutions."\n\n**What AI Is NOT Good For:**\n\n• Making important decisions without human judgment\n• Handling sensitive personal information (without enterprise tools)\n• Replacing human emotional understanding\n• Creating original research or accessing real-time data'
      ]
    }],
    ['tool-comparison', {
      title: 'Comparing Enterprise AI Tools',
      content: [
        '**ChatGPT Enterprise by OpenAI**\n\n✓ Best For: General writing, brainstorming, problem-solving, creative tasks\n✓ Strengths: Excellent at understanding context, strong creative writing, very flexible, can work with images\n✓ Ideal Users: Marketing teams, content creators, general business users\n✓ Privacy: Enterprise version keeps your data private and doesn\'t use it for training\n\nExample: "Help me draft a compelling product announcement" or "Brainstorm names for our new feature"',
        '**Microsoft 365 Copilot Enterprise**\n\n✓ Best For: Working within Microsoft tools - Word, Excel, PowerPoint, Outlook, Teams\n✓ Strengths: Deeply integrated with Office apps, can access SharePoint documents, helps with meeting summaries, creates presentations\n✓ Ideal Users: Organizations heavily using Microsoft 365, teams working extensively in Office\n✓ Privacy: Operates within your organization\'s Microsoft security framework\n\nExample: "Summarize this long email thread" or "Create a PowerPoint about Q3 results using data from this Excel file"',
        '**GitHub Copilot Enterprise**\n\n✓ Best For: Writing and understanding code - specifically for software developers\n✓ Strengths: Suggests code completions, writes entire functions, helps debug code, understands your codebase\n✓ Ideal Users: Software developers, development teams, technical professionals\n✓ Privacy: Enterprise version doesn\'t train on your code\n✓ Note: This is specialized for technical users who write code\n\nExample: "Write a function that validates email addresses" or "Help me debug this error"',
        '**AWS Q (Amazon Q Business)**\n\n✓ Best For: Answering questions about your company\'s information and AWS cloud services\n✓ Strengths: Connects to your organization\'s data sources, can answer using company-specific knowledge, integrated with AWS\n✓ Ideal Users: Organizations using AWS cloud services, teams needing AI for company-specific information\n✓ Privacy: Built on AWS security infrastructure, data stays in your AWS environment\n\nExample: "Find all documents about our product launch from last year" or "What\'s our policy on remote work?"',
        '**Which Tool Should You Choose?**\n\n→ Choose **ChatGPT Enterprise** for versatile, general-purpose AI across your organization\n\n→ Choose **Microsoft 365 Copilot** if your team lives in Microsoft Office apps\n\n→ Choose **GitHub Copilot** if you have software developers who write code daily\n\n→ Choose **AWS Q** if you use AWS cloud services and need AI for company-specific information\n\n**The Good News**: You\'re not limited to just one! Many organizations use different tools for different purposes. A marketing team might use ChatGPT, developers use GitHub Copilot, and everyone uses Microsoft 365 Copilot for daily Office work.'
      ]
    }],
    ['ethics', {
      title: 'Ethics and Responsible Use',
      content: [
        '**Be Honest About AI Help**\n\nWhen you use AI to help with work, it\'s kind to let others know. You don\'t need to announce every little thing, but for significant content or decisions, transparency matters.\n\nGood Practice: "I used AI to help draft this proposal, but I reviewed and customized it for our needs."\n\n**Respect Copyright and Ownership**\n\nAI learns from content created by others. When you create something with AI help, remember you\'re responsible for what you publish or share. For important documents, have a human expert review them.',
        '**Verify Important Information**\n\nRemember "hallucinations"? AI can sound very confident about things that aren\'t true. Always verify:\n• Facts and statistics\n• Quotes and citations\n• Technical specifications\n• Legal or medical information\n• Historical dates and events\n\nGood Practice: "Let me double-check that statistic before including it in my report."',
        '**Protect Privacy**\n\nNever share sensitive information with AI tools unless you\'re using an enterprise version with proper security:\n• Don\'t share other people\'s personal information\n• Don\'t paste confidential business data\n• Don\'t include passwords or security credentials\n• Don\'t share medical records or private financial information\n\nGood Practice: "Let me anonymize this data before asking AI for analysis."',
        '**Avoid Bias**\n\nAI learns from human writing, which means it can reflect human biases. Be thoughtful:\n• Review AI suggestions for fairness and inclusivity\n• Don\'t rely solely on AI for decisions affecting people\n• Consider diverse perspectives\n• Use your human judgment about what\'s fair and right\n\n**Use AI to Enhance, Not Replace, Human Connection**\n\nAI is wonderful for many tasks, but some things need the human touch:\n• Sensitive conversations with colleagues or clients\n• Decisions that affect people\'s jobs or wellbeing\n• Creative work that needs genuine human emotion\n• Building relationships and trust'
      ]
    }],
    ['pitfalls', {
      title: 'Common Pitfalls: Gentle Warnings',
      content: [
        '**Over-Relying on First Responses**\n\nThe first answer AI gives you isn\'t always the best. It\'s okay to ask follow-up questions, request refinements, or try different approaches. Just like a conversation with a friend, sometimes you need to go back and forth to get to the best answer.\n\n❌ Instead of Accepting: "Well, that\'s good enough."\n✓ Try This: "This is helpful, but can you make it more specific to my situation?" or "Can you give me three different versions to choose from?"',
        '**Forgetting to Add Your Expertise**\n\nYou know things AI doesn\'t know - your industry, your customers, your organization\'s culture. Always add your human expertise to AI outputs.\n\nRemember: AI gives you a starting point. You make it excellent by adding what you know.\n\n**Sharing Too Much Information**\n\nIt\'s easy to forget you\'re typing into a computer. Even with enterprise tools, be thoughtful about what you share. Ask yourself: "Would I be comfortable if others saw this?"',
        '**Not Checking for Accuracy**\n\nAI sounds confident even when it\'s wrong. For anything important, verify the facts. Check the numbers. Look up the references. Your judgment is irreplaceable.\n\n**Expecting Perfection**\n\nAI is a tool, and like all tools, it has limitations. Sometimes it misunderstands. Sometimes it gives odd suggestions. That\'s normal. Be patient, give better instructions, and remember - you\'re the one in charge.'
      ]
    }],
    ['security', {
      title: 'Security and Privacy Best Practices',
      content: [
        '**For Individual Users:**\n\n• Use strong, unique passwords for AI tool accounts\n• Enable two-factor authentication if available\n• Review privacy settings and adjust to your comfort level\n• Log out on shared or public computers\n• Regularly review privacy policies and settings',
        '**For Business Users:**\n\n• Use enterprise versions for stronger privacy protections\n• Understand where your data goes and how long it\'s stored\n• Follow company AI usage policies\n• Classify your data before using AI:\n  - Public: Fine with any tool\n  - Internal: Use approved enterprise tools only\n  - Confidential: Check with IT first\n  - Restricted: Don\'t use without explicit approval\n• Report concerns early to IT or security team',
        '**Questions to Ask About Any AI Tool:**\n\n1. Where is my data stored?\n2. Is my data used to train the AI model?\n3. How long is my data retained?\n4. Who can access my conversations?\n5. What happens to my data if I delete my account?\n6. Is there encryption for data in transit and at rest?\n7. Does this tool comply with regulations relevant to my industry (GDPR, HIPAA, etc.)?'
      ]
    }],
    ['conclusion', {
      title: 'What Will You Create, Neighbor?',
      content: [
        'Now you know the basics of working well with generative AI. You understand how to write clear prompts, set up helpful custom instructions, and choose the right tool for your needs. You know the words people use when they talk about AI. And most importantly, you know how to use these tools responsibly and ethically.',
        'AI tools are here to help you do your work better, faster, and more creatively. They\'re not here to replace you - they\'re here to support you. You bring the wisdom, the judgment, the creativity, and the human touch. AI brings speed, knowledge, and assistance.',
        'Remember what Mr. Rogers often said: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind."\n\nBe kind to yourself as you learn these new tools. Be kind to others by using AI responsibly. And be kind to your AI assistant by giving it clear, thoughtful prompts - you\'ll both do better work that way.',
        'Together, you and your AI neighbors can do wonderful things.\n\nWhat will you create today, neighbor?'
      ]
    }]
  ]);

  openKioskMode(sectionId: string): void {
    const section = this.aiSections.get(sectionId);
    if (section) {
      // Convert the section content array into a format the kiosk service can handle
      const allSections = Array.from(this.aiSections.entries()).map(([id, data]) => ({
        id,
        title: data.title,
        text: data.content.join('\n\n')
      }));
      
      // Find the index of the current section
      const currentIndex = allSections.findIndex(s => s.id === sectionId);
      
      // Open kiosk mode with navigation support
      this.kioskService.openKioskModeWithNavigation(allSections, currentIndex);
    }
  }
}
