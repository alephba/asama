
import { Project } from '../../types';

export const projects: Project[] = [
  {
    slug: "neom-genesis",
    featured: true,
    coverImage: "https://picsum.photos/seed/neom/800/600",
    title: "پیدایش نئوم",
    client: "شرکت FUTR",
    year: 2024,
    description: "یک رونمایی سینمایی برای یک پروژه معماری آینده‌نگر. ما از هوش مصنوعی برای تولید رویه‌های شهری و بافت‌های محیطی فوق‌واقع‌گرایانه استفاده کردیم که مستقیماً در آنریل انجین 5 برای رهگیری پرتو آنی ادغام شدند.",
    tools: ["آنریل انجین 5", "هودینی", "سابستنس پینتر", "نیوک", "پایتون"],
    aiPipeline: ["نقاشی داخلی SDXL", "آموزش LoRA سفارشی", "ControlNet برای بافت‌ها", "GAN برای آسمان‌ها"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/neom1/1280/720",
      "https://picsum.photos/seed/neom2/1280/720",
      "https://picsum.photos/seed/neom3/1280/720"
    ],
    aiPrompts: "پرامپت: `نمای عریض سینمایی، شهر بیابانی آینده‌نگر، معماری ارگانیک با الهام از زاها حدید، نور ساعت طلایی، فوق‌واقع‌گرایانه، رندر اکتان، 8k --ar 16:9 --style raw`\nمنفی: `ویران‌شهری، خرابه‌ها، آلودگی، کارتونی`"
  },
  {
    slug: "project-chimera",
    featured: true,
    coverImage: "https://picsum.photos/seed/chimera/800/1000",
    title: "پروژه کایمرا",
    client: "Starlight Interactive",
    year: 2024,
    description: "طراحی و انیمیشن موجودات برای تریلر یک بازی نسل جدید. ما یک جریان کاری جدید با استفاده از هنر مفهومی مولد به عنوان پایه توسعه دادیم، سپس در ZBrush مجسمه‌سازی و در مایا ریگ‌بندی کردیم. سنتز حرکتی مبتنی بر هوش مصنوعی، انیمیشن‌های ثانویه ظریفی را فراهم کرد.",
    tools: ["ZBrush", "مایا", "سابستنس پینتر", "RunwayML", "ComfyUI"],
    aiPipeline: ["هنر مفهومی مولد", "انتقال سبک", "سنتز حرکتی", "افزایش کیفیت بافت"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/chimera1/1280/720",
      "https://picsum.photos/seed/chimera2/1280/720"
    ]
  },
  {
    slug: "echoes-of-sylva",
    featured: false,
    coverImage: "https://picsum.photos/seed/sylva/800/600",
    title: "پژواک‌های سیلوا",
    client: "فیلم‌های گرین‌لایت",
    year: 2023,
    description: "ما یک محیط جنگلی جادویی کاملاً رویه‌ای برای یک فیلم کوتاه ایجاد کردیم. از هوش مصنوعی برای تولید تنوع گیاهی منحصربه‌فرد، جلوه‌های جوی و نقاشی‌های مات برای مناظر دوردست استفاده شد که به طور قابل توجهی زمان مدل‌سازی دستی را کاهش داد.",
    tools: ["هودینی", "SpeedTree", "آنریل انجین 5", "نیوک", "FFmpeg"],
    aiPipeline: ["تولید محتوای رویه‌ای (PCG)", "نقاشی مات با هوش مصنوعی", "تولید ابر حجمی"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/sylva1/1280/720",
      "https://picsum.photos/seed/sylva2/1280/720",
      "https://picsum.photos/seed/sylva3/1280/720",
      "https://picsum.photos/seed/sylva4/1280/720"
    ]
  },
  {
    slug: "aether-drift",
    featured: false,
    coverImage: "https://picsum.photos/seed/aether/800/1200",
    title: "رانش اتر",
    client: "Quantum Dynamics",
    year: 2023,
    description: "جلوه‌های بصری برای ویدیوی معرفی محصول. ما شبیه‌سازی‌های پیچیده ذرات و دینامیک سیالات را با استفاده از یک مدل هوش مصنوعی سفارشی آموزش‌دیده بر روی داده‌های فیزیکی دنیای واقعی تولید کردیم و تصاویری انتزاعی اما باورپذیر ارائه دادیم.",
    tools: ["هودینی", "بلندر", "افترافکت", "پایتون", "PyTorch"],
    aiPipeline: ["شبکه‌های عصبی آگاه از فیزیک (PINNs)", "StyleGAN برای الگوهای انتزاعی"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/aether1/1280/720",
      "https://picsum.photos/seed/aether2/1280/720"
    ]
  },
  {
    slug: "volta-commercial",
    featured: true,
    coverImage: "https://picsum.photos/seed/volta/800/800",
    title: "تبلیغ ولتا",
    client: "مومنتوم موتورز",
    year: 2024,
    description: "یک تبلیغ خودروی پرانرژی با توسعه گسترده صحنه و محیط‌های دیجیتال. پایپ‌لاین هوش مصنوعی ما امکان نمونه‌سازی سریع مکان‌های مجازی، از جاده‌های کوهستانی تا مناظر شهری را فراهم کرد و به کارگردان اجازه داد تا مکان‌ها را به صورت مجازی بررسی و تکرار کند.",
    tools: ["آنریل انجین 5", "بلندر", "نیوک", "ComfyUI", "SDXL"],
    aiPipeline: ["توسعه صحنه با هوش مصنوعی", "مکان‌یابی مجازی", "تولید HDRI", "نقاشی داخلی پلاک"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/volta1/1280/720",
      "https://picsum.photos/seed/volta2/1280/720",
      "https://picsum.photos/seed/volta3/1280/720"
    ]
  },
  {
    slug: "umbra-protocol",
    featured: false,
    coverImage: "https://picsum.photos/seed/umbra/800/600",
    title: "پروتکل آمبرا",
    client: "Cygnus Entertainment",
    year: 2023,
    description: "طراحی UI و FUI (رابط کاربری آینده‌نگر) برای یک سریال علمی-تخیلی. ما از مدل‌های مولد برای ایجاد تجسم‌های داده‌ای پیچیده و متحرک و نمایشگرهای هولوگرافیک استفاده کردیم که هم آینده‌نگر و هم کاربردی به نظر می‌رسیدند.",
    tools: ["افترافکت", "ایلاستریتور", "RunwayML", "پایتون"],
    aiPipeline: ["عناصر FUI مولد", "انیمیشن مبتنی بر داده", "انتقال سبک برای پوسته‌های UI"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/umbra1/1280/720"
    ]
  }
];
