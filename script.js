/* ===========================
   MyVolumeEnglish JavaScript
   Article Management & Filtering
   =========================== */

// Sample articles data structure
// In production, these would come from a CNN API or RSS feed
const articles = [
    {
        id: 1,
        title: "Technology Company Launches New Product",
        level: "beginner",
        category: "Technology",
        date: "2026-06-05",
        image: "📱",
        excerpt: "A major technology company announced a new product today. The product is designed to help people stay connected. It is easy to use and has many features.",
        content: `A major technology company announced a new product today. The product is designed to help people stay connected. It is easy to use and has many features.

The company said the product will help people communicate better with their families and friends. Many people are excited about this new product.

The product will be available next month. People can buy it online or in stores near their homes.`,
        vocabulary: [
            { word: "launch", definition: "to start or introduce something new" },
            { word: "product", definition: "something that is made and sold" },
            { word: "feature", definition: "a special part or ability" },
            { word: "communicate", definition: "to share information or talk with someone" }
        ]
    },
    {
        id: 2,
        title: "Global Climate Summit Reaches Historic Agreement",
        level: "intermediate",
        category: "Environment",
        date: "2026-06-04",
        image: "🌍",
        excerpt: "World leaders gathered at the Global Climate Summit and agreed on a comprehensive plan to reduce carbon emissions. The agreement represents a significant milestone in international climate action...",
        content: `World leaders gathered at the Global Climate Summit and agreed on a comprehensive plan to reduce carbon emissions. The agreement represents a significant milestone in international climate action.

The conference lasted two weeks and brought together representatives from over 190 countries. Negotiations were complex, but delegates ultimately reached consensus on several key issues.

The plan includes specific targets for reducing greenhouse gases by 2030. Countries have committed to investing in renewable energy sources and sustainable transportation.

Environmental organizations praised the agreement, though some advocates argued that the targets do not go far enough. The implementation phase will begin immediately, with regular progress reports scheduled every six months.`,
        vocabulary: [
            { word: "comprehensive", definition: "complete and including all the important parts" },
            { word: "emission", definition: "gases or substances released into the air" },
            { word: "milestone", definition: "an important event or achievement" },
            { word: "consensus", definition: "a general agreement among a group" },
            { word: "renewable", definition: "able to be replaced naturally" }
        ]
    },
    {
        id: 3,
        title: "Economic Indicators Show Mixed Signals for Global Markets",
        level: "advanced",
        category: "Economy",
        date: "2026-06-03",
        image: "📈",
        excerpt: "Financial analysts are scrutinizing recent macroeconomic data, which presents a dichotomous picture of the global economy. While emerging markets demonstrate resilience, developed economies face headwinds...",
        content: `Financial analysts are scrutinizing recent macroeconomic data, which presents a dichotomous picture of the global economy. While emerging markets demonstrate resilience, developed economies confront substantial headwinds stemming from persistent inflationary pressures and geopolitical tensions.

The International Monetary Fund released a comprehensive assessment indicating that global growth projections require substantial downward revision. Specifically, the organization cites contractionary fiscal policies and elevated interest rates as primary impediments to sustained expansion.

Contemporaneous analysis from financial institutions reveals divergent trajectories across various asset classes. Equities have demonstrated volatility consonant with macroeconomic uncertainty, while fixed-income markets evidence compressed yields reflecting investor appetite for capital preservation.

Experts prognosticate that forthcoming monetary policy decisions will be instrumental in determining subsequent market trajectories. The confluence of cyclical headwinds and structural transformations necessitates heightened vigilance among portfolio managers.`,
        vocabulary: [
            { word: "scrutinizing", definition: "examining something very carefully and thoroughly" },
            { word: "dichotomous", definition: "divided into two contrasting or opposite groups" },
            { word: "macroeconomic", definition: "relating to the economy as a whole rather than individual parts" },
            { word: "resilience", definition: "the ability to recover quickly from difficulties" },
            { word: "headwinds", definition: "factors working against progress or growth" },
            { word: "inflationary", definition: "relating to a sustained increase in the general price level of goods" },
            { word: "impediments", definition: "barriers or obstacles that prevent progress" }
        ]
    },
    {
        id: 4,
        title: "Local School Wins National Education Award",
        level: "beginner",
        category: "Education",
        date: "2026-06-02",
        image: "🎓",
        excerpt: "A local school received a national award for excellent teaching. The school has worked hard to help students learn well. Teachers and students are very happy about this award.",
        content: `A local school received a national award for excellent teaching. The school has worked hard to help students learn well. Teachers and students are very happy about this award.

The award is given to schools that do great work in education. The school was selected because of their special programs and their dedicated teachers.

The principal said: "Our teachers work hard every day. We are proud of our students and their achievements." 

The school will use the award money to buy new computers and books for the students. Parents and community members celebrated the school's success.`,
        vocabulary: [
            { word: "award", definition: "a prize or recognition for good work" },
            { word: "dedicated", definition: "committed to doing something well" },
            { word: "achievement", definition: "something successfully accomplished" },
            { word: "principal", definition: "the head of a school" }
        ]
    },
    {
        id: 5,
        title: "Breakthrough in Medical Research Offers New Treatment Options",
        level: "intermediate",
        category: "Health",
        date: "2026-06-01",
        image: "🏥",
        excerpt: "Researchers at leading medical institutions have announced a significant breakthrough in treating a previously intractable disease. The experimental therapy has shown promising results in clinical trials...",
        content: `Researchers at leading medical institutions have announced a significant breakthrough in treating a previously intractable disease. The experimental therapy has shown promising results in clinical trials involving thousands of participants.

The new treatment approach represents a departure from conventional methodologies. Rather than targeting symptoms, the innovative protocol addresses the underlying biological mechanisms of the disease.

Clinical trial data indicates a 78% efficacy rate among participants, substantially exceeding previous treatments. Moreover, adverse effects were minimal and manageable, with most participants reporting improved quality of life metrics.

The pharmaceutical company responsible for the development has initiated regulatory proceedings for approval. Medical professionals anticipate availability within 18-24 months, contingent upon regulatory authorization.

This development carries profound implications for millions of patients worldwide who have limited therapeutic options.`,
        vocabulary: [
            { word: "breakthrough", definition: "a sudden, important discovery or development" },
            { word: "intractable", definition: "difficult or impossible to treat or solve" },
            { word: "experimental", definition: "based on or relating to experience or experiment" },
            { word: "clinical trials", definition: "tests of a new medical treatment on human volunteers" },
            { word: "efficacy", definition: "the ability to produce desired effect" },
            { word: "adverse", definition: "negative or harmful" }
        ]
    },
    {
        id: 6,
        title: "Sports Team Makes Historic Victory",
        level: "beginner",
        category: "Sports",
        date: "2026-05-31",
        image: "⚽",
        excerpt: "A popular sports team won an important game yesterday. The team played very well and scored many points. Fans were very excited and happy about the win.",
        content: `A popular sports team won an important game yesterday. The team played very well and scored many points. Fans were very excited and happy about the win.

The game was very close and exciting. Both teams tried their best to win. In the final minutes, the home team scored the winning goal.

Thousands of fans cheered and celebrated in the stadium. People on the streets outside also celebrated the team's success.

The coach said: "I am very proud of my team. They worked hard and played together as a family." The team will play another important game next week.`,
        vocabulary: [
            { word: "victory", definition: "a win or success" },
            { word: "score", definition: "to get points in a game" },
            { word: "stadium", definition: "a large building where sports games are played" },
            { word: "coach", definition: "a person who trains players for a sport" }
        ]
    },
    {
        id: 7,
        title: "Geopolitical Tensions Escalate Amid Territorial Disputes",
        level: "advanced",
        category: "Politics",
        date: "2026-05-30",
        image: "🌐",
        excerpt: "Escalating geopolitical tensions have reached a critical juncture, with multiple states employing increasingly bellicose rhetoric regarding contested maritime boundaries. Diplomatic initiatives have yielded limited progress...",
        content: `Escalating geopolitical tensions have reached a critical juncture, with multiple states employing increasingly bellicose rhetoric regarding contested maritime boundaries. Diplomatic initiatives have yielded limited substantive progress, exacerbating fears of potential confrontation.

Intelligence agencies from allied nations have characterized the situation as approaching a critical threshold. Military posturing has intensified concomitantly, with adversarial powers conducting provocative exercises near disputed territories.

International organizations have convened emergency sessions to deliberate potential interventions. However, structural impediments to consensus—rooted in divergent strategic interests—have substantially constrained multilateral efficacy.

Economists prognosticate that protracted tensions could precipitate substantial disruptions to global supply chains and financial markets. The confluence of military escalation and economic vulnerability necessitates expeditious diplomatic resolution.

Expert analysts maintain that de-escalation mechanisms, though challenging to implement, remain essential for forestalling more severe geopolitical conflagration.`,
        vocabulary: [
            { word: "geopolitical", definition: "relating to politics and geography, especially conflicts between nations" },
            { word: "juncture", definition: "a point in time, especially one that is important or critical" },
            { word: "bellicose", definition: "eager or quick to start fights or conflicts" },
            { word: "rhetoric", definition: "the art of using language to persuade or influence" },
            { word: "contested", definition: "disputed or claimed by more than one party" },
            { word: "concomitantly", definition: "occurring at the same time" },
            { word: "expeditious", definition: "done quickly and efficiently" }
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayArticles(articles);
});

/**
 * Display articles in the grid
 * @param {Array} articlesToDisplay - Array of articles to display
 */
function displayArticles(articlesToDisplay) {
    const articlesGrid = document.getElementById('articlesGrid');
    
    if (!articlesToDisplay || articlesToDisplay.length === 0) {
        articlesGrid.innerHTML = '<div class="loading">No articles found for this level.</div>';
        return;
    }

    articlesGrid.innerHTML = articlesToDisplay.map(article => `
        <div class="article-card" onclick="openArticle(${article.id})">
            <div class="article-image">${article.image}</div>
            <div class="article-content">
                <span class="article-level ${article.level}">${article.level.toUpperCase()}</span>
                <h3 class="article-title">${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-meta">
                    <span class="article-date">📅 ${formatDate(article.date)}</span>
                    <button class="read-btn" onclick="event.stopPropagation(); openArticle(${article.id})">Read More</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Filter articles by level
 * @param {String} level - The English level to filter by
 */
function filterByLevel(level) {
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter articles
    if (level === 'all') {
        displayArticles(articles);
    } else {
        const filtered = articles.filter(article => article.level === level);
        displayArticles(filtered);
    }
}

/**
 * Open article in modal
 * @param {Number} articleId - The ID of the article to open
 */
function openArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const modalBody = document.getElementById('modalBody');
    const levelColorClass = article.level === 'beginner' ? 'beginner' : 
                           article.level === 'intermediate' ? 'intermediate' : 'advanced';

    const levelText = article.level.charAt(0).toUpperCase() + article.level.slice(1);

    modalBody.innerHTML = `
        <h2>${article.title}</h2>
        <span class="article-level ${levelColorClass}">Level: ${levelText}</span>
        <p style="color: #7f8c8d; margin-top: 1rem;">📅 ${formatDate(article.date)} | 📂 ${article.category}</p>
        
        <div style="margin-top: 2rem; line-height: 1.8;">
            ${article.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>

        <div class="vocabulary-section">
            <h3>📚 Key Vocabulary</h3>
            ${article.vocabulary.map(vocab => `
                <div class="vocabulary-item">
                    <div class="vocabulary-word">${vocab.word}</div>
                    <div class="vocabulary-definition">${vocab.definition}</div>
                </div>
            `).join('')}
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; background: #f0f0f0; border-radius: 8px;">
            <h3 style="color: #FF7F50; margin-bottom: 1rem;">📖 Learning Tips</h3>
            <ul style="margin-left: 1.5rem; line-height: 1.8;">
                <li>Read the article slowly and carefully</li>
                <li>Look up any words you don't understand</li>
                <li>Try to summarize the article in your own words</li>
                <li>Discuss the article with friends</li>
                <li>Return to this article later to review</li>
            </ul>
        </div>
    `;

    const modal = document.getElementById('articleModal');
    modal.classList.add('show');
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('show');
}

/**
 * Close modal when clicking outside
 */
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}

/**
 * Scroll to articles section
 */
function scrollToArticles() {
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Format date to readable format
 * @param {String} dateString - Date in YYYY-MM-DD format
 * @returns {String} Formatted date
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Add keyboard shortcut to close modal
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
