# Tec Tiles - MVP Master Plan

**Created**: 2024-12-05
**Timeline**: 4-6 weeks
**Target Launch**: Mid-January 2025
**Client**: Yousuf (Tec Tiles owner)

---

## ⚠️ PLANNING RULE: No Implementation Code

**Simple test**: If Codex could find a code bug in it, it doesn't belong in this plan.

**ALLOWED (any length)**:
- ✅ Feature lists, phase summaries, task descriptions
- ✅ Tech stack decisions, timeline, costs

**NOT ALLOWED**:
- ❌ SQL CREATE TABLE statements
- ❌ TypeScript/Python code examples
- ❌ API route implementations
- ❌ Any code with bugs to review

---

## Project Overview

**What**: Redesign of tec-tiles.com - rebuilding their e-commerce website to match the quality of Tiles Direct, with improved admin and client dashboards.

**Existing Site**: tec-tiles.com (live, functional e-commerce)
- Location: Unit 2, Glyn Square, Milton Keynes
- Phone: +44 7931 993010
- Products: Wall tiles, floor tiles, outdoor tiles, PVC panels, acoustic panels, SPC flooring, accessories
- Offers: Free UK delivery over £599, Price match guarantee

**Target Users**:
- Customers (homeowners, contractors, designers) browsing and purchasing tiles
- Tec Tiles admin staff managing products, orders, and customers

**Core Value Proposition**: Professional online store matching Tiles Direct quality (reference: `assets/reference/Tiles Direct Homepage Screenshot.png`) with Tec Tiles branding

**Business Model**: Direct retail e-commerce (Stripe payments)

**MVP Goal**: Fully functional e-commerce site where customers can browse, add to cart, checkout, and admin can manage products/orders

---

## Design Reference

**Competitor to replicate**: Tiles Direct (tilesdirect.com)

Key layout elements to match:
- Top bar with contact info and quick links
- Main navigation with category dropdowns
- Hero banner carousel with promotional content
- Category quick-links with images
- Featured Products grid with prices
- Featured Collection section
- Social proof ("As Seen In" logos)
- CTA boxes (Request Catalogue, Price Match, New Tiles)
- Newsletter signup
- Comprehensive footer with multiple columns

**Brand Colors** (from existing logo):
- Primary: #8B1538 (Burgundy/Wine)
- Secondary: #4A4A4A (Dark Grey)
- Accent: White

---

## Tech Stack

### Foundation

**Boilerplate Choice**: Start fresh with Next.js 14 (no specific boilerplate - standard Next.js + Supabase setup)

**Why**: Simple e-commerce, single tenant, no complex multi-tenancy needed

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **ORM**: Supabase client (direct queries, no Prisma needed for this scope)
- **Auth**: Supabase Auth
- **Payments**: Stripe (Checkout or Payment Element)
- **File Storage**: Supabase Storage (product images)
- **Email**: Resend (transactional emails)
- **UI Components**: shadcn/ui + Tailwind CSS
- **Forms & Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **Hosting**: Vercel

### Testing & Quality
- **E2E Tests**: Playwright (Phase 4)
- **Type Safety**: TypeScript strict mode + Zod

### Optional (Phase 11+)
- **Analytics**: Vercel Analytics or Google Analytics
- **Monitoring**: Sentry
- **SEO**: Next SEO

---

## Key Decisions

1. **Next.js 14 App Router** - Modern, best practices, great DX
2. **Supabase over custom backend** - Faster development, managed auth + storage + database
3. **Stripe Checkout (not Payment Element)** - Simpler for MVP, redirect-based checkout
4. **shadcn/ui components** - High quality, customizable, matches Tiles Direct aesthetic
5. **No ORM (Prisma)** - Supabase client is sufficient for this scope, less complexity
6. **Server Components by default** - Better performance, less client JS
7. **Single admin role for MVP** - No complex RBAC needed initially
8. **Image optimization via Supabase + Next.js** - Built-in image optimization
9. **Resend for email** - Simple, reliable, good free tier
10. **Deploy to Vercel** - Best Next.js hosting, easy setup

---

## MVP Features (4-Week Plan)

### Phase 1: Foundation & Storefront (Week 1)

**Goal**: Set up infrastructure, database, and basic storefront pages

**Deliverables**:
- ✅ Next.js 14 project initialized with TypeScript, Tailwind, shadcn/ui
- ✅ Supabase project created (database, auth, storage)
- ✅ Database schema (products, categories, orders, users, addresses)
- ✅ Supabase Auth configured (email/password)
- ✅ Basic layout (Header, Footer matching Tiles Direct style)
- ✅ Homepage with hero, featured categories, featured products
- ✅ Category listing page
- ✅ Product detail page
- ✅ Environment variables configured

**Testing**:
- Pages render correctly
- Database connection works
- Auth signup/login works

**Success Criteria**:
- User can browse homepage, view categories, view product details
- Data loads from Supabase

---

### Phase 2: E-Commerce Core (Week 2)

**Goal**: Shopping cart and checkout functionality

**Deliverables**:
- ✅ Shopping cart (add, remove, update quantity)
- ✅ Cart persistence (localStorage or database for logged-in users)
- ✅ Checkout page (shipping address form)
- ✅ Stripe integration (Checkout Session)
- ✅ Order creation on successful payment
- ✅ Order confirmation page
- ✅ Order confirmation email (Resend)

**Testing**:
- Add products to cart
- Complete checkout flow
- Receive order confirmation email

**Success Criteria**:
- Full purchase flow works end-to-end
- Orders saved to database
- Payment processed via Stripe

---

### Phase 3: Client Dashboard (Week 3)

**Goal**: Customer account management

**Deliverables**:
- ✅ Login/Register pages
- ✅ Account dashboard overview
- ✅ Order history list
- ✅ Order detail view
- ✅ Address book (add/edit/delete addresses)
- ✅ Account settings (name, email, password)
- ✅ Password reset flow

**Testing**:
- User can register, login, logout
- User can view their orders
- User can manage addresses

**Success Criteria**:
- Customers can manage their accounts
- Order history displays correctly

---

### Phase 4: Admin Dashboard (Week 4)

**Goal**: Business management for Tec Tiles staff

**Deliverables**:
- ✅ Admin login (separate or role-based)
- ✅ Dashboard overview (sales summary, recent orders)
- ✅ Products list with search/filter
- ✅ Add/Edit/Delete products
- ✅ Product image upload
- ✅ Categories management
- ✅ Orders list with status filters
- ✅ Order detail view with status update
- ✅ Customers list
- ✅ Basic smoke tests

**Testing**:
- Admin can CRUD products
- Admin can view and update orders
- Admin can view customers

**Success Criteria**:
- Admin can manage entire store
- All CRUD operations work
- Orders can be processed

---

### Phase 5: Polish & Launch (Week 5-6)

**Goal**: Launch-ready product

**Deliverables**:
- ✅ Mobile responsive design
- ✅ Loading states and error handling
- ✅ SEO basics (meta tags, sitemap)
- ✅ Performance optimization (image lazy loading, code splitting)
- ✅ Bug fixes from testing
- ✅ Client review and feedback incorporation
- ✅ Production deployment
- ✅ Domain configuration
- ✅ SSL certificate

**Testing**:
- Cross-browser testing
- Mobile testing
- Full user flow testing

**Success Criteria**:
- Site is live and functional
- No critical bugs
- Client approval

---

### Phase 11+: Post-MVP Features

**Deferred Features**:
- Wishlist functionality
- Product reviews and ratings
- Promo codes and discounts
- Email marketing integration
- Advanced analytics dashboard
- Inventory management with low-stock alerts
- Related products recommendations
- Multi-language support
- Gift cards
- Loyalty program

**When to Build**:
- After MVP launch and client feedback
- Based on customer usage patterns

---

## Scope Triage & Go/No-Go Gates

### Priority Matrix

| Feature | Priority | Can Defer? |
|---------|----------|------------|
| Homepage + Browse | P0 | NO |
| Product pages | P0 | NO |
| Shopping cart | P0 | NO |
| Stripe checkout | P0 | NO |
| Order confirmation | P0 | NO |
| Customer login | P0 | NO |
| Order history | P0 | NO |
| Admin login | P0 | NO |
| Admin products CRUD | P0 | NO |
| Admin orders view | P0 | NO |
| Address book | P1 | YES - can use checkout address only |
| Account settings | P1 | YES - basic version only |
| Admin customers list | P1 | YES - can defer |
| Admin analytics | P2 | YES - defer to Phase 11 |
| Wishlist | P2 | YES - Phase 11 |
| Reviews | P2 | YES - Phase 11 |

### Go/No-Go Criteria

**Each phase must meet these criteria to proceed**:

**Phase 1-2 (Foundation + E-Commerce)**:
- ✅ Users can browse and purchase products
- ✅ Orders saved correctly
- ✅ Stripe payments work

**Phase 3-4 (Dashboards)**:
- ✅ Customers can view their orders
- ✅ Admin can manage products and orders

**Phase 5 (Launch)**:
- ✅ Mobile responsive
- ✅ No critical bugs
- ✅ Client approval

**If Behind Schedule**:
1. Cut P2 features first
2. Simplify P1 features
3. Only extend timeline if P0 features blocked

---

## Timeline Estimate

**Team Size**: Solo developer + AI assistance
**Time Commitment**: Full-time equivalent
**Estimated Duration**: 4-6 weeks

| Phase | Duration | Dates |
|-------|----------|-------|
| Phase 1: Foundation & Storefront | 1 week | Week 1 |
| Phase 2: E-Commerce Core | 1 week | Week 2 |
| Phase 3: Client Dashboard | 1 week | Week 3 |
| Phase 4: Admin Dashboard | 1 week | Week 4 |
| Phase 5: Polish & Launch | 1-2 weeks | Week 5-6 |
| **Total** | **5-6 weeks** | **Dec - Mid Jan** |

**Buffer**: 1 week included in Phase 5

---

## Monthly Cost Estimate

| Service | Plan | Cost | Justification |
|---------|------|------|---------------|
| Supabase | Pro | $25/mo | Database, auth, storage |
| Vercel | Pro | $20/mo | Hosting with analytics |
| Stripe | Pay-per-use | ~2.9% + 30¢ | Payment processing |
| Resend | Starter | $0-20/mo | Transactional emails |
| Domain | Annual | ~$15/yr | Custom domain |

**Total**: ~$50-70/month + Stripe transaction fees

**Budget**: $500+/month (well within budget)

---

## Database Schema Overview

**Core Tables** (descriptions only - no SQL):

**users**
- id, email, name, role (customer/admin), created_at

**products**
- id, name, description, price, category_id, images, variants, stock, is_active, created_at

**categories**
- id, name, slug, image, parent_id (for subcategories), order

**orders**
- id, user_id, status, total, shipping_address, billing_address, stripe_payment_id, created_at

**order_items**
- id, order_id, product_id, variant, quantity, price

**addresses**
- id, user_id, name, line1, line2, city, county, postcode, country, is_default

---

## Success Metrics

### MVP Success Defined As:

**Technical**:
- Site is live and functional
- All P0 features working
- No critical bugs

**Business**:
- First orders processed
- Admin can manage store independently
- Client (Yousuf) approval

**User Experience**:
- Mobile responsive
- Fast page loads
- Smooth checkout flow

---

## Next Steps

1. ✅ Complete requirements document
2. ✅ Complete this master plan
3. ⬜ Create detailed Phase 1 plan
4. ⬜ Set up Supabase project
5. ⬜ Initialize Next.js project
6. 🚀 Start Phase 1 implementation

---

## Appendix

### Assets Available
- Logo: `assets/logo/Tec Tiles Logo.jpg`
- Reference: `assets/reference/Tiles Direct Homepage Screenshot.png`
- Old project: `/Users/baileybarry/tectiles/` (React components for reference)

### Resources Used
- Planning Framework: `/Users/baileybarry/resources/planning/`
- UI Components: shadcn/ui
- E-commerce reference: Tiles Direct (tilesdirect.com)

---

**Last Updated**: 2024-12-05
**Status**: Draft - Ready for implementation
