import { useMemo, useState } from "react";
import kathakaliRgb from "./assets/kathakali-rgb.png";
import mascotRgb from "./assets/udupi-mascot-rgb.png";

type MenuItem = {
  name: string;
  price: number;
  popular?: boolean;
};

type MenuSection = {
  id: string;
  title: string;
  eyebrow: string;
  items: MenuItem[];
};

const menu: MenuSection[] = [
  {
    id: "idli-vada",
    title: "Idli & Vada",
    eyebrow: "Soft, crisp & comforting",
    items: [
      { name: "Idli Sambhar", price: 70, popular: true },
      { name: "Vada Sambhar", price: 90 },
      { name: "Idli Vada", price: 80 },
      { name: "Fried Idli", price: 90 },
      { name: "Ghee Podi Idli", price: 110, popular: true },
      { name: "Masala Idli", price: 100 },
      { name: "Cheese Masala Idli", price: 120 },
      { name: "Rasam Idli", price: 85 },
      { name: "Rasam Vada", price: 100 },
      { name: "Dahi Vada", price: 80 },
    ],
  },
  {
    id: "fusion",
    title: "Fusion Dishes",
    eyebrow: "A playful Udupi twist",
    items: [
      { name: "Masala Boondi", price: 100 },
      { name: "Cheese Masala Boondi", price: 130 },
      { name: "Idli Chilli", price: 150, popular: true },
      { name: "Idli 65", price: 160 },
    ],
  },
  {
    id: "dosa",
    title: "Authentic Dosa",
    eyebrow: "Golden, crisp & made fresh",
    items: [
      { name: "Plain Dosa", price: 100 },
      { name: "Masala Dosa", price: 110, popular: true },
      { name: "Butter Plain Dosa", price: 115 },
      { name: "Butter Masala Dosa", price: 125 },
      { name: "Onion Masala Dosa", price: 120 },
      { name: "Garlic Masala Dosa", price: 120 },
      { name: "Onion Garlic Masala Dosa", price: 130 },
      { name: "Paneer Masala Dosa", price: 140 },
      { name: "Cheese Plain Dosa", price: 130 },
      { name: "Cheese Masala Dosa", price: 145 },
      { name: "Mysore Plain Dosa", price: 130 },
      { name: "Mysore Masala Dosa", price: 150, popular: true },
    ],
  },
  {
    id: "speciality",
    title: "Our Speciality",
    eyebrow: "House favourites",
    items: [
      { name: "Paneer Mysore Masala Dosa", price: 160 },
      { name: "Cheese Mysore Masala Dosa", price: 170 },
      { name: "Cheese Garlic Masala Dosa", price: 170 },
      { name: "Cheese Corn Masala Dosa", price: 170 },
      { name: "Ghee Podi Masala Dosa", price: 190, popular: true },
      { name: "Udupi Special Dosa", price: 200, popular: true },
    ],
  },
  {
    id: "rava",
    title: "Rava Dosa",
    eyebrow: "Lacy & extra crisp",
    items: [
      { name: "Rava Plain Dosa", price: 110 },
      { name: "Rava Masala Dosa", price: 125, popular: true },
      { name: "Rava Onion Plain Dosa", price: 135 },
      { name: "Rava Onion Masala Dosa", price: 145 },
      { name: "Cheese Rava Plain Dosa", price: 160 },
      { name: "Cheese Rava Masala Dosa", price: 170 },
    ],
  },
  {
    id: "paper",
    title: "Crispy Paper Dosa",
    eyebrow: "Dramatically crisp",
    items: [
      { name: "Paper Plain Dosa", price: 120 },
      { name: "Butter Paper Plain Dosa", price: 135 },
      { name: "Paper Masala Dosa", price: 150, popular: true },
      { name: "Butter Paper Masala Dosa", price: 160 },
      { name: "Cheese Paper Plain Dosa", price: 170 },
      { name: "Cheese Paper Masala Dosa", price: 190 },
      { name: "Chatpata Paper Plain Dosa", price: 150 },
    ],
  },
  {
    id: "uttapam-rice",
    title: "Uttapam & Rice",
    eyebrow: "Hearty southern classics",
    items: [
      { name: "Onion Uttapam", price: 135 },
      { name: "Tomato Uttapam", price: 135 },
      { name: "Mix Uttapam", price: 145 },
      { name: "Paneer Mix Uttapam", price: 160 },
      { name: "Cheese Uttapam", price: 170 },
      { name: "Masala Uttapam", price: 150 },
      { name: "Udupi Special Uttapam", price: 200, popular: true },
      { name: "Rasam Rice", price: 130 },
      { name: "Curd Rice", price: 140 },
      { name: "Lemon Rice", price: 140 },
      { name: "Tomato Rice", price: 140 },
      { name: "Coconut Rice", price: 150 },
    ],
  },
  {
    id: "pavbhaji",
    title: "Pavbhaji & Pulav",
    eyebrow: "Mumbai favourites",
    items: [
      { name: "Pavbhaji", price: 110, popular: true },
      { name: "Butter Pavbhaji", price: 130 },
      { name: "Paneer Pavbhaji", price: 140 },
      { name: "Cheese Pavbhaji", price: 150 },
      { name: "Jain Pavbhaji", price: 130 },
      { name: "Tadka Pavbhaji", price: 150 },
      { name: "Pulav", price: 130 },
      { name: "Butter Pulav", price: 150 },
      { name: "Paneer Pulav", price: 160 },
      { name: "Cheese Pulav", price: 170 },
      { name: "Bhaji Pulav", price: 150 },
      { name: "Jain Pulav", price: 140 },
    ],
  },
  {
    id: "chinese",
    title: "Chinese Dishes",
    eyebrow: "Wok-fired favourites",
    items: [
      { name: "Veg Manchurian", price: 170, popular: true },
      { name: "Paneer Chilli", price: 220 },
      { name: "Veg Fried Rice", price: 170 },
      { name: "Veg Schezwan Rice", price: 180 },
      { name: "Veg Manchurian Rice", price: 190 },
      { name: "Veg Hakka Noodles", price: 180 },
      { name: "Veg Schezwan Noodles", price: 190 },
      { name: "Veg Manchurian With Noodles", price: 190 },
      { name: "Veg Crispy", price: 190 },
      { name: "Potato Chilli", price: 170 },
      { name: "Wok Tossed Mix Noodles", price: 190 },
      { name: "Veg Singapuri Noodles", price: 200 },
      { name: "Honey Chilly Potato", price: 210 },
      { name: "Paneer 65", price: 220 },
      { name: "Veg Singapuri Rice", price: 200 },
      { name: "Crispy Corn", price: 200 },
    ],
  },
  {
    id: "beverages",
    title: "Add More & Beverages",
    eyebrow: "The perfect finish",
    items: [
      { name: "French Fries", price: 80 },
      { name: "Extra Butter", price: 20 },
      { name: "Extra Cheese", price: 30 },
      { name: "Extra Curd (Regular / Sweet)", price: 35 },
      { name: "Extra Pav", price: 12 },
      { name: "Water Bottle", price: 20 },
      { name: "Cold Drink", price: 15 },
      { name: "Butter Milk", price: 35 },
      { name: "Lassi", price: 50 },
      { name: "Filter Coffee", price: 60, popular: true },
    ],
  },
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=900&q=85",
    alt: "Crispy dosa with chutneys and sambhar",
    title: "Authentic dosa",
    note: "Crisp from the tawa",
  },
  {
    src: "https://images.unsplash.com/photo-1788621879512-0aefb7a774ff?auto=format&fit=crop&w=700&q=85",
    alt: "Spiced idli served on a banana leaf",
    title: "Ghee podi idli",
    note: "Soft, warm, soulful",
  },
  {
    src: "https://images.unsplash.com/photo-1788619378696-c77352c43a88?auto=format&fit=crop&w=700&q=85",
    alt: "Traditional South Indian meal on banana leaves",
    title: "Southern flavours",
    note: "Made with tradition",
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4C12 4 5.5 7.5 5.5 14.5c0 2.3 1.8 4.5 4.8 4.5C17 19 20 12 20 4Z" />
      <path d="M4 21c2.5-5.5 6.5-9.4 12-12" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 3.5 9 8l-2 2c1.3 3 3.7 5.4 6.7 6.7l2-2 4.5 2.5-.7 3.3c-.2.9-1 1.5-2 1.5C9 22 2 15 2 6.5c0-1 .6-1.8 1.5-2l3-.7Z" />
    </svg>
  );
}

function RestaurantLogo({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`restaurant-logo${footer ? " restaurant-logo-footer" : ""}`}>
      <img className="mascot-logo" src={mascotRgb} alt="" />
      <span>
        <strong>UDUPI</strong>
        <small>RESTAURANT</small>
        {footer && <em>Authentic South Indian Cuisine</em>}
      </span>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const filteredMenu = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return menu;
    return menu
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(normalized),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  const resultCount = filteredMenu.reduce(
    (total, section) => total + section.items.length,
    0,
  );

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Udupi Restaurant home">
          <RestaurantLogo />
        </a>
        <a
          className="location-link"
          href="https://maps.google.com/?q=Laksh+Prime+Opp+Town+Hall+Anand"
          target="_blank"
          rel="noreferrer"
        >
          <PinIcon />
          <span>Anand</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Since 2016
            <span />
          </div>
          <p className="kannada">ಉಡುಪಿ</p>
          <h1>Tradition,<br />served fresh.</h1>
          <p className="hero-sub">
            Authentic South Indian cuisine, made with time-honoured recipes
            and plenty of heart.
          </p>
          <div className="hero-meta">
            <span className="veg-pill"><i /> 100% Vegetarian</span>
            <span>Open today · 8:00 AM – 11:00 PM</span>
          </div>
          <a className="primary-button" href="#menu">
            Explore our menu
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-image">
          <img src={photos[0].src} alt={photos[0].alt} />
          <div className="image-label">
            <small>Fresh from the tawa</small>
            <strong>Golden. Crisp. Perfect.</strong>
          </div>
          <div className="corner corner-top" />
          <div className="corner corner-bottom" />
        </div>
      </section>

      <section className="story-strip" aria-label="Restaurant values">
        <div><strong>08</strong><span>Years of tradition</span></div>
        <div><strong>95</strong><span>Vegetarian dishes</span></div>
        <div><strong>20m</strong><span>Prepared fresh</span></div>
      </section>

      <section className="featured">
        <div className="section-intro">
          <p className="eyebrow-text">A taste of Karnataka</p>
          <h2>Made fresh. Served with soul.</h2>
          <p>Familiar flavours, fragrant spices, and the warmth of a meal made for you.</p>
        </div>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <article className={`photo-card photo-card-${index + 1}`} key={photo.title}>
              <img src={photo.src} alt={photo.alt} />
              <div>
                <small>{photo.note}</small>
                <h3>{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-intro menu-heading">
          <p className="eyebrow-text">Explore the menu</p>
          <h2>What are you craving?</h2>
        </div>

        <div className="search-wrap">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search dosa, idli, coffee..."
            aria-label="Search menu"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>

        {!query && (
          <nav className="category-nav" aria-label="Menu categories">
            {menu.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.title}</a>
            ))}
          </nav>
        )}

        {query && (
          <p className="result-count">
            {resultCount} {resultCount === 1 ? "dish" : "dishes"} found
          </p>
        )}

        <div className="menu-list">
          {filteredMenu.map((section, sectionIndex) => (
            <article className="menu-card" id={section.id} key={section.id}>
              <div className="menu-card-head">
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p>{section.eyebrow}</p>
                  <h3>{section.title}</h3>
                </div>
                <LeafIcon />
              </div>
              <div className="items-grid">
                {section.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div>
                      <h4>{item.name}</h4>
                      {item.popular && <span className="popular">Guest favourite</span>}
                    </div>
                    <span className="dots" />
                    <strong><small>₹</small>{item.price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredMenu.length === 0 && (
          <div className="empty-state">
            <LeafIcon />
            <h3>No dishes found</h3>
            <p>Try searching for dosa, rice, paneer or coffee.</p>
            <button type="button" onClick={() => setQuery("")}>View full menu</button>
          </div>
        )}
      </section>

      <section className="visit">
        <div className="visit-copy">
          <p className="eyebrow-text">Come dine with us</p>
          <h2>Good food is always worth the journey.</h2>
          <address>
            Laksh Prime, Opp. Town Hall<br />
            Anand, Gujarat
          </address>
          <div className="visit-actions">
            <a href="tel:+919574188701"><PhoneIcon /> +91 95741 88701</a>
            <a
              href="https://maps.google.com/?q=Laksh+Prime+Opp+Town+Hall+Anand"
              target="_blank"
              rel="noreferrer"
            >
              <PinIcon /> Get directions
            </a>
          </div>
        </div>
        <div className="temple-art" aria-hidden="true">
          <span className="sun" />
          <svg viewBox="0 0 500 330">
            <path d="M40 300h420M90 300V190h320v110M125 190V140h250v50M155 140V92h190v48M190 92V56h120v36M218 56V25h64v31M238 25 250 5l12 20M110 220h280M135 165h230M170 115h160M205 75h90M145 300v-62h45v62M228 300v-82h44v82M310 300v-62h45v62M80 300l-30-35M420 300l30-35" />
          </svg>
        </div>
      </section>

      <section className="menu-rules" aria-labelledby="rules-title">
        <img className="kathakali-mark" src={kathakaliRgb} alt="" />
        <div className="rules-heading">
          <p className="eyebrow-text">Good to know</p>
          <h2 id="rules-title">Before you order</h2>
          <p>A few notes so we can serve every meal fresh and at its best.</p>
        </div>
        <div className="rules-grid">
          <article>
            <span>01</span>
            <div><h3>Made fresh</h3><p>Please allow a minimum preparation time of 20 minutes.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>Order carefully</h3><p>Once preparation begins, an order cannot be cancelled.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>Taxes apply</h3><p>Government taxes are applicable as per current rules.</p></div>
          </article>
          <article>
            <span>04</span>
            <div><h3>Subject to availability</h3><p>Dishes are served according to ingredient availability.</p></div>
          </article>
          <article>
            <span>05</span>
            <div><h3>Outside food</h3><p>Outside food is not permitted inside the restaurant.</p></div>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <RestaurantLogo footer />
        </div>
        <p>© 2026 Udupi Restaurant, Anand</p>
      </footer>

      <div className="mobile-action">
        <a href="tel:+919574188701"><PhoneIcon /><span>Call to order</span><strong>+91 95741 88701</strong></a>
      </div>
    </main>
  );
}
