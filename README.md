# MyVolumeEnglish - Learn English through News

## Project Overview

**MyVolumeEnglish** is an innovative English learning platform that uses real news articles to help learners at different proficiency levels improve their English skills. The platform features a beautiful coral color scheme and categorizes articles by English proficiency level (CEFR: A1-C2).

### 🎨 Coral Color Scheme
- **Primary Coral**: `#FF7F50`
- **Light Coral**: `#FF9966`
- **Dark Coral**: `#FF6347`
- **Accent Coral**: `#FFB3A1`
- **Light Background**: `#FFE5D9`

All interface elements are styled in these coral tones for a cohesive, professional appearance.

---

## ✨ Features

### 1. **Level-Based Content**
- **Beginner (A1-A2)**: Simple vocabulary, short sentences, everyday topics
- **Intermediate (B1-B2)**: Moderate complexity, varied vocabulary, diverse topics
- **Advanced (C1-C2)**: Complex sentences, sophisticated vocabulary, nuanced topics

### 2. **Interactive Article Display**
- Beautiful card layout for articles
- Quick article preview with excerpt
- Full article reading in modal with vocabulary support
- Filtering by proficiency level

### 3. **Educational Support**
- Key vocabulary highlighting with definitions
- Learning tips included in each article
- Date and category information
- Easy-to-read layout

### 4. **Responsive Design**
- Mobile-friendly interface
- Works on phones, tablets, and desktops
- Optimized navigation for all screen sizes

### 5. **CNN News Integration**
- Framework for integrating real CNN articles
- Sample articles demonstrating the system
- Documentation for proper integration methods

---

## 📁 Project Structure

```
MyVolumeEnglish/
├── index.html          # Main webpage
├── styles.css          # Coral-themed styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

---

## 🚀 Quick Start

### Option 1: Direct Browser Opening
1. Navigate to the `MyVolumeEnglish` folder
2. Double-click `index.html` or right-click and select "Open with Browser"
3. The website will load in your default browser

### Option 2: Using Python's HTTP Server
If you want to run with a local server:

**Windows (PowerShell):**
```powershell
cd MyVolumeEnglish
python -m http.server 8000
# Then open: http://localhost:8000
```

**Mac/Linux:**
```bash
cd MyVolumeEnglish
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Option 3: Using Node.js HTTP Server
```bash
cd MyVolumeEnglish
npx http-server
```

### Option 2: Using Java HTTP Server (Recommended for Java Projects)

**Prerequisites:** Java 8 or higher installed. See [INSTALL-JAVA.md](INSTALL-JAVA.md) for installation.

**Windows Users - Double-click this file:**
- `run-server.bat` - Automatically compiles and starts the server

**Or manually:**
```powershell
cd MyVolumeEnglish
javac JavaServer.java
java JavaServer
```

**Mac/Linux Users:**
```bash
cd MyVolumeEnglish
bash run-server.sh
```

Then visit: **http://localhost:8080**

For detailed instructions, see [JAVA-SERVER.md](JAVA-SERVER.md)

### Option 3: Using Python's HTTP Server
If you want to run with a local server:

**Windows (PowerShell):**
```powershell
cd MyVolumeEnglish
python -m http.server 8000
# Then open: http://localhost:8000
```

**Mac/Linux:**
```bash
cd MyVolumeEnglish
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Option 4: Using Node.js HTTP Server
```bash
cd MyVolumeEnglish
npx http-server
```

---

## 📖 How to Use

### For Learners:

1. **Open the Website**
   - Open `index.html` in your web browser

2. **Select Your Level**
   - Click on one of the level cards: Beginner 🌱, Intermediate 🌿, or Advanced 🌳
   - Or use the filter buttons to filter articles

3. **Read an Article**
   - Click "Read More" or click on any article card
   - The article opens in a modal with full content
   - Vocabulary definitions are provided
   - Learning tips help you study effectively

4. **Filter by Category**
   - Use the filter buttons at the top to see all levels or specific levels
   - Articles are organized by topic

### Sample Articles Included

The website includes 7 sample articles across different levels:

- **Beginner**: Technology, Local Schools, Sports
- **Intermediate**: Climate, Health/Medical
- **Advanced**: Economy, Politics/Geopolitics

Each article includes:
- Title and excerpt
- Proficiency level classification
- Publication date
- Relevant vocabulary with definitions
- Learning tips

---

## 🔗 Integrating Real CNN Articles

### Method 1: Using CNN RSS Feed (Recommended)

CNN provides RSS feeds that are legal to use for educational purposes. You can fetch articles from:

```
CNN Top Stories: http://feeds.cnn.com/rss/edition.rss
CNN Business: http://feeds.cnn.com/rss/edition_business.rss
CNN World: http://feeds.cnn.com/rss/edition_world.rss
```

**Implementation Example:**
```javascript
async function fetchCNNArticles() {
    try {
        // Using a CORS proxy to fetch RSS (due to browser CORS restrictions)
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://feeds.cnn.com/rss/edition.rss');
        const data = await response.text();
        
        // Parse RSS XML and extract articles
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        
        const items = xmlDoc.getElementsByTagName("item");
        const cnnArticles = [];
        
        for (let i = 0; i < items.length; i++) {
            cnnArticles.push({
                title: items[i].getElementsByTagName("title")[0].textContent,
                link: items[i].getElementsByTagName("link")[0].textContent,
                description: items[i].getElementsByTagName("description")[0].textContent,
                pubDate: items[i].getElementsByTagName("pubDate")[0].textContent
            });
        }
        
        return cnnArticles;
    } catch (error) {
        console.error("Error fetching CNN articles:", error);
    }
}
```

### Method 2: Using a Backend Server

For production use, create a backend server that:
1. Fetches articles from CNN RSS feeds
2. Analyzes text complexity to determine proficiency level
3. Extracts key vocabulary
4. Serves articles to the frontend

**Backend Example (Node.js):**
```javascript
// backend/routes/articles.js
const express = require('express');
const rssParser = require('rss-parser');
const router = express.Router();

const parser = new rssParser();

router.get('/cnn-articles', async (req, res) => {
    try {
        const feed = await parser.parseURL('http://feeds.cnn.com/rss/edition.rss');
        
        const articles = feed.items.slice(0, 20).map(item => ({
            title: item.title,
            link: item.link,
            content: item.content,
            pubDate: item.pubDate,
            source: 'CNN'
        }));
        
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
```

### Method 3: Using Google News API

Create a free account at [Google News API](https://newsapi.org) and use their API to fetch CNN articles:

```javascript
async function fetchFromNewsAPI() {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(
        `https://newsapi.org/v2/everything?sources=cnn&sortBy=publishedAt&apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.articles;
}
```

### Important: Copyright & Attribution

⚠️ **CRITICAL**: Always:
1. **Check CNN's Terms of Service** before using their content
2. **Provide proper attribution** to CNN and journalists
3. **Link back to original articles** on CNN.com
4. **Use content for educational purposes only**
5. **Don't republish full articles without permission**
6. **Consider licensing** for commercial use

**Proper Attribution Format:**
```
Source: CNN
Article: [Title]
Author: [Author Name]
Date: [Publication Date]
Read full article: [Link to CNN]
```

---

## 🎯 Determining English Proficiency Levels

Articles are classified using the CEFR (Common European Framework of Reference) scale:

### Beginner (A1-A2)
- **Vocabulary**: 1,000-2,000 common words
- **Sentence Length**: 5-10 words average
- **Tenses**: Present simple, present continuous
- **Topics**: Daily life, basic events
- **Complexity**: Very simple, straightforward

### Intermediate (B1-B2)
- **Vocabulary**: 3,000-5,000 words
- **Sentence Length**: 10-15 words average
- **Tenses**: Mixed tenses, passive voice
- **Topics**: Current events, more complex subjects
- **Complexity**: Moderate, some challenging words

### Advanced (C1-C2)
- **Vocabulary**: 5,000+ words including specialized terms
- **Sentence Length**: 15+ words average
- **Tenses**: Complex structures, subordinate clauses
- **Topics**: Specialized, abstract subjects
- **Complexity**: High, sophisticated vocabulary

**Tools to Analyze Text Complexity:**
- [Hemingway Editor](https://hemingwayapp.com/) - Readability analysis
- [Textstat Library](https://pypi.org/project/textstat/) - Python library for text analysis
- [Flesch Reading Ease](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)

---

## 🛠️ Customization

### Changing Colors

Edit `styles.css` to change the coral theme:

```css
:root {
    --primary-coral: #FF7F50;     /* Change this */
    --light-coral: #FF9966;        /* Change this */
    --dark-coral: #FF6347;         /* Change this */
    --coral-accent: #FFB3A1;       /* Change this */
}
```

### Adding More Articles

Edit `script.js` and add articles to the `articles` array:

```javascript
{
    id: 8,
    title: "Your Article Title",
    level: "beginner", // or "intermediate" or "advanced"
    category: "Category Name",
    date: "2026-06-05",
    image: "📰",
    excerpt: "Short preview of the article...",
    content: "Full article content here...",
    vocabulary: [
        { word: "word1", definition: "definition" },
        { word: "word2", definition: "definition" }
    ]
}
```

### Changing the Website Title

Edit line 5 in `index.html`:
```html
<title>MyVolumeEnglish - Learn English through News</title>
```

---

## 🧪 Features Demo

### Interactive Elements:
- ✅ Level selection cards (clickable)
- ✅ Article filtering by level
- ✅ Article preview cards with hover effects
- ✅ Modal popup for full article reading
- ✅ Vocabulary highlighting
- ✅ Smooth scrolling navigation
- ✅ Responsive mobile design

### Keyboard Shortcuts:
- `Esc` - Close article modal

---

## 🆘 Troubleshooting

### Problem: Page won't load
**Solution**: Make sure all three files are in the same folder:
- index.html
- styles.css
- script.js

### Problem: Styling looks wrong
**Solution**: Clear your browser cache or open in incognito/private mode

### Problem: Articles don't display
**Solution**: Open browser developer console (F12) to check for JavaScript errors

### Problem: Images not showing
**Solution**: The website uses emoji icons (📱, 🌍, etc.). These should display on modern browsers.

---

## 📚 Learning Resources

### English Proficiency Standards
- [CEFR Official Framework](https://www.coe.int/en/web/common-european-framework-reference-levels)
- [Common Proficiency Descriptors](https://www.coe.int/en/web/portfolio)

### News Sources for English Learning
- CNN.com
- BBC News
- Reuters
- Associated Press
- Vox

### Tools for English Learners
- [Grammarly](https://www.grammarly.com/)
- [Oxford Dictionary API](https://developer.oxforddictionaries.com/)
- [English Vocabulary](https://learnenglish.britishcouncil.org/)

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Enable GitHub Pages in settings
3. Upload HTML, CSS, JS files
4. Access at: `username.github.io/MyVolumeEnglish`

### Option 2: Netlify (Free)
1. Go to [Netlify.com](https://netlify.com)
2. Drag and drop the folder
3. Instant deployment

### Option 3: Vercel (Free)
1. Go to [Vercel.com](https://vercel.com)
2. Import GitHub repository
3. Auto-deploys on push

### Option 4: Traditional Web Hosting
- Upload to any web hosting provider's public_html folder
- Accessible at your domain

---

## 📝 Next Steps & Enhancement Ideas

### Immediate Improvements:
1. ✅ Add real CNN articles (using RSS/API)
2. ✅ Create user accounts and progress tracking
3. ✅ Add quiz functionality
4. ✅ Implement vocabulary learning games
5. ✅ Add audio pronunciation (Web Speech API)

### Future Features:
- 📊 Progress dashboard
- 🎮 Interactive quizzes
- 🎵 Text-to-speech pronunciation
- 💾 Save favorite articles
- 📈 Learning statistics
- 🏆 Achievement badges
- 🌐 Multiple language support
- 📱 Mobile app

### Advanced Integration:
- Machine learning text difficulty analysis
- Automatic article classification by level
- Spaced repetition for vocabulary
- Natural language processing for comprehension
- Video lessons with subtitles

---

## 📞 Support & Contributing

### Found a Bug?
1. Check browser console for errors (F12)
2. Try clearing cache and reloading
3. Try in a different browser

### Want to Contribute?
1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

---

## 📄 License & Attribution

This project was created to demonstrate English learning through news articles.

**Credits:**
- Color Scheme: Coral/Orange Theme
- Layout: Responsive Grid Design
- Functionality: Vanilla JavaScript
- Sample Content: Educational demonstration

**Usage:**
- Free for educational use
- Free for personal use
- Commercial use requires proper CNN licensing

---

## 🎉 Thank You for Learning!

MyVolumeEnglish is designed to make learning English engaging and effective. By reading real news articles at your proficiency level, you'll:

- 📖 Build vocabulary in context
- 🗣️ Understand real English as it's used
- 🌍 Learn about the world
- 💪 Build confidence in reading
- 🚀 Progress to higher levels

**Keep learning and keep reading! 🌊**

---

*Created: June 5, 2026*  
*Last Updated: June 5, 2026*  
*Version: 1.0*  
*Status: Ready to Use*
