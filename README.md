# MYSTERIA - Premium Cafe, Diner & Games

🎮 **Where Gaming Meets Gourmet Dining**

A luxury multi-page website for MYSTERIA gaming cafe featuring:
- Premium gourmet menu with real-time search and filtering
- Telegram-based order system (no cart required)
- Fully responsive design (mobile-first approach)
- Smooth animations and modern UI/UX
- Vanilla HTML/CSS/JavaScript (no frameworks)

## 📸 Features

- **4 Pages**: Home, Menu, Contact, Location
- **20 Menu Items**: Across 6 categories with high-quality images
- **Smart Search**: Real-time filtering by name, description, or category
- **Quick Order Modal**: Select item → Add quantity → Order form
- **Telegram Integration**: Orders sent instantly to your Telegram
- **Premium Design**: Inspired by Nobu & Soho House aesthetics
- **Fully Responsive**: Perfect on mobile, tablet, and desktop

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/unknownfriend00007/misteria-1.git
cd misteria-1
```

### 2. Configure Telegram Bot

Edit `contact.html` and replace:
```javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
```

**How to get these:**
1. **Bot Token**: Message [@BotFather](https://t.me/BotFather) on Telegram
   - Send `/newbot`
   - Follow prompts to create bot
   - Copy the token (looks like `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

2. **Chat ID**: Message [@userinfobot](https://t.me/userinfobot) on Telegram
   - It will reply with your chat ID (looks like `123456789`)

### 3. Launch Website

Simply open `index.html` in your browser, or host it on:
- GitHub Pages (free)
- Vercel (free)
- Netlify (free)
- Any web server

## 📜 File Structure

```
misteria-1/
├── index.html          # Home page
├── menu.html           # Menu with search/filter
├── contact.html        # Order form
├── location.html       # Address & hours
├── style.css           # All styles
├── script.js           # Navigation & animations
├── menu.js             # Menu functionality
├── menu.json           # Menu data (20 items)
└── README.md           # This file
```

## 🎨 Customization

### Change Colors
Edit `style.css` (lines 10-20):
```css
--navy: #0f1419;
--gold: #c9a961;
--cream: #f8f6f3;
```

### Update Menu
Edit `menu.json`:
```json
{
  "id": "unique-id",
  "name": "Dish Name",
  "description": "Delicious description",
  "price": 499,
  "category": "Main Course",
  "veg": true,
  "image": "https://images.unsplash.com/..."
}
```

### Change Contact Info
Update in all HTML files:
- Phone: `+91 98765 43210`
- Email: `info@mysteria.cafe`
- Address: `123 Marina Boulevard, Bangalore`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## 🎯 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations
- **JavaScript ES6+**: Vanilla JS (no jQuery)
- **Google Fonts**: Cormorant Garamond, Josefin Sans, Inter
- **Unsplash**: High-quality food images
- **Telegram Bot API**: Order processing

## 🔒 No Cart System?

This website doesn't use a traditional cart because:
1. ✅ Orders go directly to Telegram for manual processing
2. ✅ Simpler user flow (select → order form → done)
3. ✅ 80% less code to maintain
4. ✅ Still looks premium and professional

## 📝 Order Message Format

When someone places an order, you receive:

```
🍽️ NEW ORDER FROM MYSTERIA

👤 Name: John Doe
📞 Phone: +91 98765 43210
📧 Email: john@example.com

📋 ORDER:
Truffle Risotto x2 (₹1098)
Special: Extra cheese

💬 NOTES:
Please pack separately

🕒 Time: 11:30 PM, Jan 01, 2026
```

## ✨ Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Optimized

## 👨‍💻 Author

Built with ❤️ for gaming cafe enthusiasts

## 📝 License

Free to use for personal and commercial projects. No attribution required.

---

**Need help?** Open an issue or contact support.

**Enjoy your premium cafe website! 🍽️🎮**
