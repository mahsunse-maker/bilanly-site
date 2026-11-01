# bilanly-site (proje özeti)

> Son güncelleme: 2026-11-01

https://bilanly.app sitesinin yayın deposu (herkese açık). Cloudflare Pages `bilanly-site` projesi `public/`
klasörünü yayınlar; **`main`'e push = otomatik yayın**. Derleme adımı yok, düz HTML.

- `public/index.html`: Bilanly tanıtım (TR) · `public/gizlilik/`, `public/kosullar/`: yasal sayfalar
- `public/shots/`: uygulama ekranları (yalnızca hayali örnek şirketler) · `public/og.png`: paylaşım görseli

Asıl kaynak: Bilanly uygulama deposundaki `docs/site/` (`~/Desktop/patron_finans`, `mahsunse-maker/bilanly`).
İkisini aynı tut: önce orada değiştir (yasal sayfalar `python3 docs/site/yasal_sayfalar.py` ile taslaklardan
üretilir), sonra `public/` ve `wrangler.jsonc` dosyalarını buraya kopyalayıp push et. Doğrulamayı bilanly.app
üzerinden yap (Türkiye ağından *.pages.dev açılmayabilir).

Yasal sayfalar avukat onayına kadar taslak: `noindex` ve üstte taslak şeridi.

Proje listesi: `~/.claude/CLAUDE.md`.
